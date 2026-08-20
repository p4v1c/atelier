/**
 * npm run seed [-- --strict] [-- --prune] [-- --module=<id>]
 *
 * Le seed parcourt le registre des modules : il ne connaît ni le français, ni
 * la culture générale. Ajouter un module, c'est l'inscrire dans
 * src/modules/index.ts, pas modifier ce fichier.
 *
 * Idempotent : relançable sans rien casser. Les exercices sont appariés sur
 * leur empreinte, les compétences sur leur slug, les dictées sur leur texte.
 *
 * Par défaut le seed ne SUPPRIME rien : un exercice présent en base mais absent
 * du lot est signalé, pas effacé — le supprimer emporterait avec lui les
 * `Attempt` qui le référencent. `--prune` force la suppression, en le disant.
 *
 * Rien n'entre en base sans être passé par le validateur.
 */
import { Prisma, PrismaClient, type ContentStatus } from "@prisma/client";
import { MODULES, kindOf } from "../src/modules";
import { contenuDe } from "../src/modules/contenu";
import { assertValid } from "../src/lib/validate-content";

const prisma = new PrismaClient();
const strict = process.argv.includes("--strict");
const prune = process.argv.includes("--prune");
const seulement = process.argv.find((a) => a.startsWith("--module="))?.slice("--module=".length);

