import React, { useState } from "react";
import { BoxButtonContact, BoxButtonPage, BoxHeader, Title } from "./ModduleHeaderStyles";
import Typography from '@mui/material/Typography';
import CustomButton from "../ButtonHeader/CustomButton";


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
      <CustomButton 
      text="About" 
      onClick={() => handleButtonClick('About')}
      active={activeButton === 'About'}
      />
      <CustomButton 
      text="Home" 
      onClick={() => handleButtonClick('Home')}
      active={activeButton === 'Home'}
      />
    <BoxButtonContact>
      <CustomButton 
      text="Contact Me" 
      onClick={() => handleButtonClick('Contact Me')}
      active={activeButton === 'Contact Me'}
      />
    </BoxButtonContact>
    </BoxButtonPage>

  </BoxHeader>

  );
}
  
export default Header;