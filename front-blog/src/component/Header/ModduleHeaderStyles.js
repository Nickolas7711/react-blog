
import { styled } from '@mui/material/styles';

export const BoxHeader = styled('div')(() => ({
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'flex-start',
 padding: '10px',
 height: 'auto',
 
    
 
}));

export const Title = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '45vw',
  color: '#72F8FF',
  paddingLeft:'50px',
  textShadow: `0 0 3px #00e6e6, 0 0 2px #00e6e6, 0 0 14px #00e6e6, 0 0 20px #00e6e6`,

  '@media (max-width: 1030px)': {
    width: 'auto',
    paddingLeft:'20px',

  },

  '@media (max-width: 468px)': {
    width: 'auto',
    paddingLeft:'10px',

  },

  
 }));

  export const BoxButtonPage = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '60vw',
  paddingLeft: '52px',
  gap: '20px',
  position: 'relative',       
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '62px',
    // bottom: '10px',              
    left: '60%',             
    width: '105%',          
    height: '4px',           
    backgroundColor: 'black',  
    transform: 'translateX(-55%)',

    '@media (max-width: 560px)': {
      top: '158px',
      left: '56%',
      width: '70vw'
    }

  },

  '@media (max-width: 1030px)': {
    width: 'auto',
    paddingLeft:'20px',

  },

  '@media (max-width: 560px)': {
    width: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '15px',
    gap: '0px',
  },
 }));

 export const BoxButtonContact = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  
  '@media (max-width: 562px)': {
    flexWrap: 'wrap',
  },

  '@media (max-width: 560px)': {
    width: 'auto',
    alignItems: 'flex-start',
    paddingLeft: '0px',
    gap: '0px',
  }, 

  
 }));