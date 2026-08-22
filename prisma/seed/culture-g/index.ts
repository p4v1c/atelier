/**
 * Les notions de culture générale écrites ici, sans cours pour l'instant.
 *
 * Voir commun.ts pour les règles d'écriture et les trois marques qui les
 * identifient, et RESUME.md pour l'état d'avancement du chantier.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { CG_HISTOIRE_FRANCE } from "./histoire-france";
import { CG_GEOGRAPHIE } from "./geographie";
import { CG_HISTOIRE_MONDE } from "./histoire-monde";
import { CG_INSTITUTIONS_ECONOMIE } from "./institutions-economie";
import { CG_LITTERATURE } from "./litterature";
import { CG_PHYSIQUE_CHIMIE } from "./physique-chimie";
import { CG_SCIENCES_VIE } from "./sciences-vie";

export const CG_NEUF: SeedSkill[] = [...CG_HISTOIRE_FRANCE, ...CG_HISTOIRE_MONDE, ...CG_GEOGRAPHIE, ...CG_SCIENCES_VIE, ...CG_PHYSIQUE_CHIMIE, ...CG_INSTITUTIONS_ECONOMIE, ...CG_LITTERATURE];
