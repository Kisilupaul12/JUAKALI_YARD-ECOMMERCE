export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'tools' | 'furniture' | 'electronics' | 'machinery' | 'other';
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'needs-repair'; // ← THIS LINE IS CRITICAL
  location: string;
  seller: string;
  sellerRating: number;
  images: string[];
  stock: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Makita Cordless Drill',
    price: 8500,
    description: 'Heavy-duty cordless drill with 2 batteries and charger.',
    category: 'tools',
    condition: 'good',
    location: 'Nairobi, Industrial Area',
    seller: 'Jamii Hardware',
    sellerRating: 4.8,
    images: ['https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400'],
    stock: 3
  },
  {
    id: '2',
    name: 'Office Executive Desk',
    price: 12000,
    description: 'Solid mahogany wood desk with drawers.',
    category: 'furniture',
    condition: 'fair',
    location: 'Mombasa, Nyali',
    seller: 'Furniture Palace',
    sellerRating: 4.5,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'],
    stock: 1
  },
];
