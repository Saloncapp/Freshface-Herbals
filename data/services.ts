export interface ServiceStep {
  title: string;
  description: string;
  benefit?: string;
  animation?: "cleanse" | "scrub" | "massage" | "gel" | "pack" | "powder" | "peel" | "tone" | "sheet" | "serum";
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  image?: string;
  duration?: string;
  steps: ServiceStep[];
}

export interface ServiceSubCategory {
  id: string;
  label: string;
  services: Service[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  services?: Service[];
  subCategories?: ServiceSubCategory[];
}

export function getCategoryServices(category: ServiceCategory): Service[] {
  if (category.subCategories) {
    return category.subCategories.flatMap((sub) => sub.services);
  }
  return category.services ?? [];
}

const sevenStepFacial = (
  ingredient: string,
  glow: string
): ServiceStep[] => [
  {
    title: "Cleansing Milk",
    description: `A soft botanical cleansing milk lifts dust, sunscreen, and oil while preparing skin for the ${ingredient} ritual.`,
    benefit: "Keeps the skin barrier calm while clearing the first layer of impurities.",
    animation: "cleanse",
  },
  {
    title: "Scrub",
    description: `A fine herbal scrub polishes dull surface cells and helps the ${ingredient} actives reach fresh skin.`,
    benefit: "Smooths rough texture, brightens dullness, and improves product absorption.",
    animation: "scrub",
  },
  {
    title: "Massage Cream",
    description: `A rich cream massage melts tension and supports circulation with slow lifting strokes.`,
    benefit: "Improves glow, softens tightness, and gives the face a rested look.",
    animation: "massage",
  },
  {
    title: "Massage Gel",
    description: `A cooling gel layer hydrates and calms the skin after cream massage.`,
    benefit: "Refreshes heated skin and adds water-based hydration.",
    animation: "gel",
  },
  {
    title: "Face Pack",
    description: `A fresh ${ingredient} face pack rests on the skin to feed it with targeted botanical nutrients.`,
    benefit: glow,
    animation: "pack",
  },
  {
    title: "Power Pack",
    description: "A concentrated herbal booster pack is layered for deeper nourishment and radiance.",
    benefit: "Delivers a stronger salon-finish glow and supports even-looking skin.",
    animation: "powder",
  },
  {
    title: "Peel Off Mask",
    description: "A gentle peel-off mask seals the facial and lifts remaining surface impurities.",
    benefit: "Leaves the skin refined, fresh, and visibly smoother.",
    animation: "peel",
  },
];

const tenStepFacial = (
  ingredient: string,
  glow: string
): ServiceStep[] => [
  ...sevenStepFacial(ingredient, glow),
  {
    title: "Toner",
    description: "A botanical toner balances the skin after masking and prepares it for hydration.",
    benefit: "Refines the look of pores and brings the skin back to comfort.",
    animation: "tone",
  },
  {
    title: "Sheet Mask",
    description: `A serum-soaked sheet mask presses ${ingredient} hydration into the skin.`,
    benefit: "Boosts plumpness and gives a dewy, well-rested finish.",
    animation: "sheet",
  },
  {
    title: "Serum",
    description: "A final concentrated serum seals the ritual with lightweight nourishment.",
    benefit: "Locks in glow and supports a longer-lasting facial result.",
    animation: "serum",
  },
];

const massageRitual = (oil: string, benefit: string): ServiceStep[] => [
  {
    title: "Consultation",
    description: `A quick body and skin check helps tailor the ${oil} pressure, focus areas, and pace.`,
    benefit: "Makes the massage feel personal, comfortable, and targeted.",
    animation: "tone",
  },
  {
    title: "Warm Oil Application",
    description: `${oil} is warmed and spread in slow strokes so the skin receives the oil evenly.`,
    benefit: "Softens dry areas and prepares muscles for deeper work.",
    animation: "serum",
  },
  {
    title: "Long Stroke Massage",
    description: "Rhythmic strokes move from the limbs toward the centre to relax the body.",
    benefit: "Supports circulation and eases everyday heaviness.",
    animation: "massage",
  },
  {
    title: "Pressure Point Work",
    description: "Focused pressure is used around tense shoulders, back, joints, scalp, or feet as needed.",
    benefit,
    animation: "scrub",
  },
  {
    title: "Herbal Rest",
    description: "A quiet rest period lets the oil settle into the skin before finishing.",
    benefit: "Helps the body absorb the oil and keeps the after-feel calm.",
    animation: "pack",
  },
  {
    title: "Warm Towel Finish",
    description: "A warm towel finish removes excess oil while preserving softness.",
    benefit: "Leaves the body fresh, nourished, and comfortable.",
    animation: "cleanse",
  },
];

const nailRitual = (ingredient: string, area: "feet" | "hands"): ServiceStep[] => [
  {
    title: "Herbal Soak",
    description: `A warm ${ingredient} soak softens the ${area} and prepares the nails.`,
    benefit: "Softens roughness and starts the ritual with freshness.",
    animation: "gel",
  },
  {
    title: "Cleanse",
    description: `A gentle herbal cleanse clears dust, oil, and buildup from the ${area}.`,
    benefit: "Keeps the treatment clean, light, and comfortable.",
    animation: "cleanse",
  },
  {
    title: "Scrub",
    description: `${ingredient} scrub polishes dull skin and smooths dry patches.`,
    benefit: "Improves softness and gives an instantly cleaner look.",
    animation: "scrub",
  },
  {
    title: "Nail Care",
    description: "Nails are shaped, cuticles are cared for, and edges are refined.",
    benefit: "Creates a neat, salon-finished appearance.",
    animation: "peel",
  },
  {
    title: "Massage",
    description: `A nourishing ${ingredient} massage relaxes the ${area} and surrounding muscles.`,
    benefit: "Boosts comfort, glow, and softness.",
    animation: "massage",
  },
  {
    title: "Pack",
    description: `A cooling ${ingredient} pack is applied to restore moisture and freshness.`,
    benefit: "Leaves skin calmer, softer, and naturally polished.",
    animation: "pack",
  },
];

const detanRitual = (
  ingredient: string,
  area: string,
  benefit: string
): ServiceStep[] => [
  {
    title: "Herbal Cleanse",
    description: `A gentle botanical cleanse clears dust, oil, and surface buildup from the ${area}.`,
    benefit: "Prepares skin for detan without stripping natural moisture.",
    animation: "cleanse",
  },
  {
    title: "Herbal Polish",
    description: `A fine ${ingredient} scrub polishes dull, tanned surface cells on the ${area}.`,
    benefit: "Smooths rough texture and helps lift visible tan from the skin.",
    animation: "scrub",
  },
  {
    title: "Detan Pack",
    description: `A cooling ${ingredient} detan pack rests on the ${area} to target tan and uneven tone.`,
    benefit,
    animation: "pack",
  },
  {
    title: "Cooling Finish",
    description: `A soothing herbal finish calms the ${area} and seals in freshness after detan.`,
    benefit: "Leaves skin brighter, cooler, and visibly refreshed.",
    animation: "gel",
  },
];

const peelMaskRitual = (
  ingredient: string,
  benefit: string
): ServiceStep[] => [
  {
    title: "Cleanse",
    description: `A soft herbal cleanse prepares the face for the ${ingredient} peel-off mask.`,
    benefit: "Clears surface oil and dust for even mask adhesion.",
    animation: "cleanse",
  },
  {
    title: "Mask Application",
    description: `A smooth layer of ${ingredient} peel-off mask is brushed evenly across the face.`,
    benefit: "Covers pores and fine lines for a refined salon finish.",
    animation: "pack",
  },
  {
    title: "Setting Time",
    description: "The mask is left to set until it forms a flexible film on the skin.",
    benefit: "Allows actives to work while the mask binds to surface impurities.",
    animation: "powder",
  },
  {
    title: "Peel-Off Finish",
    description: `The dried ${ingredient} mask is lifted away in one gentle motion.`,
    benefit,
    animation: "peel",
  },
  {
    title: "Toner",
    description: "A botanical toner balances the skin after peeling and restores comfort.",
    benefit: "Refines pores and leaves the face fresh and calm.",
    animation: "tone",
  },
];

const hairColorRitual = (
  ingredient: string,
  benefit: string
): ServiceStep[] => [
  {
    title: "Consultation",
    description: `Hair and scalp are assessed to tailor the ${ingredient} mix, coverage, and timing.`,
    benefit: "Ensures the color result matches hair type and desired shade.",
    animation: "tone",
  },
  {
    title: "Herbal Mix",
    description: `Fresh ${ingredient} is blended into a smooth, salon-ready coloring paste.`,
    benefit: "Delivers pure botanical color without harsh chemical additives.",
    animation: "powder",
  },
  {
    title: "Application",
    description: "The herbal paste is sectioned and applied from roots to tips with even coverage.",
    benefit: "Supports uniform color deposit and natural-looking results.",
    animation: "pack",
  },
  {
    title: "Resting Time",
    description: "The color is left to develop while the herbs nourish the hair and scalp.",
    benefit,
    animation: "gel",
  },
  {
    title: "Rinse & Care Finish",
    description: "A gentle herbal rinse removes paste residue and a light conditioning finish is applied.",
    benefit: "Leaves hair soft, shiny, and naturally colored with lasting herbal care.",
    animation: "cleanse",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "facial",
    label: "Facial",
    subCategories: [
      {
        id: "expert",
        label: "Expert",
        services: [
          {
            id: "sangu-poo-facial",
            name: "Sangu Poo Facial",
            tagline: "Instant glow and under-eye dark circle care",
            description:
              "A Sangu Poo flower ritual inspired by Tamil herbal care, designed to calm visible stress while giving skin a soft, hydrated glow.",
            icon: "Flower",
            image: "/assets/sangu-poo.png",
            duration: "90 min",
            steps: tenStepFacial(
              "Sangu Poo",
              "Soothes the skin, supports freshness, and leaves a calm luminous finish."
            ),
          },
          {
            id: "saffron-facial",
            name: "Saffron Facial",
            tagline: "Bridal glow and skin repair care",
            description:
              "A premium saffron ritual for luminous skin, layering ten treatments from cleansing milk to serum for a refined golden finish.",
            icon: "Gem",
            image: "/assets/saffron.png",
            duration: "90 min",
            steps: tenStepFacial(
              "saffron",
              "Encourages a brighter, more even look with a polished luxury glow."
            ),
          },
          {
            id: "multi-fruits-facial",
            name: "Multi Fruits Facial",
            tagline: "Vitamin-rich care to help heal tired skin",
            description:
              "A bright, antioxidant facial with fruit extracts that revive dull skin and bring a naturally fresh salon glow.",
            icon: "Grape",
            image: "/assets/multi-fruits.png",
            duration: "60 min",
            steps: sevenStepFacial(
              "multi fruit botanicals",
              "Revitalises tired skin with fruit antioxidants and improves a fresh glow."
            ),
          },
        ],
      },
      {
        id: "advanced",
        label: "Advanced",
        services: [
          {
            id: "avaram-poo-facial",
            name: "Avaram Poo (Cassia auriculata) Facial",
            tagline: "Oil control",
            description:
              "A traditional Tamil herbal facial built around Avaram Poo, a golden flower treasured for cooling, brightening, and balancing tired skin.",
            icon: "Sun",
            image: "/assets/aavaram-poo.png",
            duration: "60 min",
            steps: sevenStepFacial(
              "Avaram Poo",
              "Helps cool the skin, soften tan, and reveal a clearer golden glow."
            ),
          },
          {
            id: "papaya-facial",
            name: "Papaya Facial",
            tagline: "Skin whitening",
            description:
              "A papain-rich facial for dull, uneven skin. Papaya enzymes gently loosen dead cells while the ritual leaves skin smoother and brighter.",
            icon: "Citrus",
            image: "/assets/papaya.png",
            duration: "60 min",
            steps: sevenStepFacial(
              "Papaya",
              "Supports enzyme exfoliation, improves brightness, and softens uneven texture."
            ),
          },
          {
            id: "banana-facial",
            name: "Banana Facial",
            tagline: "Natural moisture for dry skin",
            description:
              "A vitamin-rich banana facial using ripe Kavery Delta bananas — natural potassium and moisture-binding enzymes soften, hydrate, and illuminate tired skin.",
            icon: "Banana",
            image: "/assets/banana.png",
            duration: "60 min",
            steps: sevenStepFacial(
              "Banana",
              "Deeply nourishes dry skin, restores softness, and leaves a healthy natural glow."
            ),
          },
          {
            id: "neem-tulasi-facial",
            name: "Neem & Tulasi Facial",
            tagline: "Anti-acne care",
            description:
              "A purifying facial with neem and tulasi for skin that feels congested, oily, or stressed. Cooling herbs help calm and clarify without harshness.",
            icon: "LeafyGreen",
            image: "/assets/Neem-Tulasi.png",
            duration: "60 min",
            steps: sevenStepFacial(
              "Neem and Tulasi",
              "Helps calm blemish-prone skin, reduce excess oil, and leave the face fresh."
            ),
          },
        ],
      },
    ],
  },
  {
    id: "detan",
    label: "Detan",
    services: [
      {
        id: "sandalwood-peppermint-detan",
        name: "Sandalwood & Peppermint Detan",
        tagline: "Cooling tan removal for face and neck",
        description:
          "A sandalwood and peppermint detan ritual for the face and neck — cooling sun-stressed skin while gently lifting tan and restoring a brighter, even tone.",
        icon: "Sun",
        duration: "45 min",
        image: "/assets/sandalwood-peppermint-detan.png",
        steps: detanRitual(
          "sandalwood and peppermint",
          "face and neck",
          "Cools heated skin, softens tan, and leaves a fresh herbal glow."
        ),
      },
    ],
  },
  {
    id: "peel-off-mask",
    label: "Peel-Off Mask",
    services: [
      {
        id: "cardamom-peel-off-mask",
        name: "Cardamom Peel-Off Mask",
        tagline: "Aromatic pore-refining peel",
        description:
          "A warming cardamom peel-off mask that lifts surface impurities, refines pores, and leaves skin with a smooth, salon-polished finish.",
        icon: "Sparkle",
        duration: "35 min",
        image: "/assets/cardamom.png",
        steps: peelMaskRitual(
          "cardamom",
          "Refines pores, lifts dullness, and leaves skin visibly smoother."
        ),
      },
      {
        id: "activated-charcoal-peel-off-mask",
        name: "Activated Charcoal Peel-Off Mask",
        tagline: "Deep cleanse for congested skin",
        description:
          "An activated charcoal peel-off mask for skin that feels oily or congested — the mask binds to surface buildup and peels away for a cleaner, fresher look.",
        icon: "LeafyGreen",
        duration: "35 min",
        image: "/assets/charcoal.png",
        steps: peelMaskRitual(
          "activated charcoal",
          "Draws out surface impurities and leaves skin feeling deeply cleansed."
        ),
      },
    ],
  },
  {
    id: "hair-color",
    label: "Hair Color",
    services: [
      {
        id: "organic-henna-indigo-mix",
        name: "Organic Pure Henna & Indigo Mix Hair Color",
        tagline: "Chemical-free natural coloring",
        description:
          "A pure organic henna and indigo blend for rich, natural hair color — no chemicals, only what our soil provides for lasting herbal shade.",
        icon: "Palette",
        duration: "120 min",
        image: "/assets/indigo-aloevera.png",
        steps: hairColorRitual(
          "organic henna and indigo",
          "Delivers rich natural color while nourishing hair and scalp with herbal care."
        ),
      },
      {
        id: "natural-henna-aloe-gel-coloring",
        name: "Natural Henna Aloe Gel Coloring",
        tagline: "Gentle color with aloe hydration",
        description:
          "A soothing henna aloe gel coloring treatment that tints hair naturally while aloe keeps the scalp calm and strands soft throughout the process.",
        icon: "Paintbrush",
        duration: "75 min",
        image: "/assets/henna-aloe-color.png",
        steps: hairColorRitual(
          "henna aloe gel",
          "Colors hair gently while aloe soothes the scalp and adds moisture."
        ),
      },
    ],
  },
  {
    id: "massage",
    label: "Massage",
    subCategories: [
      {
        id: "head-massage",
        label: "Head Massage",
        services: [
          {
            id: "flax-seed-massage",
            name: "Flax Seed Oil Massage",
            tagline: "Omega moisture for dry skin comfort",
            description:
              "A deeply nourishing body massage using flax seed oil for dry skin, fatigue, and a soft healthy glow.",
            icon: "Leaf",
            image: "/assets/flax-seed.png",
            duration: "60 min",
            steps: massageRitual(
              "flax seed oil",
              "Helps nourish dry skin and relax tired muscles."
            ),
          },
          {
            id: "moringa-massage",
            name: "Moringa Oil Massage",
            tagline: "Nourishes skin, scalp, and tired muscles",
            description:
              "A moringa oil massage for skin and scalp nourishment, bringing the richness of the miracle tree into a calming ritual.",
            icon: "TreePine",
            image: "/assets/moringa-seed.png",
            duration: "60 min",
            steps: massageRitual(
              "moringa oil",
              "Supports skin vitality, scalp comfort, and a fresh nourished feel."
            ),
          },
          {
            id: "citrullus-kumatikai-oil-massage",
            name: "Citrullus (Kumatikai) Oil Massage",
            tagline: "Cooling lightweight hydration",
            description:
              "A cooling Citrullus, also called Kumatikai, oil massage for skin that needs light hydration and summer comfort.",
            icon: "Citrus",
            image: "/assets/citrullus(Kumatikai).png",
            duration: "60 min",
            steps: massageRitual(
              "Citrullus (Kumatikai) oil",
              "Gives a cooling, lightweight feel while easing body heat and dryness."
            ),
          },
          {
            id: "hair-growth-oil-massage",
            name: "Hair Growth Oil Massage",
            tagline: "Root nourishment and scalp circulation support",
            description:
              "A focused scalp massage using herbal hair growth oil to nourish roots and relax the head.",
            icon: "Sprout",
            image: "/assets/hair-growth-oils.png",
            duration: "45 min",
            steps: massageRitual(
              "hair growth oil",
              "Supports scalp circulation, root nourishment, and reduced scalp tightness."
            ),
          },
          {
            id: "black-oil-massage",
            name: "Black Oil Massage",
            tagline: "Stiffness relief and deep relaxation",
            description:
              "A stronger black oil massage for body heaviness, stiffness, and deep relaxation.",
            icon: "Flame",
            image: "/assets/bhringraj.png",
            duration: "75 min",
            steps: massageRitual(
              "black oil",
              "Targets stiffness, tired joints, and deep muscle tension."
            ),
          },
        ],
      },
      {
        id: "body-massage",
        label: "Body Massage",
        services: [
          {
            id: "organic-leaf-body-massage-oil",
            name: "Body Massage Oil (Fully Organic Leaf)",
            tagline: "Organic leaf nourishment for soft skin",
            description:
              "A fully organic leaf-based body massage oil ritual for gentle nourishment and natural freshness.",
            icon: "LeafyGreen",
            image: "/assets/full-body-massage.png",
            duration: "60 min",
            steps: massageRitual(
              "fully organic leaf body massage oil",
              "Leaves the body soft, fresh, and naturally cared for."
            ),
          },
        ],
      },
    ],
  },
  {
    id: "hand-foot-care",
    label: "Hand & Foot Care",
    subCategories: [
      {
        id: "manicure",
        label: "Manicure",
        services: [
          {
            id: "banana-leaf-manicure",
            name: "Banana Leaf Manicure",
            tagline: "Cuticle moisture and soft hand care",
            description:
              "A banana leaf manicure for soft hands, neat nails, and a naturally polished finish.",
            icon: "Banana",
            image: "/assets/banana-leaf.png",
            duration: "40 min",
            steps: nailRitual("banana leaf", "hands"),
          },
          {
            id: "tulasi-manicure",
            name: "Tulasi Manicure",
            tagline: "Fresh antibacterial hand care",
            description:
              "A tulasi manicure for clean, fresh, comfortable hands with a cooling herbal touch.",
            icon: "LeafyGreen",
            image: "/assets/tulasi.png",
            duration: "40 min",
            steps: nailRitual("tulasi", "hands"),
          },
        ],
      },
      {
        id: "pedicure",
        label: "Pedicure",
        services: [
          {
            id: "banana-leaf-pedicure",
            name: "Banana Leaf Pedicure",
            tagline: "Heel repair and moisture care",
            description:
              "A banana leaf pedicure for tired feet, dry heels, and a fresh botanical salon finish.",
            icon: "Footprints",
            image: "/assets/banana-leaf.png",
            duration: "50 min",
            steps: nailRitual("banana leaf", "feet"),
          },
          {
            id: "tulasi-pedicure",
            name: "Tulasi Pedicure",
            tagline: "Antibacterial and antifungal foot care",
            description:
              "A tulasi pedicure that refreshes, cleanses, and comforts feet with a cooling herbal finish.",
            icon: "LeafyGreen",
            image: "/assets/tulasi.png",
            duration: "50 min",
            steps: nailRitual("tulasi", "feet"),
          },
        ],
      },
    ],
  },
];

export const allServices = serviceCategories.flatMap(getCategoryServices);
