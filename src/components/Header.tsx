import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium text-gray-900">
          PayPeo
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/roadmap" className="text-gray-600 hover:text-gray-900">Roadmap</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;