'use client';

import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, total, toggleCart, clearCart } = useCart();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleCart} />
      
      {/* Sidebar */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="text-orange-500" />
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded">
                  {items.length} items
                </span>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="mx-auto text-gray-300" size={48} />
                  <p className="text-gray-500 mt-4">Your cart is empty</p>
                  <button
                    onClick={toggleCart}
                    className="mt-4 text-orange-500 hover:text-orange-600"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center py-4 border-b">
                      <div className="w-20 h-20 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        <p className="text-sm text-gray-500">{item.seller} • {item.location}</p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-semibold">Ksh {(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={clearCart}
                    className="w-full mt-4 text-sm text-red-500 hover:text-red-600 py-2 border border-red-200 rounded"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">Ksh {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span>Ksh {total.toLocaleString()}</span>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Link
                    href="/checkout"
                    onClick={toggleCart}
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded font-semibold"
                  >
                    Proceed to Checkout
                  </Link>
                  <button
                    onClick={toggleCart}
                    className="block w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded"
                  >
                    Continue Shopping
                  </button>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      M
                    </div>
                    <span>M-Pesa payments accepted</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