async function main() {
  const modules = seulement ? MODULES.filter((m) => m.id === seulement) : MODULES;
  if (modules.length === 0) throw new Error(`Aucun module « ${seulement} » dans le registre.`);

  for (const mod of modules) {
    console.log(`\n━━ ${mod.name} ━━`);
    const batches = contenuDe(mod);
    const report = assertValid(mod, batches, strict);
    console.log(
      `Validation OK — ${report.skillCount} ${mod.vocabulaire.skillPluriel}, ` +
        `${report.exerciseCount} ${mod.vocabulaire.exercisePluriel}, ` +
        `${report.dictationCount} dictées (${report.warnCount} avertissement(s)).`
    );

    await prisma.module.upsert({
      where: { id: mod.id },
      create: {
        id: mod.id,
        name: mod.name,
        tagline: mod.tagline,
        position: mod.position,
        progression: mod.progression ?? "repetition-espacee",
        status: (mod.status ?? "active") as ContentStatus,
      },
      update: {
        name: mod.name,
        tagline: mod.tagline,
        position: mod.position,
        progression: mod.progression ?? "repetition-espacee",
        status: (mod.status ?? "active") as ContentStatus,
      },
    });

    /* ── catégories ── */
    const categoryIdByName = new Map<string, string>();
    for (const [position, c] of mod.categories.entries()) {
      const row = await prisma.category.upsert({
        where: { moduleId_slug: { moduleId: mod.id, slug: c.slug } },
        create: { moduleId: mod.id, slug: c.slug, name: c.name, position },
        update: { name: c.name, position },
      });
      categoryIdByName.set(c.name, row.id);
    }
    console.log(`Catégories : ${categoryIdByName.size}`);

    /* ── compétences et exercices ── */
    let skillsTouched = 0;
    let exercisesTouched = 0;
    const orphans: string[] = [];

    for (const batch of batches) {
      for (const seed of batch.skills) {
        const categoryId = categoryIdByName.get(seed.category);
        if (!categoryId) {
          throw new Error(`catégorie « ${seed.category} » absente (${seed.slug})`);
        }

        const status = (seed.status ?? "active") as ContentStatus;
        const commun = {
          moduleId: mod.id,
          categoryId,
          title: seed.title,
          statement: seed.statement,
          tip: seed.tip,
          difficulty: seed.difficulty,
          status,
          batch: batch.id,
          // Prisma.DbNull et non `null` : sur une colonne JSON, `null` veut dire
          // « le JSON null », pas « la case est vide ».
          lesson:
            seed.lesson === undefined
              ? Prisma.DbNull
              : (seed.lesson as Prisma.InputJsonValue),
        };
        const skill = await prisma.skill.upsert({
          where: { slug: seed.slug },
          create: { slug: seed.slug, ...commun },
          update: commun,
        });
        skillsTouched++;

        const empreintes: string[] = [];
        for (const ex of seed.exercises) {
          const k = kindOf(mod, ex.kind);
          // L'empreinte est préfixée par le module : deux matières ont le droit
          // de poser la même question avec deux réponses différentes.
          const fingerprint = `${mod.id}:${k.fingerprint(ex.payload)}`;
          empreintes.push(fingerprint);
          const data = {
            skillId: skill.id,
            kind: ex.kind,
            payload: ex.payload as Prisma.InputJsonValue,
            difficulty: ex.difficulty ?? seed.difficulty,
            status: (ex.status ?? status) as ContentStatus,
            batch: batch.id,
          };
          await prisma.exercise.upsert({
            where: { fingerprint },
            create: { ...data, fingerprint },
            update: data,
          });
          exercisesTouched++;
        }

        const stale = await prisma.exercise.findMany({
          where: { skillId: skill.id, fingerprint: { notIn: empreintes } },
          select: { id: true, fingerprint: true },
        });
        for (const s of stale) orphans.push(`${seed.slug} — « ${s.fingerprint} »`);
        if (prune && stale.length > 0) {
          await prisma.exercise.deleteMany({ where: { id: { in: stale.map((s) => s.id) } } });
        }
      }
    }
    console.log(
      `${mod.vocabulaire.skillPluriel} : ${skillsTouched} · ` +
        `${mod.vocabulaire.exercisePluriel} : ${exercisesTouched}`
    );

    /* ── dictées ── */
    let dictationsTouched = 0;
    const keptDictations: string[] = [];
    for (const batch of batches) {
      for (const d of batch.dictations ?? []) {
        const skills = await prisma.skill.findMany({
          where: { slug: { in: d.skillSlugs }, moduleId: mod.id },
          select: { id: true, slug: true },
        });
        const missing = d.skillSlugs.filter((s) => !skills.some((r) => r.slug === s));
        if (missing.length > 0) {
          throw new Error(`dictée « ${d.text.slice(0, 30)}… » : introuvables ${missing.join(", ")}`);
        }
        const data = {
          moduleId: mod.id,
          theme: d.theme,
          difficulty: d.difficulty,
          status: (d.status ?? "active") as ContentStatus,
          batch: batch.id,
          skills: { set: skills.map((r) => ({ id: r.id })) },
        };
        await prisma.dictation.upsert({
          where: { text: d.text },
          create: { text: d.text, ...data, skills: { connect: skills.map((r) => ({ id: r.id })) } },
          update: data,
        });
        dictationsTouched++;
        keptDictations.push(d.text);
      }
    }
    if (dictationsTouched > 0) console.log(`Dictées : ${dictationsTouched}`);

    // Une dictée retirée d'un lot resterait sinon en base, invisible dans les
    // fichiers mais bien servie à l'utilisateur.
    const staleDictations = await prisma.dictation.findMany({
      where: { moduleId: mod.id, text: { notIn: keptDictations } },
      select: { id: true, text: true },
    });
    for (const d of staleDictations) orphans.push(`dictée — « ${d.text.slice(0, 50)} »`);
    if (prune && staleDictations.length > 0) {
      await prisma.dictation.deleteMany({ where: { id: { in: staleDictations.map((d) => d.id) } } });
    }

    // Une compétence retirée des lots — renommée, remplacée — resterait sinon
    // en base et continuerait d'être servie, invisible dans les fichiers.
    const keptSlugs = batches.flatMap((b) => b.skills.map((s) => s.slug));
    const staleSkills = await prisma.skill.findMany({
      where: { moduleId: mod.id, slug: { notIn: keptSlugs } },
      select: { id: true, slug: true, _count: { select: { exercises: true } } },
    });
    for (const s of staleSkills) {
      orphans.push(`${mod.vocabulaire.skill} — ${s.slug} (${s._count.exercises} exercices)`);
    }
    if (prune && staleSkills.length > 0) {
      await prisma.skill.deleteMany({ where: { id: { in: staleSkills.map((s) => s.id) } } });
    }

    if (orphans.length > 0) {
      console.log(
        `\n${orphans.length} élément(s) en base sans équivalent dans les lots` +
          (prune ? " — SUPPRIMÉS (--prune) :" : " — conservés (--prune pour les retirer) :")
      );
      for (const o of orphans.slice(0, 20)) console.log(`  ${o}`);
      if (orphans.length > 20) console.log(`  … (+${orphans.length - 20})`);
    }
  }

  /* ── bilan ── */
  console.log("\n━━ En base ━━");
  for (const m of await prisma.module.findMany({ orderBy: { position: "asc" } })) {
    const [skills, exercises, dictations] = await Promise.all([
      prisma.skill.count({ where: { moduleId: m.id } }),
      prisma.exercise.count({ where: { skill: { moduleId: m.id } } }),
      prisma.dictation.count({ where: { moduleId: m.id } }),
    ]);
    const voc = MODULES.find((x) => x.id === m.id)?.vocabulaire;
    console.log(
      `${m.name.padEnd(18)} ${skills} ${voc?.skillPluriel ?? "compétences"} · ` +
        `${exercises} ${voc?.exercisePluriel ?? "exercices"}` +
        (dictations > 0 ? ` · ${dictations} dictées` : "")
    );
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e instanceof Error ? e.message : e);
    await prisma.$disconnect();
    process.exit(1);
  });
