import { styled } from '@mui/material/styles';

export const BoxFooter = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: '30px',
  width: 'auto',
  height: 'auto',

  '@media (max-width: 900px)': {
    padding: '10px',
  },

  '@media (max-width: 736px)': {
    justifyContent: 'center',
  }
}));

export const FooterInner = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '10vh',
  paddingLeft: '50px',
  gap: '10px',

  '@media (max-width: 920px)': {
    height: '7vh',
    paddingTop: '15px',
  },

  '@media (max-width: 736px)': {
    justifyContent: 'center',
  }
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

  '@media (max-width: 920px)': {
     width: '25%',
  }
}))