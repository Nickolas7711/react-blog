import { styled } from '@mui/material/styles';


export const ModalOverlay = styled('div')(() => ({
 position: 'fixed',
 top: '0px',
 left: '0px',
 width: '100%',
 height: '100%',
 background: 'rgba(0, 0, 0, 0.5)',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center', 
 zIndex: '9999',
}));

export const Modal = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#212121',
  padding: '30px',
  borderRadius: '30px',
  width: '30vw',
  height: 'auto',
  animation: 'pulse 2s infinite ease-in-out',
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 15px 3px rgba(114, 248, 255, 0.5)',
    },
    '50%': {
      boxShadow: '0 0 25px 10px rgba(114, 248, 255, 0.7)',
    },
    '100%': {
      boxShadow: '0 0 15px 3px rgba(114, 248, 255, 0.5)',
    },
  }, 
 }));

 export const TitleModal = styled('div')(() => ({
  display: 'flex',
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  fontWeight: '300',
  fontSize: '15px',
  lineHeight: '1.2',
  color: '#72F8FF',
  textShadow: '0 0 3px #00e6e6,0 0 2px #00e6e6,0 0 14px #00e6e6,0 0 20px #00e6e6',
}));

export const BoxBtnModal = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  marginTop: '20px',
  gap: '10px',

  '& button': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    background: '#72F8FF',
    borderRadius: '10px',
    padding: '5px',
    width: '115px',
    height: '23px',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',

    '&:hover': {
      opacity: '0.8',
    }
  }

}));
