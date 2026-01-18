'use client';

import { useCart } from '@/lib/cart-context';
import { Product } from '@/lib/products';
import { Truck, Shield, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();

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
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 h-20 rounded cursor-pointer hover:opacity-80"
              >
                <img
                  src={product.images[0]}
                  alt={`${product.name} ${i + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded">
                {product.category.toUpperCase()}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold text-green-600 mr-4">
                Ksh {product.price.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                <span className="text-yellow-500">★★★★★</span> ({product.sellerRating})
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border rounded p-3">
                <div className="flex items-center text-gray-600 mb-1">
                  <Truck size={16} className="mr-2" />
                  <span className="text-sm">Location</span>
                </div>
                <span className="font-medium">{product.location}</span>
              </div>
              <div className="border rounded p-3">
                <div className="flex items-center text-gray-600 mb-1">
                  <Shield size={16} className="mr-2" />
                  <span className="text-sm">Condition</span>
                </div>
                <span className="font-medium capitalize">{product.condition.replace('-', ' ')}</span>
              </div>
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded">
              <div className="flex items-center">
                <Clock className="text-blue-500 mr-2" size={20} />
                <span className="font-medium">Seller Information</span>
              </div>
              <p className="mt-2">
                <strong>Seller:</strong> {product.seller}
                <br />
                <strong>Rating:</strong> {product.sellerRating}/5.0
                <br />
                <strong>Stock:</strong> {product.stock} units available
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-lg ${
                  product.stock === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
              
              <button
                onClick={() => {
                  handleAddToCart();
                  window.location.href = '/checkout';
                }}
                disabled={product.stock === 0}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-lg border ${
                  product.stock === 0
                    ? 'border-gray-300 text-gray-500 cursor-not-allowed'
                    : 'border-orange-500 text-orange-500 hover:bg-orange-50'
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
