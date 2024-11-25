import React from 'react';
import Hero from '../components/Hero';
import Roadmap from '../components/Roadmap';
import Community from '../components/Community';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <>
      <Hero />
      <Roadmap />
      <Community />
      <Subscribe />
    </>
  );
}