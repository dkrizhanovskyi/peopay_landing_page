import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Roadmap />
        <Community />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;