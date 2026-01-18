import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/lib/products';
import { Truck, Shield, Zap, CreditCard } from 'lucide-react';

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);
  const allProducts = mockProducts;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quality Second-Hand Tools & Equipment
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Buy and sell pre-loved tools, furniture, machinery, and electronics at great prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Start Shopping
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
                Sell Your Items
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <Truck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Nationwide Delivery</h3>
            <p className="text-gray-600 text-sm">We deliver to all major towns</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Quality Checked</h3>
            <p className="text-gray-600 text-sm">All items verified before listing</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Quick Payment</h3>
            <p className="text-gray-600 text-sm">Instant M-Pesa settlement</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <CreditCard className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm">Escrow protection for buyers</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <a href="/products" className="text-orange-500 hover:text-orange-600 font-medium">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Tools', count: 24, color: 'bg-blue-100', icon: '🔧' },
            { name: 'Furniture', count: 18, color: 'bg-green-100', icon: '🛋️' },
            { name: 'Machinery', count: 12, color: 'bg-orange-100', icon: '🏭' },
            { name: 'Electronics', count: 15, color: 'bg-purple-100', icon: '💻' },
          ].map((cat) => (
            <div
              key={cat.name}
              className={`${cat.color} p-6 rounded-xl hover:shadow-md transition-shadow cursor-pointer`}
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-bold text-lg">{cat.name}</h3>
              <p className="text-gray-600">{cat.count} items</p>
            </div>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}