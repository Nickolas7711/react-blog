import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Card from './component/Card/CardArticle';
import { Typography } from '@mui/material';
// import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Typography sx={{ marginTop: 7, marginLeft:10 }}>
      <Card />
      </Typography>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
