/**
 * Les notions de culture générale écrites ici, sans cours pour l'instant.
 *
 * Voir commun.ts pour les règles d'écriture et les trois marques qui les
 * identifient, et RESUME.md pour l'état d'avancement du chantier.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { CG_HISTOIRE_FRANCE } from "./histoire-france";
import { CG_ARTS_MUSIQUE_2 } from "./arts-musique-2";
import { CG_ARTS_MUSIQUE } from "./arts-musique";
import { CG_CINEMA_MEDIAS } from "./cinema-medias";
import { CG_GASTRONOMIE } from "./gastronomie";
import { CG_GEOGRAPHIE_2 } from "./geographie-2";
import { CG_GEOGRAPHIE } from "./geographie";
import { CG_HISTOIRE_FRANCE_2 } from "./histoire-france-2";
import { CG_HISTOIRE_MONDE_2 } from "./histoire-monde-2";
import { CG_HISTOIRE_MONDE } from "./histoire-monde";
import { CG_INSTITUTIONS_ECONOMIE_2 } from "./institutions-economie-2";
import { CG_INSTITUTIONS_ECONOMIE } from "./institutions-economie";
import { CG_LANGUE_FRANCAISE } from "./langue-francaise";
import { CG_LITTERATURE_2 } from "./litterature-2";
import { CG_LITTERATURE } from "./litterature";
import { CG_MYTHOLOGIE_RELIGIONS } from "./mythologie-religions";
import { CG_PHYSIQUE_CHIMIE_2 } from "./physique-chimie-2";
import { CG_PHYSIQUE_CHIMIE } from "./physique-chimie";
import { CG_SPORT } from "./sport";
import { CG_SCIENCES_TECH } from "./sciences-tech";
import { CG_SCIENCES_VIE_2 } from "./sciences-vie-2";
import { CG_SCIENCES_VIE } from "./sciences-vie";

export const CG_NEUF: SeedSkill[] = [...CG_HISTOIRE_FRANCE, ...CG_HISTOIRE_MONDE, ...CG_GEOGRAPHIE, ...CG_SCIENCES_VIE, ...CG_PHYSIQUE_CHIMIE, ...CG_INSTITUTIONS_ECONOMIE, ...CG_LITTERATURE, ...CG_LANGUE_FRANCAISE, ...CG_ARTS_MUSIQUE, ...CG_CINEMA_MEDIAS, ...CG_MYTHOLOGIE_RELIGIONS, ...CG_SCIENCES_TECH, ...CG_GASTRONOMIE, ...CG_SPORT, ...CG_HISTOIRE_MONDE_2, ...CG_HISTOIRE_FRANCE_2, ...CG_GEOGRAPHIE_2, ...CG_LITTERATURE_2, ...CG_SCIENCES_VIE_2, ...CG_PHYSIQUE_CHIMIE_2, ...CG_ARTS_MUSIQUE_2, ...CG_INSTITUTIONS_ECONOMIE_2];
