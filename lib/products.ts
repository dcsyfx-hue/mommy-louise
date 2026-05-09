export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'budget-starter',
    name: 'Cash Stuffing Starter Kit',
    description: 'Digital templates and guides for beginners. Perfect for starting your cash stuffing journey.',
    priceInCents: 1999, // $19.99
  },
  {
    id: 'budget-deluxe',
    name: 'Deluxe Budget Templates Bundle',
    description: 'Complete set of 12 customizable budget templates with video tutorials and printable envelopes.',
    priceInCents: 4999, // $49.99
  },
  {
    id: 'budget-premium',
    name: 'Premium Cash System Course',
    description: 'Comprehensive online course covering advanced budgeting strategies, tracking tools, and accountability coaching.',
    priceInCents: 14999, // $149.99
  },
  {
    id: 'envelope-set-basic',
    name: 'Basic Envelope Set (20 pack)',
    description: 'Beautiful eco-friendly envelopes with gingham patterns for physical cash organizing.',
    priceInCents: 2499, // $24.99
  },
  {
    id: 'envelope-set-luxury',
    name: 'Luxury Envelope Set (50 pack)',
    description: 'Premium quality envelopes with luxury finishes, perfect for gifts or serious budgeters.',
    priceInCents: 5999, // $59.99
  },
  {
    id: 'budget-planner-physical',
    name: 'Luxury Budget Planner (Physical)',
    description: 'High-quality printed planner with gilded edges and premium paper for monthly tracking.',
    priceInCents: 3999, // $39.99
  },
  {
    id: 'tracking-journal',
    name: 'Money Tracking Journal',
    description: 'Beautiful journal for daily financial tracking, goals, and reflections.',
    priceInCents: 2999, // $29.99
  },
  {
    id: 'stickers-bundle',
    name: 'Budget Sticker Bundle',
    description: '500 premium quality stickers for decorating your budget system and tracking sheets.',
    priceInCents: 999, // $9.99
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(product => product.id === id)
}

export function getProductPrice(id: string): number | null {
  const product = getProductById(id)
  return product ? product.priceInCents : null
}
