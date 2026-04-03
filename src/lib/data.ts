// Central data file for Grid Foods LLC — all product/category/company data

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  items: ProductItem[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  exportAvailable: boolean;
}

export interface ProductItem {
  name: string;
  inStock: boolean;
  exportReady?: boolean;
}

export const categories: ProductCategory[] = [
  {
    id: 'seafood',
    name: 'Frozen Seafood',
    slug: 'seafood',
    description: 'Premium frozen fish, shrimp, and seafood sourced from certified international suppliers worldwide.',
    longDescription:
      'Grid Foods supplies a comprehensive range of premium frozen seafood to hotels, restaurants, supermarkets, and export clients across the UAE and GCC. Our seafood products are sourced from certified aquaculture and wild-catch suppliers across South Asia, Southeast Asia, and the Atlantic — ensuring top-grade quality, traceability, and full food safety compliance. Every batch undergoes strict quality checks before reaching your facility.',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&auto=format&fit=crop',
    icon: '🐟',
    items: [
      { name: 'Whole Fish', inStock: true, exportReady: true },
      { name: 'Fish Fillets', inStock: true, exportReady: true },
      { name: 'Tiger Prawns', inStock: true, exportReady: true },
      { name: 'Vannamei Shrimp', inStock: true, exportReady: true },
      { name: 'Squid Rings', inStock: true },
      { name: 'Octopus', inStock: true },
      { name: 'Crab Sticks', inStock: true },
      { name: 'Mixed Seafood', inStock: true, exportReady: true },
      { name: 'Salmon Portions', inStock: true, exportReady: true },
      { name: 'Sea Bass', inStock: true },
    ],
    keywords: ['seafood supplier Dubai', 'frozen fish UAE', 'frozen shrimp supplier Dubai', 'wholesale seafood GCC', 'frozen seafood export Dubai'],
    metaTitle: 'Frozen Seafood Supplier & Exporter Dubai | Fish, Shrimp & More — Grid Foods LLC',
    metaDescription:
      'Top frozen seafood supplier & exporter in Dubai. Wholesale fish, shrimp, prawns, and mixed seafood for HORECA, supermarkets & GCC export. Contact Grid Foods LLC.',
    exportAvailable: true,
  },
  {
    id: 'poultry',
    name: 'Poultry',
    slug: 'poultry',
    description: 'Halal-certified frozen chicken, nuggets, and poultry products from globally trusted processors.',
    longDescription:
      'We supply 100% halal-certified frozen poultry products to restaurants, hotels, catering companies, retail chains, and export clients across the UAE and GCC. Our poultry range includes whole chickens, premium cuts, marinated products, and ready-to-cook items sourced from Brazil, Turkey, Ukraine, and other certified origins — all meeting the highest halal and food safety standards.',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop',
    icon: '🍗',
    items: [
      { name: 'Whole Chicken', inStock: true, exportReady: true },
      { name: 'Chicken Breast', inStock: true, exportReady: true },
      { name: 'Chicken Legs', inStock: true, exportReady: true },
      { name: 'Chicken Wings', inStock: true },
      { name: 'Chicken Nuggets', inStock: true },
      { name: 'Chicken Strips', inStock: true },
      { name: 'Marinated Chicken', inStock: true },
      { name: 'Burger Patties', inStock: true },
      { name: 'Chicken Drumsticks', inStock: true, exportReady: true },
      { name: 'Boneless Thighs', inStock: true },
    ],
    keywords: ['frozen chicken supplier Dubai', 'halal chicken UAE', 'bulk chicken supplier', 'halal poultry export GCC', 'frozen chicken wholesale'],
    metaTitle: 'Halal Frozen Chicken Supplier & Exporter Dubai | Poultry Wholesale — Grid Foods LLC',
    metaDescription:
      'Halal certified frozen chicken and poultry supplier & exporter in Dubai UAE. Wholesale chicken breast, legs, wings, nuggets for HORECA, supermarkets & GCC export.',
    exportAvailable: true,
  },
  {
    id: 'meat',
    name: 'Meat Products',
    slug: 'meat',
    description: 'Quality halal frozen beef, lamb, and processed meat products for wholesale and export buyers.',
    longDescription:
      'Grid Foods offers a curated selection of premium halal frozen meat products for HORECA, retail, and export clients across the UAE and GCC region. From prime beef cuts sourced from Brazil, India, and Australia to premium lamb from New Zealand and Australia — our range meets the highest standards of quality, halal certification, and food safety compliance.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop',
    icon: '🥩',
    items: [
      { name: 'Beef Cuts', inStock: true, exportReady: true },
      { name: 'Ground Beef', inStock: true },
      { name: 'Lamb Chops', inStock: true, exportReady: true },
      { name: 'Mutton', inStock: true, exportReady: true },
      { name: 'Veal', inStock: true },
      { name: 'Beef Burger Patties', inStock: true },
      { name: 'Sausages', inStock: true },
      { name: 'Deli Meats', inStock: true },
      { name: 'Lamb Leg', inStock: true, exportReady: true },
      { name: 'Beef Tenderloin', inStock: true },
    ],
    keywords: ['frozen meat supplier Dubai', 'halal beef UAE', 'wholesale meat distributor', 'halal meat export GCC', 'frozen lamb supplier Dubai'],
    metaTitle: 'Halal Frozen Meat Supplier & Exporter Dubai | Beef, Lamb Wholesale — Grid Foods LLC',
    metaDescription:
      'Wholesale halal frozen meat supplier & exporter in Dubai. Premium beef, lamb, mutton, and processed meat for HORECA, supermarkets & GCC export.',
    exportAvailable: true,
  },
  {
    id: 'dairy',
    name: 'Dairy Products',
    slug: 'dairy',
    description: 'Full range of dairy — milk, cheese, butter, and cream from top international brands.',
    longDescription:
      'Our dairy portfolio covers everything from fresh UHT milk and cream to a wide assortment of premium cheeses and butters sourced from Europe, Oceania, and the GCC. Ideal for food service operations, bakeries, pastry chefs, and retail outlets — we ensure consistent quality and competitive bulk pricing with temperature-controlled storage and delivery.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop',
    icon: '🧀',
    items: [
      { name: 'UHT Milk', inStock: true },
      { name: 'Fresh Cream', inStock: true },
      { name: 'Butter', inStock: true, exportReady: true },
      { name: 'Cheddar Cheese', inStock: true, exportReady: true },
      { name: 'Mozzarella', inStock: true, exportReady: true },
      { name: 'Processed Cheese', inStock: true },
      { name: 'Yogurt', inStock: true },
      { name: 'Cream Cheese', inStock: true },
      { name: 'Whipping Cream', inStock: true },
      { name: 'Feta Cheese', inStock: true },
    ],
    keywords: ['dairy supplier Dubai', 'wholesale cheese UAE', 'butter supplier Dubai', 'dairy products export GCC'],
    metaTitle: 'Dairy Products Supplier Dubai | Cheese, Butter & Milk Wholesale — Grid Foods LLC',
    metaDescription:
      'Dairy products wholesale supplier in Dubai UAE. Bulk supply of milk, cheese, butter, cream and yogurt for restaurants, bakeries, supermarkets & export.',
    exportAvailable: true,
  },
  {
    id: 'frozen-snacks',
    name: 'Frozen Snacks',
    slug: 'frozen-snacks',
    description: 'Ready-to-fry frozen snacks — French fries, samosas, spring rolls, and more for food service.',
    longDescription:
      'We supply a wide variety of frozen snack products ideal for quick-service restaurants, catering companies, cloud kitchens, and retail outlets. Our range includes premium French fries from Belgium and Netherlands, samosas, spring rolls, onion rings, and more — all ready for quick, consistent preparation that your customers will love.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop',
    icon: '🍟',
    items: [
      { name: 'French Fries', inStock: true, exportReady: true },
      { name: 'Curly Fries', inStock: true },
      { name: 'Wedges', inStock: true },
      { name: 'Spring Rolls', inStock: true, exportReady: true },
      { name: 'Samosas', inStock: true, exportReady: true },
      { name: 'Onion Rings', inStock: true },
      { name: 'Potato Croquettes', inStock: true },
      { name: 'Hash Browns', inStock: true },
      { name: 'Mozzarella Sticks', inStock: true },
      { name: 'Chicken Pops', inStock: true },
    ],
    keywords: ['frozen snacks supplier Dubai', 'French fries wholesale UAE', 'frozen food distributor', 'frozen snacks export GCC'],
    metaTitle: 'Frozen Snacks Supplier Dubai | French Fries, Samosas Wholesale — Grid Foods LLC',
    metaDescription:
      'Frozen snacks wholesale supplier in Dubai. Bulk French fries, samosas, spring rolls and frozen appetizers for restaurants, food service & GCC export.',
    exportAvailable: true,
  },
  {
    id: 'rice-grains',
    name: 'Rice & Grains',
    slug: 'rice-grains',
    description: 'Premium basmati, sella rice, lentils, and grains for bulk food distributors and export.',
    longDescription:
      'Grid Foods is a trusted supplier of premium basmati rice, sella rice, parboiled rice, and a variety of pulses and grains sourced from India, Pakistan, and Thailand. We serve large distributors, catering companies, supermarkets, and international export clients with competitive bulk pricing, consistent quality, and reliable logistics across the UAE and GCC.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop',
    icon: '🌾',
    items: [
      { name: 'Basmati Rice', inStock: true, exportReady: true },
      { name: 'Sella Rice', inStock: true, exportReady: true },
      { name: 'Parboiled Rice', inStock: true, exportReady: true },
      { name: 'Brown Rice', inStock: true },
      { name: 'Lentils', inStock: true, exportReady: true },
      { name: 'Chickpeas', inStock: true },
      { name: 'Wheat', inStock: true },
      { name: 'Oats', inStock: true },
      { name: 'Jasmine Rice', inStock: true },
      { name: 'Red Lentils', inStock: true },
    ],
    keywords: ['rice supplier Dubai', 'basmati rice wholesale UAE', 'bulk grain supplier', 'rice export Dubai GCC'],
    metaTitle: 'Rice & Grains Supplier & Exporter Dubai | Basmati, Sella Rice Wholesale — Grid Foods LLC',
    metaDescription:
      'Bulk rice and grains supplier & exporter in Dubai UAE. Wholesale basmati, sella, parboiled rice and pulses for distributors, restaurants, supermarkets & GCC export.',
    exportAvailable: true,
  },
];

