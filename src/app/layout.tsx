import type { ReactNode } from "react";
import "./globals.css";
import "./coque.css";
import "./modules/culture-g.css";
import "./modules/langues.css";
import "./modules/geographie.css";
import "./themes.css";

export const metadata = {
  title: "La Règle",
  description: "Repérer la faute, comprendre pourquoi, ne plus la refaire.",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    /* Le script inline pose data-theme sur <html> avant l'hydratation : React
       voit donc un attribut que le rendu serveur n'a pas produit, et le
       signale. C'est précisément le cas que `suppressHydrationWarning` couvre,
       et il ne porte que sur cette balise. */
    <html lang="fr" suppressHydrationWarning>
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
        {/* Le thème est posé AVANT la première peinture.
            Sans ce script, la page s'affiche une fraction de seconde dans le
            thème par défaut avant que React ne lise localStorage : le flash
            est court et parfaitement visible. Il est inline et synchrone pour
            cette seule raison. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('atelier:theme');" +
              "if(t&&['nuit','charbon','jour','sepia'].indexOf(t)>=0)" +
              "document.documentElement.dataset.theme=t;}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
