import React, { useState } from "react";
import { BoxButtonContact, BoxButtonPage, BoxHeader, Title } from "./ModduleHeaderStyles";
import Typography from '@mui/material/Typography';
import CustomButton from "../ButtonHeader/CustomButton";
import { Link } from "react-router-dom";


function Header() {

  const [activeButton, setActiveButton] = useState('Home'); 

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
  <BoxHeader>
    <Title>
     <Typography variant="h2" component="div" >
       Blog Title
     </Typography>
    </Title>
    <BoxButtonPage>
      <Link to='/blogs/about'>
      <CustomButton
      text="About" 
      onClick={() => handleButtonClick('About')}
      active={activeButton === 'About'}
      />
      </Link>
      <Link to='/blogs/home'>
      <CustomButton 
      text="Home" 
      onClick={() => handleButtonClick('Home')}
      active={activeButton === 'Home'}
      />
      </Link>
    <BoxButtonContact>
      <Link to='/blogs/contactMe'>
      <CustomButton 
      text="Contact Me" 
      onClick={() => handleButtonClick('Contact Me')}
      active={activeButton === 'Contact Me'}
      />
      </Link>
    </BoxButtonContact>
    </BoxButtonPage>

  </BoxHeader>

  );
}
  
export default Header;