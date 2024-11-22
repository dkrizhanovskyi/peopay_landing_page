import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-medium text-gray-900 mb-4">
          Decentralized Payments Made Simple
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          PayPeo bridges the gap between cryptocurrencies and mobile money systems,
          making financial services accessible to everyone.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/about"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Learn More
          </Link>
          <a
            href="https://github.com/dkrizhanovskyi/peopay_landing_page"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-6 py-2 rounded-lg border hover:bg-gray-50"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Global Access</h2>
          <p className="text-gray-600">
            Send and receive payments anywhere in the world instantly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900 mb-2">DeFi Integration</h2>
          <p className="text-gray-600">
            Access decentralized financial services and earn yields.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Mobile First</h2>
          <p className="text-gray-600">
            Seamless integration with mobile money systems.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-600 mb-8">
          Join our community and help shape the future of decentralized payments.
        </p>
        <Link
          to="/roadmap"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        >
          View Roadmap
        </Link>
      </div>
    </div>
  );
};

export default Home;