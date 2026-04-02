// Central data file for Grid Foods LLC — all product/category data lives here

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  items: string[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const categories: ProductCategory[] = [
  {
    id: 'seafood',
    name: 'Frozen Seafood',
    slug: 'seafood',
    description: 'Premium frozen fish, shrimp, and seafood sourced from certified suppliers worldwide.',
    longDescription:
      'Grid Foods supplies a comprehensive range of frozen seafood to hotels, restaurants, and supermarkets across Dubai and the UAE. Our seafood products are sourced from certified aquaculture and wild-catch suppliers, ensuring top-grade quality and food safety compliance.',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&auto=format&fit=crop',
    icon: '🐟',
    items: ['Whole Fish', 'Fish Fillets', 'Tiger Prawns', 'Vannamei Shrimp', 'Squid', 'Octopus', 'Crab', 'Mixed Seafood'],
    keywords: ['seafood supplier Dubai', 'frozen fish UAE', 'frozen shrimp supplier Dubai'],
    metaTitle: 'Frozen Seafood Supplier Dubai | Fish, Shrimp & More — Grid Foods LLC',
    metaDescription:
      'Top frozen seafood supplier in Dubai. Wholesale fish, shrimp, prawns, and mixed seafood for HORECA and supermarkets. Contact Grid Foods LLC for bulk orders.',
  },
  {
    id: 'poultry',
    name: 'Poultry',
    slug: 'poultry',
    description: 'Halal-certified frozen chicken, nuggets, and poultry products from trusted processors.',
    longDescription:
      'We supply 100% halal-certified frozen poultry products to restaurants, hotels, and retail chains across the UAE. Our poultry range includes whole chickens, cuts, marinated products, and ready-to-cook items from globally trusted brands.',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop',
    icon: '🍗',
    items: ['Whole Chicken', 'Chicken Breast', 'Chicken Legs', 'Chicken Wings', 'Chicken Nuggets', 'Chicken Strips', 'Marinated Chicken', 'Burger Patties'],
    keywords: ['frozen chicken supplier Dubai', 'halal chicken UAE', 'bulk chicken supplier'],
    metaTitle: 'Halal Frozen Chicken Supplier Dubai | Poultry Wholesale — Grid Foods LLC',
    metaDescription:
      'Halal certified frozen chicken and poultry supplier in Dubai UAE. Wholesale chicken breast, legs, wings, nuggets for restaurants and supermarkets.',
  },
  {
    id: 'meat',
    name: 'Meat Products',
    slug: 'meat',
    description: 'Quality halal frozen beef, lamb, and processed meat products for wholesale buyers.',
    longDescription:
      'Grid Foods offers a curated selection of premium halal frozen meat products for HORECA and retail clients in the UAE. From prime beef cuts to processed meat products, our range meets the highest standards of quality and food safety.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop',
    icon: '🥩',
    items: ['Beef Cuts', 'Ground Beef', 'Lamb Chops', 'Mutton', 'Veal', 'Beef Burger Patties', 'Sausages', 'Deli Meats'],
    keywords: ['frozen meat supplier Dubai', 'halal beef UAE', 'wholesale meat distributor'],
    metaTitle: 'Halal Frozen Meat Supplier Dubai | Beef, Lamb Wholesale — Grid Foods LLC',
    metaDescription:
      'Wholesale halal frozen meat supplier in Dubai. Premium beef, lamb, mutton and processed meat for restaurants, hotels and supermarkets in UAE.',
  },
  {
    id: 'dairy',
    name: 'Dairy Products',
    slug: 'dairy',
    description: 'Full range of dairy — milk, cheese, butter, and cream from top international brands.',
    longDescription:
      'Our dairy portfolio covers everything from fresh UHT milk and cream to a wide assortment of cheeses and butters sourced from Europe, Oceania, and the GCC. Perfect for food service operations, bakeries, and retail.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop',
    icon: '🧀',
    items: ['UHT Milk', 'Fresh Cream', 'Butter', 'Cheddar Cheese', 'Mozzarella', 'Processed Cheese', 'Yogurt', 'Cream Cheese'],
    keywords: ['dairy supplier Dubai', 'wholesale cheese UAE', 'butter supplier Dubai'],
    metaTitle: 'Dairy Products Supplier Dubai | Cheese, Butter & Milk Wholesale — Grid Foods LLC',
    metaDescription:
      'Dairy products wholesale supplier in Dubai UAE. Bulk supply of milk, cheese, butter, cream and yogurt for restaurants, bakeries and supermarkets.',
  },
  {
    id: 'frozen-snacks',
    name: 'Frozen Snacks',
    slug: 'frozen-snacks',
    description: 'Ready-to-fry frozen snacks — French fries, samosas, spring rolls, and more.',
    longDescription:
      'We supply a wide variety of frozen snack products ideal for quick-service restaurants, catering companies, and retail. Our range includes crispy French fries, samosas, spring rolls, onion rings, and more — all ready for quick preparation.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop',
    icon: '🍟',
    items: ['French Fries', 'Curly Fries', 'Wedges', 'Spring Rolls', 'Samosas', 'Onion Rings', 'Potato Croquettes', 'Hash Browns'],
    keywords: ['frozen snacks supplier Dubai', 'French fries wholesale UAE', 'frozen food distributor'],
    metaTitle: 'Frozen Snacks Supplier Dubai | French Fries, Samosas Wholesale — Grid Foods LLC',
    metaDescription:
      'Frozen snacks wholesale supplier in Dubai. Bulk French fries, samosas, spring rolls and frozen appetizers for restaurants and food service in UAE.',
  },
  {
    id: 'rice-grains',
    name: 'Rice & Grains',
    slug: 'rice-grains',
    description: 'Premium basmati, sella rice, lentils, and grains for bulk food distributors.',
    longDescription:
      'Grid Foods is a trusted supplier of basmati rice, sella rice, parboiled rice, and a variety of pulses and grains. We serve large distributors, catering companies, and supermarkets with competitive bulk pricing and reliable logistics.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop',
    icon: '🌾',
    items: ['Basmati Rice', 'Sella Rice', 'Parboiled Rice', 'Brown Rice', 'Lentils', 'Chickpeas', 'Wheat', 'Oats'],
    keywords: ['rice supplier Dubai', 'basmati rice wholesale UAE', 'bulk grain supplier'],
    metaTitle: 'Rice & Grains Supplier Dubai | Basmati, Sella Rice Wholesale — Grid Foods LLC',
    metaDescription:
      'Bulk rice and grains supplier in Dubai UAE. Wholesale basmati, sella, parboiled rice and pulses for distributors, restaurants and supermarkets.',
  },
];

export const companyInfo = {
  name: 'Grid Foods LLC',
  tagline: 'Premium Frozen Food Supply in Dubai',
  email: 'info@gridfoods.ae',
  phone: '+971 50 123 4567',
  whatsapp: '+971501234567',
  address: 'Dubai, United Arab Emirates',
  established: '2023',
};
