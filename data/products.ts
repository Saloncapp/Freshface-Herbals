export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  howToUse: string[];
  benefits: string[];
  ingredients: string[];
  isOil?: boolean;
}

export const products: Product[] = [
  {
    id: "flax-seed-oil",
    name: "Flax Seed Oil",
    category: "Face + Body",
    description:
      "Cold-pressed from golden flax seeds grown along the Kavery Delta. Rich in omega-3 fatty acids and lignans — a lightweight oil that absorbs quickly without greasiness.",
    howToUse: [
      "Apply 3–4 drops to cleansed face, pat gently",
      "For body, massage into damp skin after shower",
      "Use morning and evening for best results",
      "Can be mixed with moisturiser for lighter application",
    ],
    benefits: [
      "Reduces inflammation and redness",
      "Improves skin elasticity and firmness",
      "Lightweight hydration without clogging pores",
      "Rich in antioxidants for anti-aging",
    ],
    ingredients: ["Flax Seed", "Vitamin E", "Omega-3"],
    isOil: true,
  },
  {
    id: "moringa-oil",
    name: "Moringa Oil",
    category: "Face + Hair + Body",
    description:
      "Extracted from the seeds of the moringa oleifera tree — nature's multivitamin. Contains 90+ nutrients including zeatin for cellular regeneration.",
    howToUse: [
      "Face: 2–3 drops as night serum or morning moisturiser",
      "Hair: Massage into scalp, leave 30 min before wash",
      "Body: Apply to stretch marks and dry areas",
      "Use daily for visible results within 2 weeks",
    ],
    benefits: [
      "Stimulates hair follicle growth",
      "Fights signs of aging with zeatin",
      "Deeply moisturises without residue",
      "Natural antimicrobial properties",
    ],
    ingredients: ["Moringa Seed", "Behenic Acid", "Oleic Acid"],
    isOil: true,
  },
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    category: "Hair + Body",
    description:
      "Traditional virgin coconut oil from delta plantations, extracted through cold-pressing. The foundation of Tamil Nadu beauty rituals for centuries.",
    howToUse: [
      "Hair: Warm oil, massage scalp, leave overnight",
      "Body: Apply before bath for deep nourishment",
      "Lips: Dab small amount as natural lip balm",
      "Baby-safe for gentle massage",
    ],
    benefits: [
      "Strengthens hair from root to tip",
      "Natural SPF protection for skin",
      "Antibacterial and antifungal",
      "Repairs damaged hair cuticles",
    ],
    ingredients: ["Virgin Coconut", "Lauric Acid", "Caprylic Acid"],
    isOil: true,
  },
  {
    id: "hair-growth-oil",
    name: "Hair Growth Oil",
    category: "Scalp",
    description:
      "A potent blend of bhringraj, amla, brahmi, and fenugreek in a sesame base — formulated over three generations to combat hair loss and promote thick, healthy growth.",
    howToUse: [
      "Part hair into sections, apply oil directly to scalp",
      "Massage in circular motions for 5–10 minutes",
      "Leave overnight or minimum 2 hours",
      "Wash with herbal shampoo, use 3x weekly",
    ],
    benefits: [
      "Stimulates dormant hair follicles",
      "Reduces hair fall and breakage",
      "Darkens and thickens existing hair",
      "Soothes dry, itchy scalp conditions",
    ],
    ingredients: ["Bhringraj", "Amla", "Brahmi", "Fenugreek", "Sesame"],
    isOil: true,
  },
  {
    id: "black-oil",
    name: "Black Oil",
    category: "Body + Joint",
    description:
      "Our most therapeutic blend — 21 herbs infused in black sesame and castor oil over 21 days. A warming oil for deep tissue relief and joint mobility.",
    howToUse: [
      "Warm oil slightly before application",
      "Massage into sore muscles and joints firmly",
      "Apply before sleep for overnight relief",
      "Use daily for chronic pain management",
    ],
    benefits: [
      "Relieves muscle tension and stiffness",
      "Anti-inflammatory for joint pain",
      "Improves circulation in affected areas",
      "Warming therapy for arthritis relief",
    ],
    ingredients: ["Black Sesame", "Castor", "Nirgundi", "Dashamoola"],
    isOil: true,
  },
  {
    id: "kumkumadi-oil",
    name: "Kumkumadi Oil",
    category: "Face — Night Ritual",
    description:
      "The legendary Ayurvedic beauty elixir — saffron, sandalwood, and 26 precious herbs steeped in sesame oil for 40 days. A night ritual for luminous, ageless skin.",
    howToUse: [
      "Apply 2–3 drops to cleansed face at night only",
      "Pat gently, do not rub — let absorb naturally",
      "Use consistently for 28 days for best results",
      "Avoid sun exposure after application",
    ],
    benefits: [
      "Brightens complexion and fades dark spots",
      "Reduces fine lines and wrinkles",
      "Evens skin tone and texture",
      "Ancient formula for bridal glow",
    ],
    ingredients: ["Saffron", "Sandalwood", "Manjistha", "Lotus", "Sesame"],
    isOil: true,
  },
  {
    id: "banana-facial-kit",
    name: "Banana Facial Kit",
    category: "Facial Kit",
    description:
      "Everything you need for a salon-grade banana facial at home — includes cleanser, scrub, pack, toner, and seal, all pre-measured for one complete treatment.",
    howToUse: [
      "Cleanse face with herbal milk cleanser",
      "Apply banana scrub in circular motions, rinse",
      "Spread banana pack evenly, leave 15 minutes",
      "Tone with rose water, seal with moisturiser",
    ],
    benefits: [
      "Instant glow and softness",
      "Deep hydration for dry skin",
      "Natural potassium nourishes skin cells",
      "Salon results in 30 minutes at home",
    ],
    ingredients: ["Banana Pulp", "Rose Water", "Flax Seed", "Honey"],
  },
  {
    id: "papaya-facial-kit",
    name: "Papaya Facial Kit",
    category: "Facial Kit",
    description:
      "Enzyme-powered home facial kit featuring papain-rich papaya formulations for gentle exfoliation and brightening — ideal for dull, uneven skin.",
    howToUse: [
      "Cleanse and pat dry",
      "Apply papaya enzyme peel, wait 5 minutes",
      "Rinse and apply papaya mask for 15 minutes",
      "Finish with toner and light moisturiser",
    ],
    benefits: [
      "Gentle enzyme exfoliation",
      "Brightens and evens skin tone",
      "Reduces appearance of dark spots",
      "Suitable for sensitive skin types",
    ],
    ingredients: ["Papaya Enzyme", "Papain", "Aloe Vera", "Vitamin C"],
  },
  {
    id: "multi-fruit-kit",
    name: "Multi Fruit Facial Kit",
    category: "Facial Kit",
    description:
      "A vibrant vitamin cocktail for your skin — mango, pomegranate, and citrus extracts in a complete 5-step home facial system.",
    howToUse: [
      "Cleanse with fruit enzyme cleanser",
      "Exfoliate with multi-fruit scrub gently",
      "Apply antioxidant fruit mask for 15 min",
      "Tone and seal with fruit-infused products",
    ],
    benefits: [
      "Powerful antioxidant protection",
      "Revitalises tired, dull skin",
      "Boosts natural collagen production",
      "Fresh, fruity salon experience at home",
    ],
    ingredients: ["Mango", "Pomegranate", "Citrus", "Green Tea"],
  },
  {
    id: "herbal-glow-kit",
    name: "Herbal Glow Kit",
    category: "Signature Kit",
    description:
      "Our signature at-home ritual — the complete 10-step Herbal Glow Facial in a beautifully packaged kit. Includes gua sha tool and herbal ampoule.",
    howToUse: [
      "Follow the included step-by-step ritual card",
      "Double cleanse, then proceed through all 10 steps",
      "Use gua sha tool as directed in step 7",
      "Complete ritual takes approximately 60 minutes",
    ],
    benefits: [
      "Complete salon-grade transformation",
      "Includes gua sha sculpting tool",
      "43-botanical herbal ampoule included",
      "Visible glow lasting up to one week",
    ],
    ingredients: ["43 Botanicals", "Kumkumadi", "Gua Sha Stone", "Gold Particles"],
  },
];

export const featuredProducts = products.filter((p) =>
  ["herbal-glow-kit", "kumkumadi-oil", "moringa-oil"].includes(p.id)
);
