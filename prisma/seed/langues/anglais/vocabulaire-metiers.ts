/**
 * Anglais — six champs lexicaux de plus, du B1 au C1.
 *
 * Le travail et l'atelier d'un côté, l'environnement et les arts de l'autre,
 * puis deux séries C1 : le droit et les mots de la pensée abstraite. Ce sont
 * les champs où un francophone comprend tout et ne produit rien, faute du mot
 * exact — et où le mot exact ne se devine pas depuis le français.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_VOCABULAIRE_METIERS: LotCartes[] = [
  {
    slug: "en-voc-travail-metiers",
    category: "Vocabulaire",
    title: "Le travail : métiers, contrats, carrière",
    statement:
      "Un poste, un contrat, une augmentation, un licenciement. Le vocabulaire de l'emploi anglais est plein de mots courts qui ne se traduisent pas par leur cousin français.",
    tip: "A job est le poste, work est l'activité et indénombrable. « I have a work » ne se dit pas : c'est I have a job, ou I have work to do.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les mots de l'emploi",
      sections: [
        {
          titre: "Job, work, career : trois mots pour un seul",
          texte:
            "Le français dit « travail » pour l'activité, le poste et le métier. L'anglais les sépare, et l'erreur se remarque dès la première phrase d'un entretien.\n\nWork est l'activité, et il est indénombrable : I have a lot of work, jamais « a work ». Comme verbe, il est le plus général : I work in Lyon.\n\nA job est le poste occupé : she found a new job, he lost his job. C'est dénombrable, et c'est le mot qu'on emploie pour l'emploi concret.\n\nA career est le parcours entier, sur des années. Le mot français « carrière » a la même portée, mais l'anglais l'emploie moins souvent : on dit plutôt my working life.\n\nA profession est un métier qui suppose une formation longue et un titre — médecin, avocat, architecte. A trade est un métier manuel qualifié — plombier, électricien. An occupation est le terme administratif, celui des formulaires.\n\nEnfin, a position et a role sont les mots des offres d'emploi : we are recruiting for a senior position.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mot juste selon ce qu'on désigne",
              colonnes: ["Ce qu'on veut dire", "En anglais", "Dénombrable ?"],
              lignes: [
                ["l'activité en général", "work", "non"],
                ["le poste occupé", "a job", "oui"],
                ["le parcours entier", "a career", "oui"],
                ["un métier à diplôme", "a profession", "oui"],
                ["un métier manuel qualifié", "a trade", "oui"],
                ["la case du formulaire", "occupation", "oui"],
                ["le poste dans une offre", "a position, a role", "oui"],
                ["le lieu", "the workplace, the office", "oui"],
              ],
              note: "Employment est le fait d'être employé ; a job est le poste. Un CV se dit a CV au Royaume-Uni, a résumé aux États-Unis.",
            },
          ],
        },
        {
          titre: "Le contrat, et ce qui l'entoure",
          texte:
            "Le vocabulaire contractuel anglais est plus court que le français, et plusieurs mots sont des faux amis.\n\nA permanent contract est un contrat à durée indéterminée ; a fixed-term contract, à durée déterminée. Le temps partiel est part-time, le temps plein full-time. La période d'essai est a probation period ou a trial period.\n\nA notice period est le préavis, et to hand in your notice veut dire démissionner. Attention : to resign est démissionner ; to retire est partir à la retraite ; to be made redundant est être licencié pour motif économique ; to be fired ou to be sacked est être licencié pour faute.\n\nLe salaire est a salary quand il est mensuel et annuel, wages quand il est horaire ou hebdomadaire. A raise aux États-Unis, a pay rise au Royaume-Uni, pour l'augmentation. A bonus est la prime.\n\nEnfin, les avantages. Benefits désigne à la fois les avantages en nature et les prestations sociales. Perks est plus familier : les petits à-côtés. Et a pension est la retraite au sens de la somme versée.",
          visuels: [
            {
              type: "comparaison",
              titre: "Quitter son poste, quatre façons",
              colonnes: [
                {
                  titre: "De son fait",
                  points: [
                    "resign — démissionner.",
                    "hand in your notice — donner sa démission.",
                    "retire — partir à la retraite.",
                  ],
                },
                {
                  titre: "Du fait de l'employeur",
                  points: [
                    "be made redundant — motif économique.",
                    "be dismissed — licencié, terme neutre.",
                    "be fired, be sacked — pour faute, familier.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Candidater, et les faux amis de l'entretien",
          texte:
            "Trois verbes structurent la candidature, et aucun ne se calque.\n\nApply for a job, postuler — la préposition est for, jamais to. Apply to a company, en revanche, avec to pour l'organisation.\n\nBe shortlisted, être retenu dans la sélection finale. Be interviewed, passer l'entretien. Be offered the position, se voir proposer le poste.\n\nQuant aux faux amis, ils sont nombreux et coûteux. To candidate n'existe pas comme verbe : le candidat est an applicant ou a candidate. To postulate n'a rien à voir. A formation est une formation géologique ou militaire ; une formation professionnelle se dit training. An experience est un vécu ; l'expérience professionnelle est experience, indénombrable — ten years' experience, jamais « experiences ».\n\nEnfin, a stage est une scène de théâtre. Un stage professionnel se dit an internship, et le stagiaire an intern ou a trainee. C'est peut-être le faux ami le plus fréquent dans un CV français traduit.",
        },
      ],
    },
    cartes: [
      {
        etranger: "She found a new job last month.",
        francais: "Elle a trouvé un nouveau poste le mois dernier.",
        note: "A job est dénombrable ; work ne l'est pas. « A work » ne se dit pas.",
      },
      {
        etranger: "I have a lot of work this week.",
        francais: "J'ai beaucoup de travail cette semaine.",
        note: "Work indénombrable : a lot of work, jamais « many works ».",
      },
      {
        etranger: "He applied for three positions.",
        francais: "Il a postulé pour trois postes.",
        note: "Apply FOR un poste, apply TO une entreprise. La préposition change.",
      },
      {
        etranger: "She's doing an internship in Berlin.",
        francais: "Elle fait un stage à Berlin.",
        note: "An internship, le stage ; a stage est une scène de théâtre.",
      },
      {
        etranger: "He has ten years' experience.",
        francais: "Il a dix ans d'expérience.",
        note: "Experience est indénombrable ici. « Experiences » désignerait des vécus.",
      },
      {
        etranger: "They were made redundant in June.",
        francais: "Ils ont été licenciés en juin.",
        note: "Be made redundant : licenciement économique. Be fired suppose une faute.",
      },
      {
        etranger: "I handed in my notice yesterday.",
        francais: "J'ai donné ma démission hier.",
        note: "Hand in your notice, démissionner ; a notice period, le préavis.",
      },
      {
        etranger: "She asked for a pay rise.",
        francais: "Elle a demandé une augmentation.",
        note: "A pay rise au Royaume-Uni, a raise aux États-Unis.",
      },
      {
        etranger: "The job comes with good benefits.",
        francais: "Le poste s'accompagne de bons avantages.",
        note: "Benefits couvre les avantages en nature et les prestations sociales.",
      },
      {
        etranger: "We offer training for new staff.",
        francais: "Nous proposons une formation aux nouveaux venus.",
        note: "Training, la formation professionnelle. Staff est un collectif indénombrable.",
      },
    ],
  },

  {
    slug: "en-voc-bricolage",
    category: "Vocabulaire",
    title: "Réparer, entretenir, bricoler",
    statement:
      "Une fuite, une prise, une vis, un tournevis. Le vocabulaire de l'atelier, qu'on ne trouve dans aucun manuel et dont on a besoin le jour où la chaudière lâche.",
    tip: "L'anglais dit DIY — do it yourself — pour le bricolage. Le mot « bricolage » n'a pas d'équivalent d'un seul tenant.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "L'anglais de l'atelier",
      sections: [
        {
          titre: "Les outils, et la logique de leurs noms",
          texte:
            "Le nom des outils anglais suit presque toujours la même logique : le geste, plus le suffixe -er. Un objet qui screws est a screwdriver, un objet qui hammers est a hammer, un objet qui cuts est a cutter.\n\nLes indispensables : a hammer, le marteau ; a screwdriver, le tournevis — flat-head pour plat, cross-head ou Phillips pour cruciforme ; a spanner au Royaume-Uni et a wrench aux États-Unis, la clé ; pliers, la pince, toujours au pluriel comme scissors ; a drill, la perceuse ; a saw, la scie ; a spirit level, le niveau ; a tape measure, le mètre ruban.\n\nLa quincaillerie : a screw, la vis ; a nail, le clou ; a bolt, le boulon ; a nut, l'écrou — le même mot que la noix ; a washer, la rondelle ; a hinge, la charnière ; a bracket, l'équerre.\n\nEt les consommables : glue, la colle ; tape, le ruban adhésif ; sandpaper, le papier de verre ; filler, l'enduit ; sealant, le mastic.\n\nUn magasin de bricolage est a hardware shop, ou a DIY store pour les grandes surfaces.",
          visuels: [
            {
              type: "tableau",
              titre: "L'outil et le geste",
              colonnes: ["L'outil", "Le verbe", "Ce qu'on en fait"],
              lignes: [
                ["a screwdriver", "to screw / unscrew", "visser, dévisser"],
                ["a hammer", "to hammer", "planter un clou"],
                ["a drill", "to drill", "percer"],
                ["a saw", "to saw", "scier"],
                ["a spanner (GB)", "to tighten / loosen", "serrer, desserrer"],
                ["pliers", "to grip", "pincer, tenir"],
                ["a paintbrush", "to paint", "peindre"],
                ["sandpaper", "to sand down", "poncer"],
              ],
              note: "Pliers et scissors sont toujours au pluriel : a pair of pliers pour en compter une.",
            },
          ],
        },
        {
          titre: "Ce qui casse, et comment le dire",
          texte:
            "Le vocabulaire de la panne est celui dont on a besoin en urgence, et c'est celui qu'on n'a jamais appris.\n\nPour l'eau : a leak est une fuite, et to leak le verbe — the tap is leaking. A tap au Royaume-Uni, a faucet aux États-Unis, pour le robinet. A pipe est le tuyau ; the drain, la canalisation ; blocked, bouché ; to unblock, déboucher.\n\nPour l'électricité : a socket est la prise murale, a plug la fiche, a fuse le fusible, the fuse box le tableau. To blow a fuse, faire sauter un fusible. A power cut, une coupure de courant. The wiring, l'installation électrique.\n\nPour le chauffage : the boiler, la chaudière ; a radiator, le radiateur ; to bleed a radiator, le purger — le verbe surprend, mais c'est bien celui-là.\n\nEt les verbes généraux : it's broken, it's not working, it's out of order sur un écriteau. To fix et to repair sont interchangeables ; to mend est britannique et s'emploie surtout pour le tissu.\n\nEnfin, l'artisan : a plumber, a electrician — attention, an electrician —, a carpenter, a builder, a decorator pour le peintre en bâtiment.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux rives, deux mots",
              colonnes: [
                {
                  titre: "Royaume-Uni",
                  points: [
                    "tap, spanner, torch",
                    "hoover (aspirateur)",
                    "a flat, the ground floor",
                  ],
                },
                {
                  titre: "États-Unis",
                  points: [
                    "faucet, wrench, flashlight",
                    "vacuum cleaner",
                    "an apartment, the first floor",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Faire faire, et les verbes à particule de l'atelier",
          texte:
            "Deux structures reviennent constamment dans ce champ, et elles n'ont pas d'équivalent direct.\n\nLa première est le causatif : have something done. I had the boiler serviced, j'ai fait réviser la chaudière. Le sujet ne fait pas l'action, il la fait faire. Get something done est la variante familière : I got my car fixed.\n\nLa seconde est la famille des verbes à particule, qui fait ici presque tout le travail. Put up a shelf, poser une étagère ; take down, démonter ; set up, installer ; plug in, brancher ; switch on, allumer ; turn off, couper ; screw in, visser ; pull out, arracher ; wear out, s'user ; break down, tomber en panne — pour une machine ou une voiture, pas pour un objet cassé.\n\nS'y ajoutent quelques expressions figées utiles : it needs replacing, il faut le remplacer — remarquer le -ing après need ; it's beyond repair, il est irréparable ; a quick fix, une réparation de fortune ; wear and tear, l'usure normale, terme des contrats de location.",
        },
      ],
    },
    cartes: [
      {
        etranger: "The kitchen tap is leaking.",
        francais: "Le robinet de la cuisine fuit.",
        note: "A tap au Royaume-Uni, a faucet aux États-Unis. To leak, fuir.",
      },
      {
        etranger: "Can you pass me the screwdriver?",
        francais: "Tu peux me passer le tournevis ?",
        note: "Le nom de l'outil se forme sur le geste : screw + driver.",
      },
      {
        etranger: "We need a pair of pliers.",
        francais: "Il nous faut une pince.",
        note: "Pliers est toujours pluriel, comme scissors. A pair of pour en compter une.",
      },
      {
        etranger: "The fuse blew last night.",
        francais: "Le fusible a sauté cette nuit.",
        note: "Blow a fuse, faire sauter un fusible. A power cut, une coupure de courant.",
      },
      {
        etranger: "I had the boiler serviced.",
        francais: "J'ai fait réviser la chaudière.",
        note: "Have something done : le sujet fait faire l'action, il ne la fait pas.",
      },
      {
        etranger: "The drain is completely blocked.",
        francais: "La canalisation est complètement bouchée.",
        note: "Blocked, bouché ; to unblock, déboucher.",
      },
      {
        etranger: "He put up a shelf in the hall.",
        francais: "Il a posé une étagère dans le couloir.",
        note: "Put up, poser ou monter ; take down, démonter.",
      },
      {
        etranger: "The washing machine has broken down.",
        francais: "La machine à laver est tombée en panne.",
        note: "Break down pour une machine ; broken tout court pour un objet cassé.",
      },
      {
        etranger: "It needs replacing, not repairing.",
        francais: "Il faut le remplacer, pas le réparer.",
        note: "Need + -ing au sens passif : it needs replacing veut dire « il doit être remplacé ».",
      },
      {
        etranger: "We called a plumber this morning.",
        francais: "Nous avons appelé un plombier ce matin.",
        note: "A plumber — le b est muet. An electrician prend an, à cause de la voyelle.",
      },
    ],
  },

  {
    slug: "en-voc-environnement",
    category: "Vocabulaire",
    title: "L'environnement et le climat",
    statement:
      "Émissions, déchets, énergies renouvelables. Un champ où l'anglais fournit le vocabulaire international — et où la traduction française introduit des contresens durables.",
    tip: "Global warming désigne la hausse des températures ; climate change désigne l'ensemble des dérèglements. Les deux ne sont pas synonymes.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Le vocabulaire du climat",
      sections: [
        {
          titre: "Nommer le phénomène",
          texte:
            "Le champ climatique a un vocabulaire précis, et l'imprécision y a des conséquences.\n\nGlobal warming désigne strictement la hausse de la température moyenne. Climate change désigne l'ensemble des dérèglements qui en découlent, y compris ceux qui refroidissent localement. Le second terme a remplacé le premier dans l'usage scientifique parce qu'il est plus exact.\n\nGreenhouse gases sont les gaz à effet de serre — the greenhouse effect, l'effet de serre. Carbon dioxide, le dioxyde de carbone, souvent abrégé CO2 ; methane, le méthane.\n\nEmissions est presque toujours au pluriel. A carbon footprint est l'empreinte carbone. Carbon neutral et net zero désignent l'équilibre entre émissions et absorption — net zero est le terme officiel des accords internationaux.\n\nEnfin, deux verbes structurent tout le débat public. To mitigate, réduire les causes ; to adapt, s'ajuster aux effets. Mitigation and adaptation forment le couple sur lequel se construisent les politiques publiques, et le français les rend maladroitement par « atténuation » et « adaptation ».",
          visuels: [
            {
              type: "tableau",
              titre: "Le terme, et ce qu'il recouvre exactement",
              colonnes: ["Le terme", "Ce qu'il désigne", "Le piège"],
              lignes: [
                ["global warming", "la hausse des températures", "ne couvre pas tout"],
                ["climate change", "l'ensemble des dérèglements", "terme scientifique retenu"],
                ["emissions", "les rejets de gaz", "presque toujours pluriel"],
                ["net zero", "équilibre émissions / absorption", "≠ zéro émission"],
                ["renewable energy", "solaire, éolien, hydraulique", "indénombrable"],
                ["fossil fuels", "charbon, pétrole, gaz", "toujours pluriel"],
                ["biodiversity", "la diversité du vivant", "indénombrable"],
                ["a heatwave", "une canicule", "dénombrable"],
              ],
              note: "Net zero ne veut pas dire zéro émission : il compte aussi ce qui est absorbé ou compensé.",
            },
          ],
        },
        {
          titre: "Les déchets et le recyclage",
          texte:
            "C'est le champ le plus concret, et celui où les deux rives divergent le plus.\n\nWaste est le mot générique, indénombrable : household waste, industrial waste. Rubbish au Royaume-Uni et garbage ou trash aux États-Unis désignent les ordures ménagères. A bin au Royaume-Uni, a trash can aux États-Unis.\n\nLes verbes du cycle : to sort, trier ; to recycle, recycler ; to compost ; to reuse ; to landfill, mettre en décharge — landfill est aussi le nom du lieu ; to incinerate.\n\nSingle-use désigne l'usage unique : single-use plastic. Disposable veut dire jetable. Biodegradable et compostable ne sont pas synonymes : le premier se décompose, le second seulement dans des conditions industrielles précises — la nuance est au cœur de beaucoup de litiges publicitaires.\n\nEnfin, deux mots du débat : greenwashing, l'écoblanchiment, qui n'a pas de traduction française vraiment installée ; et circular economy, l'économie circulaire.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux mots qu'on croit synonymes",
              colonnes: [
                {
                  titre: "biodegradable",
                  points: [
                    "Se décompose par action biologique.",
                    "Aucune garantie de délai.",
                    "Peut demander des décennies.",
                  ],
                },
                {
                  titre: "compostable",
                  points: [
                    "Se décompose en compost utilisable.",
                    "Souvent en installation industrielle.",
                    "Norme et délai définis.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "L'énergie, et les faux amis de la nature",
          texte:
            "Renewable energy est indénombrable : on dit renewable energy sources ou renewables pour en compter. Les sources : solar power, wind power — l'éolien —, hydropower, geothermal, tidal power pour l'énergie marémotrice, biomass.\n\nA power plant est une centrale ; a wind farm, un parc éolien ; a grid, le réseau électrique — the national grid au Royaume-Uni.\n\nQuant aux faux amis, le champ en compte plusieurs. To preserve veut dire conserver en l'état ; préserver au sens de protéger se dit to protect ou to safeguard. A reserve est une réserve naturelle. To conserve veut dire économiser une ressource — conserve water — autant que protéger.\n\nSensible veut dire raisonnable, pas sensible : un écosystème fragile se dit fragile ou vulnerable, jamais « sensible ».\n\nEt deux mots trompent complètement. Petrol au Royaume-Uni est l'essence, gasoline ou gas aux États-Unis ; le pétrole brut se dit crude oil. Une station-service est a petrol station ou a gas station, jamais « a service ».",
        },
      ],
    },
    cartes: [
      {
        etranger: "Emissions fell by ten per cent.",
        francais: "Les émissions ont baissé de dix pour cent.",
        note: "Emissions est presque toujours pluriel. Et fall BY pour l'écart parcouru.",
      },
      {
        etranger: "The country aims for net zero by 2050.",
        francais: "Le pays vise la neutralité carbone d'ici 2050.",
        note: "Net zero compte aussi ce qui est absorbé : ce n'est pas zéro émission.",
      },
      {
        etranger: "Renewable energy is getting cheaper.",
        francais: "Les énergies renouvelables coûtent de moins en moins cher.",
        note: "Renewable energy est indénombrable ; renewables sert de pluriel.",
      },
      {
        etranger: "They banned single-use plastic.",
        francais: "Ils ont interdit le plastique à usage unique.",
        note: "Single-use, à usage unique ; disposable, jetable.",
      },
      {
        etranger: "We sort our waste every week.",
        francais: "Nous trions nos déchets chaque semaine.",
        note: "Waste est indénombrable. Rubbish au Royaume-Uni, garbage aux États-Unis.",
      },
      {
        etranger: "The heatwave lasted twelve days.",
        francais: "La canicule a duré douze jours.",
        note: "A heatwave, dénombrable, contrairement à la plupart des mots du champ.",
      },
      {
        etranger: "It was pure greenwashing.",
        francais: "C'était de l'écoblanchiment pur et simple.",
        note: "Greenwashing n'a pas de traduction française vraiment installée.",
      },
      {
        etranger: "The wind farm powers ten thousand homes.",
        francais: "Le parc éolien alimente dix mille foyers.",
        note: "A wind farm, un parc éolien ; a power plant, une centrale.",
      },
      {
        etranger: "Please conserve water this summer.",
        francais: "Économisez l'eau cet été.",
        note: "Conserve veut dire économiser une ressource, pas seulement protéger.",
      },
      {
        etranger: "Fossil fuels still dominate the mix.",
        francais: "Les énergies fossiles dominent encore le bouquet énergétique.",
        note: "Fossil fuels, toujours pluriel. The energy mix, le bouquet énergétique.",
      },
    ],
  },

  {
    slug: "en-voc-art-culture",
    category: "Vocabulaire",
    title: "L'art, la musique, la littérature",
    statement:
      "Un roman, une toile, un morceau, une pièce. Le vocabulaire de ce dont on parle après le film — et où presque chaque mot français a un faux ami anglais.",
    tip: "A novel est un roman, pas une nouvelle — qui se dit a short story. Et novel comme adjectif veut dire inédit.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Parler d'une œuvre en anglais",
      sections: [
        {
          titre: "Nommer l'œuvre et son auteur",
          texte:
            "Chaque art a son mot pour l'œuvre, et le générique work ne les remplace pas toujours.\n\nEn littérature : a novel, le roman ; a short story, la nouvelle ; an essay, l'essai ; a play, la pièce de théâtre ; a poem, le poème ; a collection, le recueil. L'auteur est a writer, a novelist, a playwright — orthographe piégeuse, avec wright et non write —, a poet.\n\nEn musique : a piece est le morceau ; a track, la piste d'un enregistrement ; a song, la chanson avec paroles ; a tune, l'air ; an album ; a symphony ; the lyrics, les paroles, toujours au pluriel. Le compositeur est a composer, l'interprète a performer, le parolier a lyricist.\n\nEn arts visuels : a painting, la toile ; a drawing, le dessin ; a sculpture ; a print, l'estampe ; an exhibition, l'exposition. L'artiste est a painter, a sculptor, an illustrator.\n\nAu cinéma : a film au Royaume-Uni, a movie aux États-Unis ; the cast, la distribution ; the score, la musique du film ; the plot, l'intrigue ; a scene ; a shot, un plan. Le réalisateur est the director — jamais « the realiser ».",
          visuels: [
            {
              type: "tableau",
              titre: "Les faux amis de la culture",
              colonnes: ["Le mot anglais", "Ce qu'il veut dire", "Le faux ami"],
              lignes: [
                ["a novel", "un roman", "une nouvelle → a short story"],
                ["a library", "une bibliothèque", "librairie → a bookshop"],
                ["a lecture", "un cours magistral", "lecture → reading"],
                ["a comedian", "un humoriste", "comédien → an actor"],
                ["a phrase", "une expression", "phrase → a sentence"],
                ["an editor", "un rédacteur en chef", "éditeur → a publisher"],
                ["a chef", "un cuisinier", "chef → a boss, a leader"],
                ["the plot", "l'intrigue", "le complot aussi, selon le contexte"],
                ["a character", "un personnage", "caractère → personality"],
              ],
              note: "Playwright s'écrit avec wright, le mot ancien pour artisan — comme dans shipwright.",
            },
          ],
        },
        {
          titre: "Donner un avis sans être plat",
          texte:
            "Good et bad épuisent vite. L'anglais dispose d'un registre étendu, et savoir en placer trois change complètement une conversation.\n\nPour l'éloge : compelling, prenant ; gripping, haletant ; moving, émouvant ; subtle ; understated, tout en retenue — grand compliment britannique ; ambitious ; beautifully shot pour un film ; a page-turner pour un livre qu'on ne lâche pas.\n\nPour la réserve : uneven, inégal ; overrated, surestimé ; predictable ; heavy-handed, appuyé ; self-indulgent, complaisant ; dated, qui a mal vieilli ; contrived, artificiel.\n\nPour la neutralité intéressée : intriguing, thought-provoking, unusual, an acquired taste — qui demande de s'y faire.\n\nDeux structures rendent l'avis naturel. It's the kind of film that…, c'est le genre de film qui… Et I found it plus adjectif : I found it slow, avec found et non « I have found ».\n\nEnfin, une nuance qui trahit un francophone : on dit I liked it ou I enjoyed it, mais enjoy demande toujours un complément — jamais « I enjoyed » tout seul.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même verdict, deux forces",
              colonnes: [
                {
                  titre: "Franc",
                  points: [
                    "It's brilliant.",
                    "It's a masterpiece.",
                    "I couldn't put it down.",
                  ],
                },
                {
                  titre: "Réservé — et britannique",
                  points: [
                    "It's not bad at all.",
                    "It's rather good, actually.",
                    "It grows on you.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Raconter sans divulgâcher",
          texte:
            "Résumer une œuvre demande trois choses, et l'anglais a des conventions fermes sur chacune.\n\nLe temps d'abord. On résume une intrigue au présent, toujours : the novel follows a young doctor who moves to Bristol. Employer le passé donne l'impression de raconter un souvenir, pas une œuvre. Cette règle vaut aussi pour les critiques et les quatrièmes de couverture.\n\nLes verbes ensuite. Follow, suivre un personnage ; be set in, se dérouler dans — the film is set in 1920s Berlin ; tell the story of ; revolve around, tourner autour de ; explore a theme ; be based on, être tiré de.\n\nLes précautions enfin. Spoiler est passé tel quel en français ; l'anglais dit no spoilers, ou spoiler alert avant de révéler. Le verbe existe : don't spoil it for me.\n\nEt trois mots de structure utiles : the opening, l'ouverture ; the twist, le retournement ; the ending, la fin. A cliffhanger est une fin suspendue, et le mot vient littéralement de quelqu'un accroché à une falaise.",
        },
      ],
    },
    cartes: [
      {
        etranger: "It's a novel, not a short story.",
        francais: "C'est un roman, pas une nouvelle.",
        note: "A novel est un roman. La nouvelle se dit a short story.",
      },
      {
        etranger: "The film is set in post-war Vienna.",
        francais: "Le film se déroule dans la Vienne d'après-guerre.",
        note: "Be set in pour situer une œuvre dans un lieu ou une époque.",
      },
      {
        etranger: "The score was better than the plot.",
        francais: "La musique était meilleure que l'intrigue.",
        note: "The score, la musique de film ; the plot, l'intrigue ; the cast, la distribution.",
      },
      {
        etranger: "I found it a bit predictable.",
        francais: "Je l'ai trouvé un peu prévisible.",
        note: "I found it + adjectif. Et « a bit » devant un reproche l'atténue à peine.",
      },
      {
        etranger: "It's a real page-turner.",
        francais: "C'est un livre qu'on ne lâche pas.",
        note: "A page-turner. L'expression n'a pas d'équivalent français d'un seul tenant.",
      },
      {
        etranger: "The playwright died before the première.",
        francais: "Le dramaturge est mort avant la première.",
        note: "Playwright s'écrit avec wright, le mot ancien pour artisan.",
      },
      {
        etranger: "She went to a lecture on Rembrandt.",
        francais: "Elle est allée à un cours magistral sur Rembrandt.",
        note: "A lecture est un cours magistral. La lecture se dit reading.",
      },
      {
        etranger: "He's a comedian, not an actor.",
        francais: "C'est un humoriste, pas un acteur.",
        note: "A comedian fait rire ; un comédien se dit an actor.",
      },
      {
        etranger: "The exhibition runs until March.",
        francais: "L'exposition se tient jusqu'en mars.",
        note: "Run pour un événement qui dure ; be held pour un événement ponctuel.",
      },
      {
        etranger: "No spoilers, I haven't seen it yet.",
        francais: "Pas de divulgâchage, je ne l'ai pas encore vu.",
        note: "No spoilers, spoiler alert. Le verbe existe aussi : don't spoil it.",
      },
    ],
  },

  {
    slug: "en-c1-droit",
    category: "Vocabulaire",
    title: "Le droit, le contrat, la responsabilité",
    statement:
      "Liability, breach, waiver, indemnity. Le vocabulaire juridique anglais est fixe et sans synonyme : chaque mot y engage, et le calque du français en produit un autre.",
    tip: "Shall en droit ne marque pas le futur mais l'obligation : the tenant shall pay veut dire que le locataire est tenu de payer.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "L'anglais juridique",
      sections: [
        {
          titre: "Une langue faite pour ne pas varier",
          texte:
            "L'anglais juridique refuse le synonyme. Là où un texte ordinaire varie ses mots pour éviter la répétition, un contrat répète le même terme du début à la fin — parce qu'un mot différent serait lu comme une notion différente.\n\nCela produit trois traits reconnaissables.\n\nLe premier est le shall d'obligation. The tenant shall maintain the property ne parle pas du futur : il crée un devoir. L'usage moderne le remplace de plus en plus par must, mais shall reste dominant dans les contrats.\n\nLe deuxième est le doublet, hérité de la période où le droit anglais s'écrivait en deux langues : null and void, terms and conditions, aid and abet, cease and desist. Les deux mots disent la même chose, l'un saxon, l'autre normand.\n\nLe troisième est l'adverbe archaïque : hereby, herein, thereof, hereinafter, notwithstanding. Ils servent à référencer le document lui-même sans ambiguïté. Ils sont critiqués, et le mouvement plain English tente de les réduire — sans grand succès pour l'instant.",
          visuels: [
            {
              type: "tableau",
              titre: "Le terme juridique et son sens exact",
              colonnes: ["Le terme", "Ce qu'il veut dire", "Le calque à éviter"],
              lignes: [
                ["liability", "la responsabilité juridique", "liabilité"],
                ["a breach", "un manquement, une violation", "brèche"],
                ["a waiver", "une renonciation à un droit", "—"],
                ["an indemnity", "une garantie contre un dommage", "indemnité → compensation"],
                ["a covenant", "un engagement contractuel", "—"],
                ["consideration", "la contrepartie d'un contrat", "considération"],
                ["a remedy", "un recours, une réparation", "remède"],
                ["to enforce", "faire appliquer", "enforcer"],
                ["a provision", "une clause", "provision → allowance"],
                ["without prejudice", "sous toutes réserves", "sans préjudice"],
              ],
              note: "Consideration est la notion centrale du contrat en common law : sans contrepartie, pas de contrat.",
            },
          ],
        },
        {
          titre: "Les acteurs et les actes",
          texte:
            "Le vocabulaire des personnes et des actes est fixe, et il diffère entre les deux rives.\n\nLes professions : a lawyer est le terme général. Au Royaume-Uni, a solicitor conseille et prépare les dossiers, a barrister plaide devant les tribunaux supérieurs. Aux États-Unis, an attorney couvre les deux. A judge, a jury, a witness, a defendant — le défendeur au civil et l'accusé au pénal —, a claimant au Royaume-Uni et a plaintiff aux États-Unis pour le demandeur.\n\nLes actes : to sue, poursuivre en justice ; to file a claim, déposer une demande ; to settle, transiger — settle out of court, régler à l'amiable ; to appeal, faire appel ; to rule, statuer ; to uphold, confirmer une décision ; to overturn, l'annuler.\n\nEt les issues : a verdict au pénal, a judgment au civil ; damages, les dommages et intérêts, toujours au pluriel ; a fine, l'amende ; an injunction, une injonction.\n\nUne dernière distinction structurante : criminal law poursuit une infraction contre la société ; civil law règle un litige entre deux parties. Le même fait peut relever des deux.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux systèmes, deux vocabulaires",
              colonnes: [
                {
                  titre: "Royaume-Uni",
                  points: [
                    "solicitor / barrister",
                    "a claimant",
                    "the Crown Court",
                  ],
                },
                {
                  titre: "États-Unis",
                  points: [
                    "an attorney",
                    "a plaintiff",
                    "the District Court",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Lire une clause sans se tromper",
          texte:
            "Trois habitudes suffisent à ne pas contresens un contrat anglais.\n\nLa première : repérer les modaux. Shall crée l'obligation, may crée une faculté, shall not crée l'interdiction. Confondre may et shall inverse le sens d'une clause entière.\n\nLa deuxième : lire les définitions. Un contrat anglais ouvre presque toujours par une section de définitions, et tout mot en majuscule dans le corps du texte renvoie à elle. « The Property » n'y veut dire que ce que la définition dit, et rien d'autre.\n\nLa troisième : repérer les qualificatifs de portée. Reasonable efforts est moins exigeant que best efforts ; material breach est un manquement grave, par opposition au manquement mineur ; subject to est une condition suspensive ; notwithstanding annonce une exception qui l'emporte sur ce qui précède.\n\nEnfin, deux formules qui reviennent partout. Without prejudice protège une correspondance de négociation : elle ne pourra pas être produite en justice. Et time is of the essence rend les délais essentiels — leur dépassement devient à lui seul un manquement.",
        },
      ],
    },
    cartes: [
      {
        etranger: "The tenant shall maintain the property.",
        francais: "Le locataire est tenu d'entretenir le bien.",
        note: "Shall en droit crée une obligation, il ne marque pas le futur.",
      },
      {
        etranger: "That would be a material breach.",
        francais: "Ce serait un manquement grave.",
        note: "Material breach, le manquement grave, par opposition au manquement mineur.",
      },
      {
        etranger: "The clause limits our liability.",
        francais: "La clause limite notre responsabilité.",
        note: "Liability, la responsabilité juridique. A provision est une clause.",
      },
      {
        etranger: "They settled out of court.",
        francais: "Ils ont réglé l'affaire à l'amiable.",
        note: "Settle out of court, transiger sans jugement.",
      },
      {
        etranger: "The court upheld the decision.",
        francais: "La cour a confirmé la décision.",
        note: "Uphold, confirmer ; overturn, annuler ; rule, statuer.",
      },
      {
        etranger: "She was awarded substantial damages.",
        francais: "Elle a obtenu des dommages et intérêts importants.",
        note: "Damages est toujours pluriel. Award pour ce qu'un tribunal accorde.",
      },
      {
        etranger: "This letter is without prejudice.",
        francais: "Ce courrier est envoyé sous toutes réserves.",
        note: "Without prejudice protège une négociation : la lettre ne sera pas produite en justice.",
      },
      {
        etranger: "Time is of the essence here.",
        francais: "Les délais sont ici une condition essentielle.",
        note: "Formule figée : leur dépassement devient à lui seul un manquement.",
      },
      {
        etranger: "The agreement is null and void.",
        francais: "L'accord est nul et non avenu.",
        note: "Doublet juridique : un mot saxon, un mot normand, le même sens.",
      },
      {
        etranger: "We must use reasonable efforts.",
        francais: "Nous devons faire des efforts raisonnables.",
        note: "Reasonable efforts est nettement moins exigeant que best efforts.",
      },
    ],
  },

  {
    slug: "en-c1-abstrait",
    category: "Vocabulaire",
    title: "Les mots de la pensée abstraite",
    statement:
      "Insight, scope, rationale, trade-off. Une vingtaine de noms abstraits qui n'ont pas d'équivalent français d'un seul mot — et sans lesquels on ne peut pas raisonner en anglais.",
    tip: "Ces mots-là ne se traduisent pas, ils se remplacent par une périphrase. C'est pourquoi il faut les apprendre en anglais, sans passer par le français.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les noms abstraits sans équivalent",
      sections: [
        {
          titre: "Ceux qui n'ont pas de traduction",
          texte:
            "Une langue n'est jamais la copie d'une autre, et l'écart se voit surtout dans les noms abstraits. Une vingtaine de mots anglais courants demandent au français une périphrase entière — ce qui explique qu'un francophone les évite, et que son anglais reste laborieux là où l'anglophone est bref.\n\nAn insight est une compréhension soudaine et juste : « une intuition éclairante » n'en rend qu'une partie. The scope est l'étendue d'un sujet ou d'un projet ; « le périmètre » s'en approche dans le jargon professionnel.\n\nA rationale est le raisonnement qui justifie une décision, et non la décision. A trade-off est un arbitrage où l'on perd d'un côté ce qu'on gagne de l'autre. A benchmark, un point de comparaison de référence. A caveat, une réserve exprimée avant d'affirmer.\n\nS'y ajoutent accountability, l'obligation de rendre des comptes ; serendipity, la découverte heureuse par hasard ; commitment, l'engagement pris et tenu ; leverage, l'effet de levier au sens figuré ; awareness, la conscience qu'on a d'une chose.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mot, et ce qu'il faut de français pour le dire",
              colonnes: ["Le mot", "Ce qu'il désigne", "En français"],
              lignes: [
                ["an insight", "une compréhension juste et soudaine", "une intuition éclairante"],
                ["the scope", "l'étendue couverte", "le périmètre, l'ampleur"],
                ["a rationale", "le raisonnement justifiant", "la logique sous-jacente"],
                ["a trade-off", "ce qu'on perd pour ce qu'on gagne", "un arbitrage, un compromis"],
                ["a caveat", "une réserve annoncée", "une mise en garde"],
                ["accountability", "l'obligation de rendre compte", "la responsabilité devant"],
                ["a benchmark", "le point de comparaison", "l'étalon, la référence"],
                ["commitment", "l'engagement tenu", "l'engagement, la constance"],
                ["leverage", "l'effet de levier", "le moyen de pression"],
                ["awareness", "la conscience qu'on en a", "la prise de conscience"],
              ],
              note: "Aucun de ces mots ne se traduit par un seul mot français : c'est pourquoi il faut les penser en anglais.",
            },
          ],
        },
        {
          titre: "Les nuances entre proches",
          texte:
            "Une deuxième difficulté vient des séries de mots quasi synonymes, que le français rend par un seul terme.\n\nProblem, issue, matter, concern. A problem suppose qu'il y a quelque chose à réparer. An issue est une question débattue, sans jugement. A matter est une affaire à traiter. A concern est une inquiétude.\n\nGoal, aim, objective, target. A goal est le but général. An aim est l'intention. An objective est mesurable. A target est chiffré et daté.\n\nMeaning, sense, significance. Meaning est ce que quelque chose veut dire. Sense est la faculté de comprendre, ou une acception particulière. Significance est l'importance ou la portée.\n\nAbility, capacity, capability. Ability est ce qu'on sait faire. Capacity est la contenance ou la quantité maximale. Capability est le potentiel dont on dispose.\n\nEt enfin, chance, opportunity, occasion. A chance est une possibilité, souvent liée au hasard. An opportunity est une occasion favorable qu'on peut saisir. An occasion est un moment précis, un événement.",
          visuels: [
            {
              type: "comparaison",
              titre: "Quatre mots pour « objectif »",
              colonnes: [
                {
                  titre: "Du plus vague",
                  points: [
                    "a goal — le but général.",
                    "an aim — l'intention affichée.",
                  ],
                },
                {
                  titre: "Au plus précis",
                  points: [
                    "an objective — mesurable.",
                    "a target — chiffré et daté.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Comment les installer durablement",
          texte:
            "Ces mots ne s'apprennent pas par la traduction : le français n'en a pas, et passer par lui construit une approximation qu'on ne corrigera plus.\n\nTrois habitudes fonctionnent.\n\nLa première : apprendre le mot avec son verbe habituel. On dit gain an insight, define the scope, provide a rationale, strike a trade-off, add a caveat, set a benchmark, make a commitment. Le verbe fixe le mot bien mieux qu'une définition.\n\nLa deuxième : apprendre sa famille. Insight donne insightful ; scope donne wide-ranging ; accountable donne accountability ; commit donne commitment et committed — avec deux t, faute d'orthographe extrêmement fréquente.\n\nLa troisième : les employer en écrivant, pas en parlant. Ces mots appartiennent d'abord à l'écrit argumenté ; c'est là qu'on peut prendre le temps de choisir, et c'est ce choix répété qui les installe.\n\nUn dernier avertissement : plusieurs ont été empruntés par le français professionnel avec un sens plus étroit — « le scope » d'un projet, « un benchmark ». Repartir de ce sens français rétrécit le mot anglais.",
        },
      ],
    },
    cartes: [
      {
        etranger: "That gave us a useful insight.",
        francais: "Cela nous a donné un éclairage utile.",
        note: "Gain ou give an insight. Le mot n'a pas d'équivalent français d'un seul tenant.",
      },
      {
        etranger: "We need to define the scope first.",
        francais: "Nous devons d'abord définir le périmètre.",
        note: "Define the scope : le verbe fixe le mot mieux qu'une définition.",
      },
      {
        etranger: "What's the rationale behind this?",
        francais: "Quel est le raisonnement derrière cela ?",
        note: "A rationale est le raisonnement qui justifie, pas la décision elle-même.",
      },
      {
        etranger: "It's a trade-off between speed and cost.",
        francais: "C'est un arbitrage entre rapidité et coût.",
        note: "A trade-off : on perd d'un côté ce qu'on gagne de l'autre.",
      },
      {
        etranger: "One caveat before we start.",
        francais: "Une réserve avant de commencer.",
        note: "Add a caveat : la réserve annoncée avant d'affirmer.",
      },
      {
        etranger: "There is little accountability here.",
        francais: "Il y a peu d'obligation de rendre des comptes ici.",
        note: "Accountability, l'obligation de rendre compte ; responsibility, la charge.",
      },
      {
        etranger: "The target is measurable, the aim is not.",
        francais: "La cible est mesurable, l'intention ne l'est pas.",
        note: "Goal, aim, objective, target : du plus vague au plus précis.",
      },
      {
        etranger: "It was an opportunity, not a chance.",
        francais: "C'était une occasion favorable, pas un hasard.",
        note: "An opportunity se saisit ; a chance relève souvent du hasard.",
      },
      {
        etranger: "She made a firm commitment.",
        francais: "Elle a pris un engagement ferme.",
        note: "Commitment avec deux t. Committed aussi — la faute d'orthographe est très fréquente.",
      },
      {
        etranger: "We used that as a benchmark.",
        francais: "Nous nous en sommes servis comme point de référence.",
        note: "Set a benchmark. Le français professionnel l'a emprunté avec un sens plus étroit.",
      },
    ],
  },
];
