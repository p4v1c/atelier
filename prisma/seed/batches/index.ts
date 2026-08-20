/**
 * Lots de contenu de l'étape B et de l'étape C.
 *
 * Un lot n'est ajouté ici qu'après être passé au vert sous
 * `npm run validate:content`. L'ordre n'a pas d'importance : les additions sont
 * repliées dans leurs règles avant toute validation.
 */
import type { ContentBatch } from "../../../src/lib/content";
import { BATCH_001 } from "./batch-001-ponctuation";
import { BATCH_002 } from "./batch-002-typographie";
import { BATCH_003 } from "./batch-003-registre";
import { BATCH_004 } from "./batch-004-professionnels";
import { BATCH_005 } from "./batch-005-discutes";
import { BATCH_006 } from "./batch-006-accords";
import { BATCH_007 } from "./batch-007-conjugaison";
import { DENSIFY_HOMOPHONES } from "./densify-homophones";
import { DENSIFY_ACCORDS } from "./densify-accords";
import { DENSIFY_CONJUGAISON } from "./densify-conjugaison";
import { DENSIFY_ORTHOGRAPHE } from "./densify-orthographe";
import { DENSIFY_VOCABULAIRE } from "./densify-vocabulaire";
import { DICTATIONS } from "./dictations";
import { BATCH_008 } from "./batch-008-homophones";
import { BATCH_009 } from "./batch-009-paronymes";
import { BATCH_010 } from "./batch-010-conjugaison";
import { BATCH_011 } from "./batch-011-accords";
import { BATCH_012 } from "./batch-012-orthographe";
import { BATCH_013 } from "./batch-013-ponctuation-typo";
import { BATCH_014 } from "./batch-014-registre-pro";
import { BATCH_015 } from "./batch-015-expressions";
import { DENSIFY2_HOMOPHONES } from "./densify2-homophones";
import { DENSIFY2_ACCORDS_CONJ } from "./densify2-accords-conj";
import { DENSIFY2_ORTHO_VOCAB } from "./densify2-ortho-vocab";
import { DICTATIONS_2 } from "./dictations-2";
import { DENSIFY3_PONCTUATION_TYPO } from "./densify3-ponctuation-typo";
import { DENSIFY3_REGISTRE_PRO } from "./densify3-registre-pro-discutes";
import { DENSIFY3_ACCORDS_CONJ } from "./densify3-accords-conj";
import { DENSIFY3_HOMO_PARO } from "./densify3-homophones-paronymes";
import { DENSIFY3_CONJ_ACC_ORTHO } from "./densify3-conj-accords-ortho";
import { DENSIFY3_PONCT2_PRO_EXPR } from "./densify3-ponctuation2-pro-expr";
import { DICTATIONS_LONGUES } from "./dictations-longues";

export const BATCHES: ContentBatch[] = [BATCH_001, BATCH_002, BATCH_003, BATCH_004, BATCH_005, BATCH_006, BATCH_007, DENSIFY_HOMOPHONES, DENSIFY_ACCORDS, DENSIFY_CONJUGAISON, DENSIFY_ORTHOGRAPHE, DENSIFY_VOCABULAIRE, DICTATIONS, BATCH_008, BATCH_009, BATCH_010, BATCH_011, BATCH_012, BATCH_013, BATCH_014, BATCH_015, DENSIFY2_HOMOPHONES, DENSIFY2_ACCORDS_CONJ, DENSIFY2_ORTHO_VOCAB, DICTATIONS_2, DENSIFY3_PONCTUATION_TYPO, DENSIFY3_REGISTRE_PRO, DENSIFY3_ACCORDS_CONJ, DENSIFY3_HOMO_PARO, DENSIFY3_CONJ_ACC_ORTHO, DENSIFY3_PONCT2_PRO_EXPR, DICTATIONS_LONGUES];
