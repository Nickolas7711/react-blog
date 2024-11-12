import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';
import { BoxFooter, FooterInner, FooterItem } from './ModuleFooterStyles';

function Footer() {
  return (
    <BoxFooter>
      <FooterInner>
        <FooterItem>
          <Typography>Design by Nickolas77</Typography>
        </FooterItem>
        <FooterItem>
          <GitHubIcon />
        </FooterItem>
        <FooterItem>
          <Typography>Copyleft 2024</Typography>
        </FooterItem>
      </FooterInner>
    </BoxFooter>
  );
}

export default Footer;