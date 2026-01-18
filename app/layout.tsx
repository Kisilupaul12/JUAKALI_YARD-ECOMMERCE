import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/lib/cart-context';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Juakali Yard - Second Hand Marketplace',
  description: 'Buy & sell quality second-hand tools, furniture, and equipment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
              <p>© 2024 Juakali Yard. All rights reserved.</p>
              <p className="text-gray-400 mt-2">M-Pesa payments | Secure transactions | Quality guaranteed</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
