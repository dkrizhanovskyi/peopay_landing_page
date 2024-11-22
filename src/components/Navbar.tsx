import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-2xl font-bold">
              PayPeo
            </Link>
          </motion.div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-purple-700 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/about" className="hover:bg-purple-700 px-3 py-2 rounded-md">
              About
            </Link>
            <Link to="/roadmap" className="hover:bg-purple-700 px-3 py-2 rounded-md">
              Roadmap
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;