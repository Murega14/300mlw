import React from 'react';
import { CartContext } from '../context/cart.jsx';

const Checkout = () => {
  const { getCartTotal } = React.useContext(CartContext);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-20 lg:px-40">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Checkout</h2>
        <p className="text-lg text-gray-600">Total Amount: <span className="text-yellow-600 font-semibold">Ksh {getCartTotal()}</span></p>
      </header>
      
      <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Billing Details</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Shipping Address</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your shipping address"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors"
            >
              Complete Purchase
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
