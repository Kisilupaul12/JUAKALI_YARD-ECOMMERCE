export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating?: number;
  discount?: number;
  originalPrice?: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Wooden Dining Chair",
    description: "Handcrafted mahogany chair, excellent condition",
    price: 4500,
    originalPrice: 5500,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    rating: 4.5,
    discount: 18
  },
  {
    id: 2,
    name: "Metal Workbench",
    description: "Sturdy industrial work table with drawers",
    price: 12500,
    originalPrice: 15000,
    category: "Tools & Machinery",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w-800&auto=format&fit=crop",
    rating: 4.7,
    discount: 17
  },
  {
    id: 3,
    name: "Traditional Woven Basket",
    description: "Large hand-woven sisal basket, perfect for storage",
    price: 1800,
    originalPrice: 2500,
    category: "Decor",
    image: "https://images.unsplash.com/photo-1583937443497-31e59c2d1b04?w=800&auto=format&fit=crop",
    rating: 4.3,
    discount: 28
  },
  {
    id: 4,
    name: "Leather Bar Stool",
    description: "Modern leather stool with chrome legs",
    price: 5500,
    originalPrice: 7000,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop",
    rating: 4.4,
    discount: 21
  },
  {
    id: 5,
    name: "Clay Cooking Pot",
    description: "Traditional Kenyan cooking pot, 10L capacity",
    price: 1200,
    originalPrice: 1800,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop",
    rating: 4.6,
    discount: 33
  },
  {
    id: 6,
    name: "Electric Drill Machine",
    description: "Heavy-duty cordless drill with accessories",
    price: 8500,
    originalPrice: 11000,
    category: "Tools & Machinery",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&auto=format&fit=crop",
    rating: 4.8,
    discount: 23
  },
  {
    id: 7,
    name: "Wooden Coffee Table",
    description: "Solid oak coffee table with glass top",
    price: 9500,
    originalPrice: 12000,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop",
    rating: 4.5,
    discount: 21
  },
  {
    id: 8,
    name: "Gardening Tool Set",
    description: "Complete gardening kit with 12 tools",
    price: 3800,
    originalPrice: 5000,
    category: "Gardening",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop",
    rating: 4.4,
    discount: 24
  },
  {
    id: 9,
    name: "Car Battery Charger",
    description: "Automatic 12V battery charger for vehicles",
    price: 6500,
    originalPrice: 8500,
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1562158018-2c1f399b8e8d?w=800&auto=format&fit=crop",
    rating: 4.6,
    discount: 24
  },
  {
    id: 10,
    name: "Exercise Bike",
    description: "Magnetic resistance exercise bike with monitor",
    price: 22000,
    originalPrice: 28000,
    category: "Sport & Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    rating: 4.7,
    discount: 21
  },
  {
    id: 11,
    name: "Smart TV 43-inch",
    description: "LED Smart TV with built-in streaming apps",
    price: 35000,
    originalPrice: 45000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop",
    rating: 4.8,
    discount: 22
  },
  {
    id: 12,
    name: "Office Desk",
    description: "Modern office desk with cable management",
    price: 12500,
    originalPrice: 16000,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    rating: 4.5,
    discount: 22
  }
];