export const companyInfo = {
  name: 'Grid Foods LLC',
  tagline: 'Premium Frozen Food Solutions — Import, Distribution & Export',
  shortTagline: 'Premium Frozen Food Supply in Dubai',
  email: 'info@gridfoods.ae',
  phone: '+971 50 123 4567',
  whatsapp: '+971501234567',
  address: 'Dubai, United Arab Emirates',
  established: '2023',
  foundedYear: 2023,
};

export const certifications = [
  { name: 'Halal Certified', icon: '☪️', description: 'All products meet strict halal standards' },
  { name: 'HACCP Compliant', icon: '🛡️', description: 'Hazard analysis & critical control points' },
  { name: 'ISO 22000', icon: '📋', description: 'International food safety management' },
  { name: 'Dubai Municipality Approved', icon: '🏛️', description: 'Licensed & regulated by Dubai Municipality' },
  { name: 'ESMA Certified', icon: '✅', description: 'Emirates standards compliance' },
  { name: 'Cold Chain Verified', icon: '❄️', description: 'Unbroken temperature-controlled supply' },
];

export const exportMarkets = [
  { region: 'GCC', countries: ['Saudi Arabia', 'Oman', 'Qatar', 'Bahrain', 'Kuwait'] },
  { region: 'Africa', countries: ['Kenya', 'Tanzania', 'Nigeria', 'South Africa'] },
  { region: 'South Asia', countries: ['India', 'Sri Lanka', 'Bangladesh'] },
  { region: 'CIS', countries: ['Kazakhstan', 'Uzbekistan', 'Georgia'] },
];

export const blogPosts = [
  {
    slug: 'halal-frozen-food-supply-chain-dubai',
    title: 'How Halal Frozen Food Supply Chains Work in Dubai',
    excerpt: 'Discover how Dubai\'s frozen food distributors maintain halal certification throughout the cold chain — from international sourcing to last-mile delivery.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
    date: '2026-03-15',
    readTime: '5 min read',
    category: 'Industry Insights',
  },
  {
    slug: 'why-horeca-businesses-need-reliable-food-distributor',
    title: 'Why HORECA Businesses Need a Reliable Food Distributor',
    excerpt: 'From menu consistency to cost control — learn why partnering with a trusted frozen food distributor is critical for restaurants, hotels, and catering companies in the UAE.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop',
    date: '2026-02-28',
    readTime: '4 min read',
    category: 'Business Tips',
  },
  {
    slug: 'frozen-food-export-opportunities-gcc-2026',
    title: 'Frozen Food Export Opportunities in the GCC for 2026',
    excerpt: 'The GCC frozen food market is booming. Explore the key trends, regulations, and opportunities for exporters looking to supply Saudi Arabia, Oman, Qatar, and beyond.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop',
    date: '2026-01-20',
    readTime: '6 min read',
    category: 'Export & Trade',
  },
];
