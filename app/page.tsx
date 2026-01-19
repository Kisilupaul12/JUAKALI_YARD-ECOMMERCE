import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/lib/products';
import { Truck, Shield, Zap, CreditCard, Search, Filter, ShoppingCart, Star, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);
  
  const categories = [
    { id: 1, name: 'Tools & Machinery', icon: '🔧', items: 450, color: 'bg-blue-100 text-blue-600' },
    { id: 2, name: 'Furniture', icon: '🪑', items: 320, color: 'bg-green-100 text-green-600' },
    { id: 3, name: 'Electronics', icon: '📱', items: 280, color: 'bg-purple-100 text-purple-600' },
    { id: 4, name: 'Construction', icon: '🏗️', items: 190, color: 'bg-orange-100 text-orange-600' },
    { id: 5, name: 'Kitchenware', icon: '🍳', items: 310, color: 'bg-red-100 text-red-600' },
    { id: 6, name: 'Farming Tools', icon: '🌾', items: 175, color: 'bg-yellow-100 text-yellow-600' },
    { id: 7, name: 'Automotive', icon: '🚗', items: 220, color: 'bg-indigo-100 text-indigo-600' },
    { id: 8, name: 'Sport & Fitness', icon: '⚽', items: 140, color: 'bg-pink-100 text-pink-600' },
  ];

  const features = [
    { icon: <Truck className="w-8 h-8" />, title: 'Nationwide Delivery', desc: 'We deliver to all major towns' },
    { icon: <Shield className="w-8 h-8" />, title: 'Quality Checked', desc: 'All items verified before listing' },
    { icon: <Zap className="w-8 h-8" />, title: 'Quick Payment', desc: 'Instant M-Pesa settlement' },
    { icon: <CreditCard className="w-8 h-8" />, title: 'Secure Payment', desc: 'Escrow protection for buyers' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Quality <span className="text-yellow-300">Second-Hand</span><br />
              Juakali Tools & Equipment
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Kenya's Largest Marketplace for Pre-Loved Tools, Machinery, Furniture & Electronics at Unbeatable Prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Start Shopping Now
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Sell Your Items
              </button>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-300" />
                <span>1,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-300" />
                <span>47 Towns Covered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS COUNTER ===== */}
      <section className="bg-gradient-to-r from-blue-700 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">1,000+</div>
              <p className="opacity-90">Happy Customers</p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <p className="opacity-90">Items Listed</p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-5xl font-bold mb-2">47</div>
              <p className="opacity-90">Towns Covered</p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="opacity-90">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find exactly what you need from our wide range of second-hand items</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className={`text-3xl mb-3 ${cat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-800">{cat.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{cat.items}+ items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Featured Products</h2>
              <p className="text-gray-600 mt-2">Top quality items at unbeatable prices</p>
            </div>
            <Link 
              href="/products" 
              className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2"
            >
              View All Products
              <Filter className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Juakali Yard?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We make buying and selling second-hand items safe, easy, and rewarding</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Great Deals?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of Kenyans who buy and sell on Juakali Yard - where quality meets affordability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-transform shadow-lg"
            >
              Browse All Products
            </Link>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              List Item for Free
            </button>
          </div>
          <p className="text-white/80 mt-8">
            No hidden fees • 100% secure • Money-back guarantee
          </p>
        </div>
      </section>
    </main>
  );
      }
