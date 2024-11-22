import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import HeroSection from '../components/HeroSection';
import FeaturedNews from '../components/FeaturedNews';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <FeaturedNews />
      <Footer />
    </>
  );
}

export default App;
