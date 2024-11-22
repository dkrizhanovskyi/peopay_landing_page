const Roadmap = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="text-3xl font-medium text-gray-900 mb-4">Development Roadmap</h1>
        <p className="text-xl text-gray-600">
          Our journey to revolutionize decentralized payments
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <h2 className="text-lg font-medium text-gray-900">Phase 1: Core Development</h2>
          </div>
          <p className="text-gray-600 mb-4">Q2 2024</p>
          <ul className="space-y-2 text-gray-600">
            <li>• Wallet Implementation</li>
            <li>• Payment Infrastructure</li>
            <li>• Security Framework</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <h2 className="text-lg font-medium text-gray-900">Phase 2: DeFi Integration</h2>
          </div>
          <p className="text-gray-600 mb-4">Q3 2024</p>
          <ul className="space-y-2 text-gray-600">
            <li>• Staking Platform</li>
            <li>• Yield Farming</li>
            <li>• Liquidity Pools</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <h2 className="text-lg font-medium text-gray-900">Phase 3: Regional Expansion</h2>
          </div>
          <p className="text-gray-600 mb-4">Q4 2024</p>
          <ul className="space-y-2 text-gray-600">
            <li>• Local Stablecoins</li>
            <li>• Mobile Money Integration</li>
            <li>• Regional Partnerships</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <h2 className="text-lg font-medium text-gray-900">Phase 4: Advanced Features</h2>
          </div>
          <p className="text-gray-600 mb-4">Q1 2025</p>
          <ul className="space-y-2 text-gray-600">
            <li>• Cross-border Remittances</li>
            <li>• Fraud Detection</li>
            <li>• AI-powered Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;