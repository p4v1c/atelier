/**
 * Géographie — les séries, un continent à la fois.
 *
 * Le module est une grille : quatre continents en colonnes, quatre jeux en
 * lignes. C'est la forme des jeux de géographie, et elle vaut mieux qu'un
 * catalogue de onze familles où l'on se perdait — non parce qu'elle offre
 * moins, mais parce qu'on sait toujours où l'on est.
 *
 * Les séries ne sont pas écrites une à une : elles se déduisent de la table
 * des pays. Ajouter un pays ajoute trois questions, dans les trois jeux de son
 * continent, sans qu'on ait à y penser.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { quizCapitale, quizDrapeau, situer } from "./commun";
import { AMERIQUES, ASIE, CONTINENTS, EUROPE, MONDE_RESTE, MONDE_SEUL, type Fiche } from "./pays";

/** Ce qui distingue un continent d'un autre, en une phrase par jeu. */
const REPERES: Record<string, { drapeaux: string; capitales: string; situer: string }> = {
  europe: {
    drapeaux: "Trois familles couvrent presque tout : la croix décalée au nord, le tricolore vertical à l'ouest, le panslave à l'est.",
    capitales: "Beaucoup ne sont pas la plus grande ville du pays. Quand une ville surprend, c'est souvent qu'elle arbitre entre deux autres.",
    situer: "Deux repères tiennent la carte : la botte italienne au sud, la Scandinavie au nord. Le reste se situe par rapport à eux.",
  },
  afrique: {
    drapeaux: "Le vert-jaune-rouge vient d'Éthiopie, l'un des deux seuls pays du continent jamais colonisés, avec le Libéria ; il a essaimé sur tout le continent.",
    capitales: "Plusieurs ont été bâties de toutes pièces au centre du pays pour cesser de dépendre d'un port colonial.",
    situer: "Le Sahara barre le nord, le golfe de Guinée creuse l'ouest, la corne pointe à l'est. Trois formes, et la carte se tient.",
  },
  asie: {
    drapeaux: "Le croissant marque l'ouest musulman, le rouge l'est communiste, et quelques-uns ne ressemblent à rien d'autre — le Népal, la Corée du Sud.",
    capitales: "Le continent des capitales déplacées : Astana, Naypyidaw, Islamabad, et bientôt celle de l'Indonésie.",
    situer: "Suivez les péninsules : l'Arabie à l'ouest, l'Inde au centre, l'Indochine à l'est. Entre elles, les grands enclavés.",
  },
  ameriques: {
    drapeaux: "Les étoiles y disent le nombre : États, provinces, ou le ciel d'un jour précis pour le Brésil.",
    capitales: "L'altitude est un thème : Quito, Bogota, Mexico et La Paz sont toutes au-dessus de deux mille mètres.",
    situer: "L'isthme d'Amérique centrale est la charnière. Au nord trois pays, au sud douze — et le Brésil en occupe la moitié.",
  },
};

/* Le pluriel est donné, pas déduit : « drapeau » prend un x, et un « s »
   ajouté à l'aveugle donnait « 49 drapeaus » dans l'accroche de la série. */
const compte = (n: number, singulier: string, pluriel: string) => `${n} ${n > 1 ? pluriel : singulier}`;

function serieDrapeaux(cle: string, nom: string, pays: Fiche[]): SeedSkill {
  return {
    slug: `geo-drapeaux-${cle}`,
    category: "Drapeaux",
    title: `Drapeaux — ${nom}`,
    statement: `${compte(pays.length, "drapeau", "drapeaux")} à reconnaître. Le pays est donné, le dessin est à retrouver parmi quatre.`,
    tip: REPERES[cle]!.drapeaux,
    difficulty: 2,
    exercises: pays.map((f) => quizDrapeau(f, pays)),
  };
}

/**
 * Quand le nom de la capitale se lit dans celui du pays.
 *
 * Le Luxembourg, Djibouti, le Guatemala, le Panama et le Koweït portent
 * exactement le nom de leur capitale. Mais le piège est plus large : Tunis est
 * dans Tunisie, Alger dans Algérie, Bissau dans Guinée-Bissau, et Andorre dans
 * Andorre-la-Vieille. « Guinée-Bissau — quelle est sa capitale ? » donne la
 * réponse dans la question : ce n'est pas une question, c'est une ligne à
 * cocher. Ces pays sortent du quiz.
 *
 * Le fait n'est pas perdu pour autant : le jeu de localisation annonce la
 * capitale dans sa correction, et la parenté s'y voit d'elle-même.
 */
const nu = (t: string) =>
  t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]/g, "");

const homonyme = (f: Fiche) => {
  const pays = nu(f.nom);
  const ville = nu(f.capitale);
  return pays.includes(ville) || ville.includes(pays);
};

