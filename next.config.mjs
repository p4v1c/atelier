/**
 * Deux sorties, un seul dépôt.
 *
 * En temps normal, l'application est un service : Next construit une sortie
 * autonome, les routes de `src/app/api` parlent à Postgres, et le navigateur
 * leur parle.
 *
 * Avec NEXT_PUBLIC_HORS_LIGNE=1, elle devient un paquet de fichiers destiné à
 * être posé dans un APK : `output: "export"` produit du HTML et du JavaScript
 * statiques, sans serveur derrière. Ce mode ne tolère aucun gestionnaire de
 * route, d'où la copie de travail que fabrique `scripts/construire-apk.sh` —
 * elle retire `src/app/api` avant de bâtir. Le drapeau ne suffirait pas seul.
 */
const horsLigne = process.env.NEXT_PUBLIC_HORS_LIGNE === "1";

/** @type {import('next').NextConfig} */
const nextConfig = horsLigne
  ? {
      output: "export",
      // Pas d'optimiseur d'images : il tourne sur un serveur, et il n'y en a
      // pas. Les illustrations des cours sont de toute façon des data-URI.
      images: { unoptimized: true },
    }
  : {
      // Sortie autonome : le conteneur de production n'embarque que le nécessaire.
      output: "standalone",
      serverExternalPackages: ["@node-rs/argon2", "@prisma/client"],
    };

export default nextConfig;
