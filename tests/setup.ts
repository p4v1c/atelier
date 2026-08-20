/**
 * Charge .env avant les tests : vitest ne le fait pas, et les tests d'API
 * parlent au vrai Postgres de développement (npm run db:up).
 */
import fs from "node:fs";

if (!process.env.DATABASE_URL && fs.existsSync(".env")) {
  process.loadEnvFile(".env");
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL manquant : lance `npm run db:up` et vérifie .env");
}
