import { Wallet, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Wallet className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PeoPay</span>
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Empowering global financial inclusion through decentralized payments.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-gray-500 hover:text-indigo-600">About</Link></li>
              <li><Link to="/roadmap" className="text-gray-500 hover:text-indigo-600">Roadmap</Link></li>
              <li><a href="#features" className="text-gray-500 hover:text-indigo-600">Features</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/contact" className="text-gray-500 hover:text-indigo-600">Contact</Link></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600">API Reference</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} PeoPay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}