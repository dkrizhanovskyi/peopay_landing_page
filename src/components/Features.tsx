import { Smartphone, Shield, Globe2, Coins, Users, Zap } from 'lucide-react';

const features = [
  {
    name: 'Mobile Money Integration',
    description: 'Seamlessly connect your crypto wallet with local mobile money services for instant transfers.',
    icon: Smartphone
  },
  {
    name: 'Secure Transactions',
    description: 'Enterprise-grade security with multi-signature wallets and advanced encryption.',
    icon: Shield
  },
  {
    name: 'Global Accessibility',
    description: 'Access financial services from anywhere, focusing on underserved regions.',
    icon: Globe2
  },
  {
    name: 'Staking Rewards',
    description: 'Generate passive income by staking your assets in our eco-friendly proof-of-stake network.',
    icon: Coins
  },
  {
    name: 'P2P Trading',
    description: 'Direct peer-to-peer trading with no intermediaries and low fees.',
    icon: Users
  },
  {
    name: 'Instant Settlement',
    description: 'Lightning-fast transactions with near-zero fees using Layer 2 scaling solutions.',
    icon: Zap
  }
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the future of financial transactions with our comprehensive suite of features.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="absolute top-6 left-6 inline-flex items-center justify-center p-3 bg-indigo-50 rounded-md">
                    <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </span>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}