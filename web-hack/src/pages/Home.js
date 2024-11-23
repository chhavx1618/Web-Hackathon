import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import HeroSection from '../components/HeroSection';
import FeaturedNews from '../components/FeaturedNews';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <FeaturedNews />
    </>
  );
}

export default App;
