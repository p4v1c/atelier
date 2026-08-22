/**
 * Outil de correction des redites : localise une question par son texte exact
 * dans les sources (fichiers .ts du lot neuf ou .json du cahier d'origine),
 * puis la supprime ou la remplace.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";

export function fichiersSources(): string[] {
  return [
    ...globSync("prisma/seed/culture-g/**/*.ts"),
    ...globSync("heritage/culture-g/data/*.json"),
  ];
}

export function localiser(question: string): { fichier: string; occurrences: number }[] {
  const trouve: { fichier: string; occurrences: number }[] = [];
  for (const f of fichiersSources()) {
    const s = readFileSync(f, "utf8");
    const n = s.split(question).length - 1;
    if (n > 0) trouve.push({ fichier: f, occurrences: n });
  }
  return trouve;
}
