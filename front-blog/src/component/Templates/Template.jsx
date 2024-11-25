import React from 'react';
import { Header } from '../Header';
import { FooterGrid, HeaderGrid, MainGrid, MainWrapp } from './styled.js';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';


function Template() {
  return (
    <MainWrapp container >
    <HeaderGrid size={12}>      
        <Header />      
    </HeaderGrid>
    <MainGrid size={12}>      
      <Outlet />    
    </MainGrid>
    <FooterGrid size={12}>      
        <Footer />      
    </FooterGrid>
  </MainWrapp>    
  );
}

export default Template;