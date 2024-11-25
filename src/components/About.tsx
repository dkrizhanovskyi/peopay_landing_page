import React from 'react';
import { Shield, Globe, Coins, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About PeoPay</h2>
          <p className="mt-4 text-lg text-gray-600">
            Empowering individuals through accessible decentralized financial solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              PeoPay is dedicated to bridging the gap between traditional financial systems and the digital economy. 
              We believe that everyone deserves access to modern financial tools, regardless of their location or 
              economic status.
            </p>
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-indigo-600" />
              <div>
                <h4 className="font-semibold">Secure & Reliable</h4>
                <p className="text-sm text-gray-600">Built with industry-leading security standards</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="h-8 w-8 text-indigo-600" />
              <div>
                <h4 className="font-semibold">Global Access</h4>
                <p className="text-sm text-gray-600">Available worldwide with local support</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">What We Offer</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Coins className="h-8 w-8 text-indigo-600 mb-3" />
                <h4 className="font-semibold mb-2">Decentralized Payments</h4>
                <p className="text-gray-600">
                  Send and receive payments globally with minimal fees using blockchain technology
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-indigo-600 mb-3" />
                <h4 className="font-semibold mb-2">Community-Driven</h4>
                <p className="text-gray-600">
                  Join a growing community of users shaping the future of finance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}