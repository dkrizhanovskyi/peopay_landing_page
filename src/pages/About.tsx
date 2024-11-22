const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="text-3xl font-medium text-gray-900 mb-4">About PayPeo</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          We're building a decentralized payment ecosystem that connects traditional
          mobile money systems with the power of blockchain technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To provide accessible financial services to everyone, regardless of their
            location or banking status, through innovative blockchain solutions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            A world where financial services are borderless, efficient, and
            accessible to all through the seamless integration of mobile money and
            blockchain technology.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Core Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Crypto-Mobile Bridge</h3>
            <p className="text-gray-600">
              Seamless transactions between cryptocurrencies and mobile money
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">DeFi Integration</h3>
            <p className="text-gray-600">
              Access to staking, yield farming, and other DeFi services
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Global Payments</h3>
            <p className="text-gray-600">
              Send and receive payments anywhere in the world
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Security First</h3>
            <p className="text-gray-600">
              Built with industry-leading security standards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;