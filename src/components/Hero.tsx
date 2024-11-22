import React from 'react';
import { ArrowRight, Wallet, Shield, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            <span className="block">Decentralized Payments</span>
            <span className="block text-indigo-600">For Everyone</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Bridge the gap between cryptocurrencies and mobile money systems. Join us in building a more inclusive financial future.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#subscribe"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Wallet className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Mobile Money Integration</h3>
            <p className="text-gray-600">Seamlessly connect your crypto wallet with mobile money services.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Shield className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">Advanced security protocols to protect your assets and data.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Globe className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Global Access</h3>
            <p className="text-gray-600">Available worldwide with localized payment solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}