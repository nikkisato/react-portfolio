import React from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import About from './about/About';
import Footer from './footer/Footer';
import 'normalize.css';
import Tech from './stack/Stack';
import Form from './form/Form';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
}
