import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating?: number;
    discount?: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const originalPrice = product.discount 
    ? Math.round(product.price * 100 / (100 - product.discount))
    : product.price;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">🛠️</div>
        </div>
        {product.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm z-10">
            -{product.discount}% OFF
          </div>
        )}
        <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-bold">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-gray-800 truncate group-hover:text-blue-600">
            {product.name}
          </h3>
          {product.rating && (
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold">{product.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-2xl font-bold text-gray-800">
              Ksh {product.price.toLocaleString()}
            </div>
            {product.discount && (
              <div className="text-sm text-gray-400 line-through">
                Ksh {originalPrice.toLocaleString()}
              </div>
            )}
          </div>
          <div className="text-xs text-gray-500">
            Free delivery
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-3 group-hover:shadow-lg">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
