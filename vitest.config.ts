import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    setupFiles: ["./tests/setup.ts"],
    // `output: "standalone"` recopie tout le projet dans .next/standalone,
    // tests compris : sans cette exclusion, chaque test est exécuté deux fois.
    exclude: ["**/node_modules/**", "**/.next/**", "**/dist/**"],
    // Les tests d'API partagent une base : on les sérialise plutôt que de
    // multiplier les jeux de données jetables.
    fileParallelism: false,
    testTimeout: 20_000,
  },
});
