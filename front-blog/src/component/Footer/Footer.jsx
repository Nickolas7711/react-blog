import React from 'react';
import { Typography } from '@mui/material';
import { BoxFooter, Credits, FooterInner, FooterItem } from './ModuleFooterStyles';

function Footer() {

  const currentDate = new Date();

  return (
    <BoxFooter>
      <FooterInner>
        <FooterItem>
          <Typography>Design by Nickolas77</Typography>
        </FooterItem>
        <FooterItem>
        <img src={`${process.env.PUBLIC_URL}/images/Vector.svg`} alt="icon" width="39.85" height="40" />
        </FooterItem>
          <Credits>
        <FooterItem>
            <Typography>Copyleft {currentDate.getFullYear()}</Typography>
        </FooterItem>
          </Credits>
      </FooterInner>
    </BoxFooter>
  );
}

export default Footer;