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

export interface ServiceCategory {
  id: string;
  label: string;
  services: Service[];
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

export const serviceCategories: ServiceCategory[] = [
  {
    id: "facial",
    label: "Facial",
    services: [
      {
        id: "avaram-poo-facial",
        name: "Avaram Poo (Cassia auriculata) Facial",
        tagline: "Golden flower brightening ritual",
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
        tagline: "Enzyme-powered skin renewal",
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
        tagline: "Nourishing tropical moisture ritual",
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
        tagline: "Clarifying herbal balance ritual",
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
      {
        id: "multi-fruits-facial",
        name: "Multi Fruits Facial",
        tagline: "Vitamin-rich fruit glow ritual",
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
      {
        id: "saffron-facial",
        name: "Saffron Facial",
        tagline: "10-step luxury radiance ritual",
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
        id: "sangu-poo-facial",
        name: "Sangu Poo Facial",
        tagline: "10-step blue flower calming ritual",
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
    ],
  },
  {
    id: "massage",
    label: "Massage",
    services: [
      {
        id: "flax-seed-massage",
        name: "Flax Seed Oil Massage",
        tagline: "Omega-rich full body renewal",
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
        tagline: "Nutrient-rich herbal vitality massage",
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
        id: "coconut-massage",
        name: "Coconut Oil Massage",
        tagline: "Traditional delta warmth ritual",
        description:
          "A traditional warm coconut oil massage for deep comfort, softness, and classic Tamil herbal care.",
        icon: "Droplets",
        image: "/assets/coconut.png",
        duration: "60 min",
        steps: massageRitual(
          "coconut oil",
          "Helps soften skin, relax the body, and reduce dryness."
        ),
      },
      {
        id: "citrullus-kumatikai-oil-massage",
        name: "Citrullus (Kumatikai) Oil Massage",
        tagline: "Cooling seed oil body ritual",
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
        tagline: "Scalp strengthening ritual",
        description:
          "A focused scalp massage using herbal hair growth oil to nourish roots and relax the head.",
        icon: "Sprout",
        image: "/assets/hair-growth-oil.png",
        duration: "45 min",
        steps: massageRitual(
          "hair growth oil",
          "Supports scalp circulation, root nourishment, and reduced scalp tightness."
        ),
      },
      {
        id: "black-oil-massage",
        name: "Black Oil Massage",
        tagline: "Deep tissue therapeutic relief",
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
      {
        id: "organic-leaf-body-massage-oil",
        name: "Body Massage Oil (Fully Organic Leaf)",
        tagline: "Whole-leaf organic body care",
        description:
          "A fully organic leaf-based body massage oil ritual for gentle nourishment and natural freshness.",
        icon: "LeafyGreen",
        image: "/assets/multi-leaf.png",
        duration: "60 min",
        steps: massageRitual(
          "fully organic leaf body massage oil",
          "Leaves the body soft, fresh, and naturally cared for."
        ),
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
        tagline: "Softening herbal foot ritual",
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
        tagline: "Fresh herbal foot cleanse",
        description:
          "A tulasi pedicure that refreshes, cleanses, and comforts feet with a cooling herbal finish.",
        icon: "LeafyGreen",
        image: "/assets/tulasi.png",
        duration: "50 min",
        steps: nailRitual("tulasi", "feet"),
      },
    ],
  },
  {
    id: "manicure",
    label: "Manicure",
    services: [
      {
        id: "banana-leaf-manicure",
        name: "Banana Leaf Manicure",
        tagline: "Softening herbal hand ritual",
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
        tagline: "Fresh herbal hand cleanse",
        description:
          "A tulasi manicure for clean, fresh, comfortable hands with a cooling herbal touch.",
        icon: "LeafyGreen",
        image: "/assets/tulasi.png",
        duration: "40 min",
        steps: nailRitual("tulasi", "hands"),
      },
    ],
  },
];
