export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'tools' | 'furniture' | 'electronics' | 'machinery' | 'other';
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'needs-repair';
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
    description: 'Heavy-duty cordless drill with 2 batteries and charger. Perfect for construction work.',
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
    description: 'Solid mahogany wood desk with drawers. Slight scratches but structurally perfect.',
    category: 'furniture',
    condition: 'fair',
    location: 'Mombasa, Nyali',
    seller: 'Furniture Palace',
    sellerRating: 4.5,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'],
    stock: 1
  },
  {
    id: '3',
    name: 'Industrial Juki Sewing Machine',
    price: 45000,
    description: 'Professional sewing machine, lightly used for 6 months. Includes all accessories.',
    category: 'machinery',
    condition: 'like-new',
    location: 'Nakuru',
    seller: 'Tailor Supplies Ltd',
    sellerRating: 4.9,
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400'],
    stock: 2
  },
  {
    id: '4',
    name: 'Bosch Angle Grinder',
    price: 5500,
    description: 'Powerful angle grinder with 3 cutting discs. Works perfectly.',
    category: 'tools',
    condition: 'good',
    location: 'Kisumu',
    seller: 'Tool Masters',
    sellerRating: 4.7,
    images: ['https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400'],
    stock: 5
  },
  {
    id: '5',
    name: 'Generator 5KVA',
    price: 75000,
    description: 'Diesel generator, reliable for backup power. Recently serviced.',
    category: 'machinery',
    condition: 'good',
    location: 'Eldoret',
    seller: 'Power Solutions',
    sellerRating: 4.6,
    images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400'],
    stock: 2
  },
  {
    id: '6',
    name: 'Leather Office Chair',
    price: 8000,
    description: 'Executive leather chair, comfortable and adjustable. Minor wear on armrests.',
    category: 'furniture',
    condition: 'fair',
    location: 'Nairobi, Westlands',
    seller: 'Office Furniture Kenya',
    sellerRating: 4.4,
    images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400'],
    stock: 4
  }
];
