import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedNews from './components/FeaturedNews';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <FeaturedNews />
      <Footer />
    </>
  );
}

export default App;
