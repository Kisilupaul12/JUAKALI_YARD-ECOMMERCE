'use client';

import { Wrench, Sofa, Cpu, Truck, Star } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { Product } from '@/lib/products';
import Link from 'next/link';

const categoryIcons = {
  tools: Wrench,
  furniture: Sofa,
  electronics: Cpu,
  machinery: Truck,
  other: Truck,
};

const conditionColors = {
  'new': 'bg-green-100 text-green-800',
  'like-new': 'bg-blue-100 text-blue-800',
  'good': 'bg-yellow-100 text-yellow-800',
  'fair': 'bg-orange-100 text-orange-800',
  'needs-repair': 'bg-red-100 text-red-800',
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const Icon = categoryIcons[product.category] || Truck;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      seller: product.seller,
      location: product.location,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className={`text-xs px-2 py-1 rounded ${conditionColors[product.condition]}`}>
            {product.condition.replace('-', ' ')}
          </span>
        </div>
        {product.stock < 3 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Only {product.stock} left
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <Link href={`/product/${product.id}`}>
              <h3 className="font-semibold text-gray-800 hover:text-orange-500">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center mt-1">
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.sellerRating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({product.sellerRating})</span>
            </div>
          </div>
          <span className="text-xl font-bold text-green-600">
            Ksh {product.price.toLocaleString()}
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <Icon size={16} className="mr-1" />
            <span className="capitalize">{product.category}</span>
            <span className="mx-2">•</span>
            <span>{product.location}</span>
          </div>
          
          <div className="flex space-x-2">
            <Link
              href={`/product/${product.id}`}
              className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
            >
              View
            </Link>
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`px-3 py-1 rounded text-sm font-medium ${
                product.stock === 0
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
        
        <div className="mt-3 text-xs text-gray-500">
          Sold by: <span className="font-medium">{product.seller}</span>
        </div>
      </div>
    </div>
  );
}
