import React from 'react';
import Header from './component/Header/Header';
import { FooterGrid, HeaderGrid, MainGrid, MainWrapp } from './styled.js';
import CardArticle from './component/Card/CardArticle.jsx';
import Footer from './component/Footer/Footer.jsx';

function App() {
  return (
    <MainWrapp container >
    <HeaderGrid size={12}>
      
        <Header />
      
    </HeaderGrid>
    <MainGrid size={12}>
      
      <CardArticle />
      
    </MainGrid>
    <FooterGrid size={12}>
      
        <Footer />
      
    </FooterGrid>
  </MainWrapp>

    
  );
}

export default App;
