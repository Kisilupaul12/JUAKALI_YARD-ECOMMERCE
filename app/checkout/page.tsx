'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import MpesaSimulator from '@/lib/mpesa-simulator';
import { ArrowLeft, CheckCircle, XCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const [receipt, setReceipt] = useState('');
  const [error, setError] = useState('');
  
  const mpesa = MpesaSimulator.getInstance();

  useEffect(() => {
    if (items.length === 0) {
      window.location.href = '/';
    }
  }, [items]);

  const handlePayment = async () => {
    if (!mpesa.validatePhone(phone)) {
      setError('Please enter a valid Kenyan phone number (e.g., 0712345678)');
      return;
    }

    setError('');
    setLoading(true);
    setPaymentStatus('processing');

    try {
      const formattedPhone = mpesa.formatPhone(phone);
      const orderId = `ORD${Date.now()}`;

      // Initiate payment
      const response = await mpesa.initiatePayment(formattedPhone, total, orderId);
      
      if (response.success) {
        // Simulate waiting for M-Pesa callback
        const callback = await mpesa.simulateCallback(response.checkoutRequestId);
        
        setLoading(false);
        
        if (callback.success) {
          setPaymentStatus('success');
          setReceipt(callback.receipt);
          clearCart();
          
          // Store order in localStorage
          const order = {
            id: orderId,
            items,
            total,
            phone: formattedPhone,
            receipt: callback.receipt,
            timestamp: new Date().toISOString(),
          };
          
          const orders = JSON.parse(localStorage.getItem('juakali-orders') || '[]');
          orders.push(order);
          localStorage.setItem('juakali-orders', JSON.stringify(orders));
        } else {
          setPaymentStatus('failed');
        }
      }
    } catch (err) {
      setLoading(false);
      setPaymentStatus('failed');
      setError('Payment failed. Please try again.');
    }
  };

  if (items.length === 0 && paymentStatus !== 'success') {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/" className="text-orange-500 hover:text-orange-600">
          Return to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Continue Shopping
      </Link>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center border-b pb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.seller} • {item.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">Ksh {(item.price * item.quantity).toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Ksh {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600">To be calculated</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total Amount</span>
                  <span>Ksh {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded"
                  placeholder="Street address, apartment, suite"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Town/City</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded"
                  placeholder="Nairobi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Postal Code</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded"
                  placeholder="00100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div>
          <div className="bg-white rounded-lg shadow p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            
            {paymentStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for your order. Your items will be delivered soon.
                </p>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="text-sm text-gray-500">Receipt Number</p>
                  <p className="font-mono font-bold">{receipt}</p>
                </div>
                <Link
                  href="/"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : paymentStatus === 'failed' ? (
              <div className="text-center py-8">
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Payment Failed</h3>
                <p className="text-gray-600 mb-4">
                  Please try again or contact support if the issue persists.
                </p>
                <button
                  onClick={() => setPaymentStatus('idle')}
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-600 text-white rounded flex items-center justify-center mr-3">
                      <span className="font-bold">M</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">M-Pesa</h3>
                      <p className="text-sm text-gray-500">Pay via M-Pesa STK Push</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      M-Pesa Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0712 345 678"
                        className="w-full pl-10 p-3 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        disabled={loading}
                      />
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Enter your M-Pesa registered number
                    </p>
                  </div>

                  {/* Simulation Notice */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-yellow-800 mb-1">💡 Simulation Mode</h4>
                    <p className="text-sm text-yellow-700">
                      This is a mock payment. No real money will be deducted. 
                      Use any Kenyan phone number format (e.g., 0712345678).
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total to Pay</span>
                    <span className="text-2xl font-bold text-green-600">
                      Ksh {total.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    You'll receive an STK push on your phone
                  </p>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={loading || !phone}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing Payment...
                    </>
                  ) : (
                    `Pay Ksh ${total.toLocaleString()}`
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By completing your purchase, you agree to our Terms of Service
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}