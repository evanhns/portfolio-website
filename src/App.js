import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageWrapper from './components/pagewrapper';
import Hero from './components/hero';
import Projects from './components/projects';
import Contact from './components/contact';
import ScrollSnap from './hooks/ScrollSnap';

const AppContent = ({ scrolled }) => {
  const location = useLocation();
  
  return (
    <>
      {/* Render Hero only on the home route */}
      {location.pathname === '/' && <Hero scrolled={scrolled} />}
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Call the custom hook to enforce scroll snapping
  ScrollSnap();

  // Update the "scrolled" state for visual changes (e.g. Hero animations)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 99);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <PageWrapper scrolled={scrolled} />
    </Router>
  );
}

export default App;