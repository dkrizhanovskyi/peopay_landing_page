import React from 'react';
import { Shield, Globe, Wallet, Coins, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About PeoPay</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PeoPay is revolutionizing the way people interact with digital payments by bridging the gap between traditional financial systems and blockchain technology.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="text-gray-600">
                Built with enterprise-grade security protocols to ensure your assets are always protected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Globe className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Access</h3>
              <p className="text-gray-600">
                Accessible worldwide with localized payment solutions tailored to regional needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Wallet className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
              <p className="text-gray-600">
                Seamlessly connect your existing wallets and payment systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Coins className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multiple Currencies</h3>
              <p className="text-gray-600">
                Support for major cryptocurrencies and traditional payment methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Built by the community, for the community, with continuous feedback and improvements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Future Ready</h3>
              <p className="text-gray-600">
                Constantly evolving with the latest technological advancements in blockchain and fintech.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At PeoPay, our mission is to create a more inclusive financial ecosystem that empowers individuals and businesses worldwide. We believe in breaking down barriers to financial access and providing innovative solutions that make digital payments accessible to everyone, regardless of their location or technical expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}