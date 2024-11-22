import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Core Development',
    description: 'Wallet and Payment Tools implementation',
    completed: true,
  },
  {
    phase: 'Phase 2',
    title: 'DeFi Integration',
    description: 'Staking and Yield Farming features',
    completed: true,
  },
  {
    phase: 'Phase 3',
    title: 'Regional Expansion',
    description: 'Localized Stablecoins deployment',
    completed: false,
  },
  {
    phase: 'Phase 4',
    title: 'Advanced Features',
    description: 'Cross-border Payments and Fraud Detection',
    completed: false,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Development Roadmap</h2>
          <p className="mt-4 text-lg text-gray-600">Our journey to revolutionize payments</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:flex md:items-center`}>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className={`bg-white p-6 rounded-xl shadow-sm border ${item.completed ? 'border-indigo-100' : 'border-gray-100'} 
                    max-w-md transform transition-all hover:scale-105 hover:shadow-md`}>
                    <div className="flex items-center mb-2">
                      {item.completed ? (
                        <CheckCircle className="h-6 w-6 text-indigo-600 mr-2" />
                      ) : (
                        <Circle className="h-6 w-6 text-gray-400 mr-2" />
                      )}
                      <h3 className="text-lg font-semibold">{item.phase}: {item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`h-4 w-4 rounded-full ${item.completed ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}