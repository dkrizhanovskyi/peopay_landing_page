import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}