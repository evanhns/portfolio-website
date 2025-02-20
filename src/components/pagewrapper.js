// src/components/pagewrapper.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './header';
import Hero from './hero';
import Projects from './projects';
import Contact from './contact';

const PageWrapper = ({ scrolled }) => {
  const location = useLocation();
  
  return (
    <>
      {/* Render Header only on non-home routes, without the scrolled prop */}
      {location.pathname !== '/' && <Header />}
      
      <Routes>
        {/* For the home route, render Hero with the scrolled variable */}
        <Route path="/" element={<Hero scrolled={scrolled} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default PageWrapper;