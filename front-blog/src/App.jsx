import React from 'react';
import Header from './component/Header/Header';
import { FooterGrid, HeaderGrid, Item, MainGrid, MainWrapp } from './styled.js';
import CardArticle from './component/Card/CardArticle.jsx';
import Footer from './component/Footer/Footer.jsx';

function App() {
  return (
    <MainWrapp container >
    <HeaderGrid size={12}>
      <Item>
        <Header />
      </Item>
    </HeaderGrid>
    <MainGrid size={12}>
      <Item>
      <CardArticle />
      </Item>
    </MainGrid>
    <FooterGrid size={12}>
      <Item>
        <Footer />
      </Item>
    </FooterGrid>
  </MainWrapp>

    
  );
}

export default App;
