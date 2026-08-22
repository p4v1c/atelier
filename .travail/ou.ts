import { readFileSync } from "node:fs";
import { globSync } from "node:fs";
const q = process.argv.slice(2).join(" ");
for (const f of [...globSync("prisma/seed/culture-g/**/*.ts"), ...globSync("heritage/culture-g/data/*.json")]) {
  const s = readFileSync(f, "utf8");
  const n = s.split(q).length - 1;
  if (n > 0) console.log(`${n}×  ${f}`);
}
