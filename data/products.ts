export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  howToUse: string[];
  benefits: string[];
  ingredients: string[];
  image?: string;
  isOil?: boolean;
}

export const products: Product[] = [
  {
    id: "hibiscus-shampoo",
    name: "Hibiscus Shampoo",
    category: "Hair Care",
    description:
      "A gentle cleansing shampoo infused with hibiscus flower extract and bhringraj — formulated to strengthen hair from root to tip while preserving natural oils.",
    howToUse: [
      "Wet hair thoroughly with lukewarm water",
      "Apply a coin-sized amount to scalp and massage gently",
      "Work lather through lengths, leave for 2–3 minutes",
      "Rinse completely and follow with Almond & Milk Conditioner",
    ],
    benefits: [
      "Strengthens hair follicles and reduces breakage",
      "Adds natural shine and softness",
      "Gentle enough for daily salon use",
      "Balances scalp without stripping moisture",
    ],
    ingredients: ["Hibiscus Flower", "Bhringraj", "Amla", "Coconut Surfactant"],
    image: "/assets/Retail/hibiscus-shampoo.png",
  },
  {
    id: "almond-milk-conditioner",
    name: "Almond & Milk Conditioner",
    category: "Hair Care",
    description:
      "A nourishing conditioner blending sweet almond oil with milk protein — designed to detangle, soften, and restore salon-treated hair to its natural silkiness.",
    howToUse: [
      "After shampooing, squeeze excess water from hair",
      "Apply conditioner from mid-lengths to ends",
      "Leave on for 3–5 minutes for deep conditioning",
      "Rinse with cool water to seal the cuticle",
    ],
    benefits: [
      "Deeply moisturises dry, damaged hair",
      "Detangles without weighing hair down",
      "Restores softness after chemical treatments",
      "Milk protein rebuilds hair structure",
    ],
    ingredients: ["Sweet Almond Oil", "Milk Protein", "Shea Butter", "Vitamin E"],
    image: "/assets/Retail/almond&milk-conditioner.png",
  },
  {
    id: "aloe-vera-gel",
    name: "Aloe Vera Gel",
    category: "Face + Body",
    description:
      "Pure aloe vera gel harvested from delta-grown plants — a cooling, lightweight treatment for irritated skin, sun exposure, and post-facial recovery.",
    howToUse: [
      "Apply a thin layer to cleansed face or body",
      "Pat gently until absorbed — do not rub",
      "Use after facials, waxing, or sun exposure",
      "Can be used morning and evening as a soothing base",
    ],
    benefits: [
      "Instantly cools and calms irritated skin",
      "Accelerates healing after salon treatments",
      "Lightweight hydration without residue",
      "Anti-inflammatory for sensitive skin types",
    ],
    ingredients: ["Aloe Vera Leaf", "Witch Hazel", "Vitamin E", "Chamomile"],
    image: "/assets/Retail/aloevera-gel.png",
  },
  {
    id: "almond-milk-moisturising-cream",
    name: "Almond & Milk Moisturising Cream",
    category: "Face + Body",
    description:
      "A rich yet fast-absorbing cream combining almond oil with milk extract — the daily moisturiser for salon clients who need lasting hydration without greasiness.",
    howToUse: [
      "Apply to cleansed face and neck using upward strokes",
      "Use a pea-sized amount for face, more for body",
      "Massage until fully absorbed",
      "Ideal as the final step in morning and evening routines",
    ],
    benefits: [
      "24-hour hydration for dry and combination skin",
      "Evens skin texture with regular use",
      "Non-comedogenic formula safe for facial use",
      "Creates a smooth base for makeup application",
    ],
    ingredients: ["Sweet Almond Oil", "Milk Extract", "Glycerin", "Beeswax"],
    image: "/assets/Retail/almond&milk-cream.png",
  },
  {
    id: "vanilla-lip-balm",
    name: "Vanilla Lip Balm",
    category: "Lip Care",
    description:
      "A protective lip balm crafted with shea butter and vanilla bean extract — seals moisture into delicate lip skin while delivering a subtle, natural vanilla scent.",
    howToUse: [
      "Apply directly to lips as needed throughout the day",
      "Use before bed for overnight repair",
      "Reapply after eating or drinking",
      "Layer under lipstick for added protection",
    ],
    benefits: [
      "Heals cracked and chapped lips within days",
      "Creates a protective moisture barrier",
      "Subtle vanilla scent without artificial fragrance",
      "Compact size ideal for salon retail",
    ],
    ingredients: ["Shea Butter", "Vanilla Bean", "Beeswax", "Coconut Oil"],
    image: "/assets/Retail/vanilla-lip-balm.png",
  },
  {
    id: "acne-prone-serum",
    name: "Serum for Acne Prone Skin",
    category: "Face — Treatment",
    description:
      "A targeted treatment serum with neem, tea tree, and salicylic acid from willow bark — formulated to clear congestion, reduce breakouts, and calm inflamed skin without harsh chemicals.",
    howToUse: [
      "Apply 2–3 drops to cleansed, dry face at night",
      "Pat gently onto affected areas — avoid eye zone",
      "Follow with moisturiser once absorbed",
      "Use consistently for 4–6 weeks for visible results",
    ],
    benefits: [
      "Reduces active breakouts and prevents new ones",
      "Unclogs pores without over-drying",
      "Calms redness and post-acne marks",
      "Suitable for oily and combination skin types",
    ],
    ingredients: ["Neem Extract", "Tea Tree Oil", "Willow Bark", "Niacinamide"],
  },
];

export const featuredProducts = products.filter((p) =>
  ["hibiscus-shampoo", "acne-prone-serum", "almond-milk-moisturising-cream"].includes(p.id)
);
