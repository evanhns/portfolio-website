// src/components/Hero.js
import React from 'react';
import './hero.css';

const Hero = ({ scrolled }) => {
  return (
    <div className={`hero ${scrolled ? 'scrolled' : ''}`} style={{ minHeight: 'calc(100vh + 101px)' }}>
      <div className="hero-name-container">
        <h1 className="hero-name">Evan <br></br> Haines</h1>
      </div>
      <div className="hero-subtitle">
        <h2 className="hero-subtitle-text">creative portfolio</h2>
      </div>
      <div className={`hero-nav ${scrolled ? 'visible' : ''}`}>
        <a href="/projects">projects</a>
        <a href="/contact">contact</a>
      </div>
    </div>
  );
};

export default Hero;