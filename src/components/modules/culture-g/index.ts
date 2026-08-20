import { AccueilCultureG } from "./Accueil";
import { EnveloppeCultureG } from "./Enveloppe";
import type { PresentationModule } from "../types";

export const cultureG: PresentationModule = {
  theme: "culture-g",
  enteteAutonome: true,
  enveloppe: EnveloppeCultureG,
  ecrans: { accueil: AccueilCultureG },
};
