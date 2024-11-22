import { Wallet, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600';
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Wallet className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PeoPay</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive(link.path)} transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-primary">Get Started</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 ${isActive(link.path)}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full text-left px-3 py-2 btn-primary">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}