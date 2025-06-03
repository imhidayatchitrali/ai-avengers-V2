// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Services from './components/Services';
import About from './components/About';
import BusinessValue from './components/BusinessValue';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesNew from './components/ServicesNew';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <Navbar />
      <Hero />
      {/* <Services /> */}
      <ServicesNew />
      <About />
      <BusinessValue />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;