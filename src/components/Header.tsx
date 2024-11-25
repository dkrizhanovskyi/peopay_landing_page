import React, { useState } from 'react';
import { Wallet, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Wallet className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PeoPay
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">
              About
            </a>
            <a href="#roadmap" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Roadmap
            </a>
            <a href="#community" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Community
            </a>
            <a href="/privacy" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Privacy Policy
            </a>
            <a
              href="https://github.com/dkrizhanovskyi/peopay_landing_page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              View on GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#roadmap"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={toggleMenu}
              >
                Roadmap
              </a>
              <a
                href="#community"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={toggleMenu}
              >
                Community
              </a>
              <a
                href="/privacy"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={toggleMenu}
              >
                Privacy Policy
              </a>
              <a
                href="https://github.com/dkrizhanovskyi/peopay_landing_page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                onClick={toggleMenu}
              >
                View on GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}