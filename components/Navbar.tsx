'use client';

import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const { itemCount, toggleCart, isCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 text-white p-2 rounded">
                <span className="font-bold text-xl">JY</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Juakali Yard</h1>
                <p className="text-xs text-gray-500">Second Hand Marketplace</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-orange-500 font-medium">Home</a>
              <a href="/products" className="text-gray-700 hover:text-orange-500 font-medium">Products</a>
              <a href="/sell" className="text-gray-700 hover:text-orange-500 font-medium">Sell</a>
              <a href="/about" className="text-gray-700 hover:text-orange-500 font-medium">About</a>
              
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tools, furniture..."
                  className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>

              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-full hover:bg-gray-100"
              >
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleCart}
                className="relative p-2"
              >
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <a href="/" className="text-gray-700 hover:text-orange-500 py-2">Home</a>
                <a href="/products" className="text-gray-700 hover:text-orange-500 py-2">Products</a>
                <a href="/sell" className="text-gray-700 hover:text-orange-500 py-2">Sell</a>
                <a href="/about" className="text-gray-700 hover:text-orange-500 py-2">About</a>
                <div className="relative mt-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border rounded"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && <CartSidebar />}
    </>
  );
}
