import { chromium } from "playwright";
const [OUT, jeton] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: "/home/pavic/.cache/ms-playwright/chromium-1148/chrome-linux/chrome" });
const ctx = await b.newContext({ viewport: { width: 900, height: 1600 } });
await ctx.addCookies([{ name: "la_regle_session", value: jeton, domain: "localhost", path: "/" }]);
const p = await ctx.newPage();
const err = []; p.on("pageerror", (e) => err.push(String(e).slice(0, 160)));

await p.goto("http://localhost:3000", { waitUntil: "networkidle" });
await p.waitForTimeout(1800);
await p.locator(".module", { hasText: "Culture générale" }).click();
await p.waitForTimeout(1400);
console.log("titre :", JSON.stringify((await p.locator("h1").first().textContent())?.trim()));
await p.locator(".tuile", { hasText: /catalogue/i }).click();
await p.waitForTimeout(2500);
await p.screenshot({ path: OUT + "/catalogue-cg.png" });

// premier domaine, première fiche
const domaines = p.locator(".domaine-entete, [class*=domaine] button, .groupe > button");
console.log("domaines :", await domaines.count());
if (await domaines.count()) { await domaines.first().click(); await p.waitForTimeout(500); }
const fiches = p.locator(".fiche-entete");
console.log("fiches visibles :", await fiches.count());
if (await fiches.count()) { await fiches.first().click(); await p.waitForTimeout(600); }
console.log("titre fiche :", (await p.locator(".fiche.ouverte .fiche-t").first().textContent().catch(()=> "—"))?.trim().slice(0,60));
const lire = p.locator("button").filter({ hasText: /Lire le cours/ });
console.log("« Lire le cours » :", await lire.count());
if (await lire.count()) { await lire.first().click(); await p.waitForTimeout(2600); }
console.log("leçon :", (await p.locator(".lecon h2").first().textContent().catch(() => "— non ouverte —"))?.trim());
console.log("sections :", await p.locator(".lecon section").count(), "· visuels :", await p.locator(".visuel").count());
console.log("types :", [...new Set(await p.locator(".visuel").evaluateAll(ns => ns.map(n => n.className.replace("visuel ",""))))]);
await p.screenshot({ path: OUT + "/lecon.png" });
await p.evaluate(() => window.scrollTo(0, 1400));
await p.waitForTimeout(400);
await p.screenshot({ path: OUT + "/lecon-visuels.png" });

await p.getByRole("button", { name: /Me tester/ }).first().click().catch(() => {});
await p.waitForTimeout(2600);
console.log("QCM :", (await p.locator(".enonce").first().textContent().catch(() => "—"))?.trim().slice(0, 64),
            "·", await p.locator(".proposition").count(), "propositions");
if (await p.locator(".proposition").count()) {
  await p.locator(".proposition").first().click();
  await p.waitForTimeout(1400);
  console.log("verdict :", (await p.locator(".verdict span").first().textContent())?.trim(),
              "· bonne marquée :", await p.locator(".proposition.juste").count(),
              "· explication :", (await p.locator(".explication").first().textContent().catch(() => "—"))?.trim().slice(0, 55));
}
await p.screenshot({ path: OUT + "/qcm.png" });
console.log("erreurs :", err.length ? err.slice(0, 2) : "aucune");
await b.close();
