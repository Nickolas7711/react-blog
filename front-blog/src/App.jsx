import React from 'react';
import { Header } from './component/Header';
import { FooterGrid, HeaderGrid, MainGrid, MainWrapp } from './styled.js';
import { Footer } from './component/Footer';
import { Home }from './page/HomePage';

function App() {
  return (
    <MainWrapp container >
    <HeaderGrid size={12}>      
        <Header />      
    </HeaderGrid>
    <MainGrid size={12}>      
      <Home />      
    </MainGrid>
    <FooterGrid size={12}>      
        <Footer />      
    </FooterGrid>
  </MainWrapp>    
  );
}

export default App;