function serieCapitales(cle: string, nom: string, tous: Fiche[]): SeedSkill {
  const pays = tous.filter((f) => !homonyme(f));
  return {
    slug: `geo-capitales-${cle}`,
    category: "Capitales",
    title: `Capitales — ${nom}`,
    statement: `${compte(pays.length, "capitale", "capitales")}, à départager de trois voisines du même continent.`,
    tip: REPERES[cle]!.capitales,
    difficulty: 2,
    exercises: pays.map((f) => quizCapitale(f, pays)),
  };
}

function serieSituer(cle: string, nom: string, pays: Fiche[], region = cle): SeedSkill {
  return {
    slug: `geo-situer-${cle}`,
    category: "Situer sur la carte",
    title: `Situer — ${nom}`,
    statement: `${compte(pays.length, "pays", "pays")} sur une carte muette. Les nommer est une chose ; les trouver du premier coup en est une autre.`,
    tip: REPERES[cle]!.situer,
    difficulty: 2,
    exercises: pays.map((f) => situer(region, f)),
  };
}

/**
 * Le monde.
 *
 * Ses quiz ne rejouent pas ceux des continents — « Kenya — quelle est sa
 * capitale ? » est la même question quelle que soit la carte, et la poser deux
 * fois serait un doublon. Ils portent sur ce qu'aucune carte régionale ne
 * montre : les archipels, les micro-États, et les trois grands que le
 * découpage laissait de côté. C'est là que la matière atteint les cent
 * quatre-vingt-treize États membres de l'ONU.
 *
 * Le jeu de localisation, lui, change de nature plutôt que de sujet : trouver
 * la France sur un planisphère n'est pas le même geste que la trouver sur une
 * carte d'Europe.
 */
const RESTE_DU_MONDE: Fiche[] = [...MONDE_SEUL, ...MONDE_RESTE];

const MONDE: Fiche[] = [
  ...MONDE_SEUL,
  ...["250", "724", "620", "826", "578", "616", "380", "792", "804"].map((id) => trouver(EUROPE, id)),
  ...["504", "818", "566", "710", "231", "466", "450", "180"].map((id) => trouver(CONTINENTS[1]!.pays, id)),
  ...["156", "356", "392", "360", "682", "364", "398", "764"].map((id) => trouver(ASIE, id)),
  ...["840", "124", "484", "76", "32", "604", "152"].map((id) => trouver(AMERIQUES, id)),
];

function trouver(source: readonly Fiche[], id: string): Fiche {
  const f = source.find((p) => p.id === id);
  if (!f) throw new Error(`fiche introuvable : ${id}`);
  return f;
}

REPERES.monde = {
  drapeaux:
    "Beaucoup de ces drapeaux portent des étoiles ou des bandes bleues : la mer est le sujet commun des États insulaires.",
  capitales:
    "Sur un atoll, la capitale est souvent le seul vrai bourg du pays — et porte parfois le nom de l'île entière.",
  situer:
    "Sur un planisphère, la difficulté n'est plus de reconnaître une forme mais de savoir dans quel quart du monde regarder.",
};

/**
 * Les pays à cheval sur deux continents ne sont interrogés qu'une fois.
 *
 * La Turquie figure sur la carte d'Europe et sur celle d'Asie, et c'est
 * justifié : on l'y cherche des deux côtés. Mais « Turquie — quelle est sa
 * capitale ? » est la même question quel que soit le continent, et la poser
 * deux fois est un doublon — le validateur l'a bloqué, à raison.
 *
 * Le quiz revient donc au premier continent qui la porte, l'Europe, parce que
 * c'est là qu'un francophone la cherche. La CARTE, elle, la garde des deux
 * côtés : trouver la Turquie sur la carte d'Europe et la trouver sur celle
 * d'Asie ne sont pas le même geste.
 */
const dejaInterroges = new Set<string>();
const inedits = (pays: readonly Fiche[]): Fiche[] =>
  pays.filter((f) => {
    if (dejaInterroges.has(f.id)) return false;
    dejaInterroges.add(f.id);
    return true;
  });

export const GEO_SERIES: SeedSkill[] = [
  ...CONTINENTS.flatMap((c) => {
    const pourLeQuiz = inedits(c.pays);
    return [
      serieDrapeaux(c.cle, c.nom, pourLeQuiz),
      serieCapitales(c.cle, c.nom, pourLeQuiz),
      serieSituer(c.cle, c.nom, [...c.pays]),
    ];
  }),
  serieDrapeaux("monde", "le reste du monde", RESTE_DU_MONDE),
  serieCapitales("monde", "le reste du monde", RESTE_DU_MONDE),
  serieSituer("monde", "le planisphère", MONDE, "monde"),
];
