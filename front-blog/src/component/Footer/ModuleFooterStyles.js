import { styled } from '@mui/material/styles';

export const BoxFooter = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: '30px',
  width: 'auto',
  height: 'auto',
}));

export const FooterInner = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '50vw',
  height: '10vh',
  paddingLeft: '45px',
  gap: '10px',
}));

export const FooterItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: '#93e7e6',
  
}));