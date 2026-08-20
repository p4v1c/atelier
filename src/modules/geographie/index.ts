import { qcm } from "../kinds/qcm";
import type { LearningModule } from "../types";

export const geographie: LearningModule = {
  id: "geographie",
  name: "Géographie",
  tagline: "Capitales, fleuves, reliefs — un module d'essai",
  position: 5,
  vocabulaire: {
    skill: "notion",
    skillPluriel: "notions",
    exercise: "question",
    exercisePluriel: "questions",
    catalogue: "Les notions",
  },
  kinds: [qcm],
  categories: [
    { slug: "capitales", name: "Capitales" },
    { slug: "reliefs", name: "Reliefs et fleuves" },
  ],
};
