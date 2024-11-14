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
  width: '100%',
  height: '10vh',
  paddingLeft: '22px',
  gap: '10px',
}));

export const FooterItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: '#72F8FF',
  
}));

export const Credits = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '60%',
}))