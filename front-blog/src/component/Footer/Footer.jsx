import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import AvatarFooter from './AvatarFooter';
import { Logo } from '../Header/ModduleHeaderStyles';
import { FooterContent, Telephone } from './ModuleFooterStyles';

function Footer() {
  return (
    <FooterContent>
        <AvatarFooter />
      <Telephone>
      <a href="tel:+380994902539">
      <FontAwesomeIcon icon={faPhone} /> Tel.</a>
      </Telephone>
      <Logo>LOGO</Logo>
    </FooterContent>
  );
}

export default Footer;