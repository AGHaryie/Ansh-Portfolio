// src/components/Main.js

import React from 'react';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import Welcome from './Header';

const Main = () => {
  return (
    <main>
      <section id="header">
        <Welcome />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>  
    );
};

export default Main;
