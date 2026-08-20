import type { ReactNode } from "react";
import "./globals.css";
import "./modules/culture-g.css";
import "./modules/langues.css";

export const metadata = {
  title: "La Règle",
  description: "Repérer la faute, comprendre pourquoi, ne plus la refaire.",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Reprises telles quelles du fichier d'origine : Bodoni Moda pour les
            titres et les phrases, Karla pour le texte, Caveat pour l'annotation
            manuscrite. Sans elles, l'identité visuelle s'effondre. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,ital,wght@6..96,0,400;6..96,0,500;6..96,1,400&family=Karla:wght@400;500;700&family=Caveat:wght@600&family=Archivo:wdth,wght@100,600;100,700;112,700&family=IBM+Plex+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
