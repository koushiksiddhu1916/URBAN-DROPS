export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  isNew?: boolean;
  sizes?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  shortDesc: string;
}

export const PRODUCTS: Product[] = [
  // --- STREETWEAR (10 Items) ---
  {
    id: "1",
    title: "Oversized 'NEURAL' Tee",
    category: "Streetwear",
    description: "Heavyweight 240 GSM oversized t-shirt in bone white. Features minimalist high-density print on the chest and back.",
    price: 899,
    rating: 5,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: "4",
    title: "Graphite Boxy Hoodie",
    category: "Streetwear",
    description: "Premium fleece hoodie with a structured hood and no drawstrings for a clean, modern aesthetic.",
    price: 1599,
    rating: 4,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['S', 'M', 'L']
  },
  {
    id: "sw3",
    title: "Essential Drop-Shoulder Tee",
    category: "Streetwear",
    description: "Minimalist drop-shoulder tee crafted from organic cotton. Soft, breathable, and essential for daily wear.",
    price: 699,
    rating: 4,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600&auto=format&fit=crop",
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sw4",
    title: "'NIGHTFALL' Graphic Sweatshirt",
    category: "Streetwear",
    description: "Heavyweight loopback french terry sweatshirt with an acid-washed finish and retro graphics.",
    price: 1299,
    rating: 5,
    image: "https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?q=80&w=600&auto=format&fit=crop",
    isNew: false,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: "sw5",
    title: "Washed Charcoal Longsleeve",
    category: "Streetwear",
    description: "Vintage-washed longsleeve tee with ribbed cuffs. Ideal for layering during transitional weather.",
    price: 899,
    rating: 4,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop",
    sizes: ['M', 'L']
  },
  {
    id: "sw6",
    title: "Bleached Concept Hoodie",
    category: "Streetwear",
    description: "Hand-bleached custom hoodie with distressing on the hems and cuffs. Each piece is unique.",
    price: 1799,
    rating: 5,
    image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sw7",
    title: "Utility Zip-Up Hoodie",
    category: "Streetwear",
    description: "Double-zip hoodie with hidden tactical pockets. Made with heavyweight cotton-blend fleece.",
    price: 1499,
    rating: 4,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
    sizes: ['S', 'M', 'L']
  },
  {
    id: "sw8",
    title: "Signature 'VOID' Turtleneck",
    category: "Streetwear",
    description: "Rib-knit mock neck tee featuring the subtle studio logo embroidered on the collar.",
    price: 999,
    rating: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: "sw9",
    title: "Vintage Tour Tee",
    category: "Streetwear",
    description: "Faded, distressed band-style tee with cracking print for an authentic vintage feel.",
    price: 1099,
    rating: 5,
    image: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['M', 'L']
  },
  {
    id: "sw10",
    title: "Heavyweight Flannel Overshirt",
    category: "Streetwear",
    description: "Thick brushed-cotton flannel shirt designed to be worn open as a light jacket.",
    price: 1399,
    rating: 4,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=600&auto=format&fit=crop",
    sizes: ['S', 'M', 'L', 'XL']
  },

  // --- BOTTOMS (10 Items) ---
  {
    id: "2",
    title: "Urban Combat Cargos",
    category: "Bottoms",
    description: "Tech-wear inspired cargo pants with multi-pocket utility. Water-resistant fabric with adjustable ankle straps.",
    price: 1899,
    rating: 4,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['28', '30', '32', '34']
  },
  {
    id: "6",
    title: "Ripped Slouchy Jeans",
    category: "Bottoms",
    description: "Wide-leg distressed denim in light wash. Features authentic wear patterns and frayed hems.",
    price: 2199,
    rating: 5,
    image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=600&auto=format&fit=crop",
    isNew: false,
    sizes: ['30', '32', '34']
  },
  {
    id: "bt3",
    title: "Tactical Parachute Pants",
    category: "Bottoms",
    description: "Lightweight nylon parachute pants with bungee-cord cuffs and oversized fit.",
    price: 1699,
    rating: 4,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600&auto=format&fit=crop",
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: "bt4",
    title: "Faded Black Denim",
    category: "Bottoms",
    description: "Straight fit raw denim that has been stone-washed down to a dusty charcoal grey.",
    price: 2299,
    rating: 5,
    image: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: "bt5",
    title: "Studio Sweatpants",
    category: "Bottoms",
    description: "Premium heavyweight sweatpants with a relaxed fit, hidden drawstrings, and embroidered logo.",
    price: 1299,
    rating: 4,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "bt6",
    title: "Waxed Canvas Trousers",
    category: "Bottoms",
    description: "Heavy duty waxed cotton trousers. Water-resistant and ages beautifully with wear.",
    price: 2599,
    rating: 5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    sizes: ['30', '32', '34']
  },
  {
    id: "bt7",
    title: "Panelled Moto Jeans",
    category: "Bottoms",
    description: "Slim fit denim featuring ribbed knee panels and ankle zips for a stacked look.",
    price: 2099,
    rating: 3,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600&auto=format&fit=crop",
    isNew: false,
    sizes: ['28', '30', '32']
  },
  {
    id: "bt8",
    title: "Painter Carpenter Pants",
    category: "Bottoms",
    description: "Double-knee carpenter pants with subtle paint splatter details. Durable duck canvas.",
    price: 1999,
    rating: 4,
    image: "https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['30', '32', '34', '36']
  },
  {
    id: "bt9",
    title: "Tech Fleece Joggers",
    category: "Bottoms",
    description: "Sleek, articulated tech fleece joggers designed for maximum mobility and warmth without bulk.",
    price: 1499,
    rating: 5,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop",
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: "bt10",
    title: "Baggy Corduroy Pants",
    category: "Bottoms",
    description: "Wide-waled corduroy trousers in a deep olive green. Loose fit with a slight taper.",
    price: 1799,
    rating: 4,
    image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=600&auto=format&fit=crop",
    sizes: ['30', '32', '34']
  },

  // --- OUTERWEAR (10 Items) ---
  {
    id: "3",
    title: "Shadow Denim Jacket",
    category: "Outerwear",
    description: "Faded black distressed denim jacket. Boxy fit with silver-tone hardware and custom studio embroidery.",
    price: 2499,
    rating: 5,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
    isNew: false,
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "5",
    title: "Chrome Mesh Vest",
    category: "Outerwear",
    description: "Layering piece crafted from breathable industrial mesh. Reflective piping for night visibility.",
    price: 1299,
    rating: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
    isNew: false,
    sizes: ['M', 'L']
  },
  {
    id: "ow3",
    title: "Matte Puffer Jacket",
    category: "Outerwear",
    description: "Cropped puffer jacket with a matte black finish. Insulated and water-repellent.",
    price: 3499,
    rating: 5,
    image: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: "ow4",
    title: "Nylon Windbreaker",
    category: "Outerwear",
    description: "Lightweight zip-up windbreaker. Packs down into its own pocket. Ideal for unpredictable weather.",
    price: 1899,
    rating: 4,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=600&auto=format&fit=crop",
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "ow5",
    title: "Vegan Leather Biker",
    category: "Outerwear",
    description: "Classic asymmetrical biker jacket made from premium textured vegan leather with heavy silver hardware.",
    price: 3999,
    rating: 5,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['S', 'M', 'L']
  },
  {
    id: "ow6",
    title: "Varsity Bomber",
    category: "Outerwear",
    description: "Wool-blend varsity jacket with faux leather sleeves and chenille patch detailing on the chest.",
    price: 2999,
    rating: 4,
    image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=600&auto=format&fit=crop",
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "ow7",
    title: "Sherpa Fleece Half-Zip",
    category: "Outerwear",
    description: "Ultra-warm sherpa fleece pullover with nylon contrast panels and a high collar.",
    price: 2199,
    rating: 4,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600&auto=format&fit=crop",
    sizes: ['S', 'M', 'L']
  },
  {
    id: "ow8",
    title: "Tactical Trench Coat",
    category: "Outerwear",
    description: "Modern, shortened trench coat featuring storm flaps and an adjustable belt. Water-resistant.",
    price: 3299,
    rating: 5,
    image: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "ow9",
    title: "Distressed Work Jacket",
    category: "Outerwear",
    description: "Canvas work jacket with a quilted lining. Washed down for a vintage, broken-in feel.",
    price: 2499,
    rating: 4,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "ow10",
    title: "Reflective Shell Pullover",
    category: "Outerwear",
    description: "Technical pullover constructed from a 3M reflective fabric. Features an oversized hood and waterproof zips.",
    price: 2799,
    rating: 3,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    isNew: false,
    sizes: ['S', 'M', 'L']
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "streetwear",
    name: "Summer Drops",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=400&auto=format&fit=crop",
    shortDesc: "Oversized essentials and graphic tees."
  },
  {
    id: "bottoms",
    name: "Urban Utility",
    image: "https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?q=80&w=400&auto=format&fit=crop",
    shortDesc: "Cargos and denim for the concrete jungle."
  },
  {
    id: "jacket",
    name: "The Shell",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=400&auto=format&fit=crop",
    shortDesc: "Outerwear designed for versatility."
  }
];
