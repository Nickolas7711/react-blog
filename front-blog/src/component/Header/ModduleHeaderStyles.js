
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
  width: '20vw',
  color: '#72F8FF',
  paddingLeft:'50px',
  textShadow: `0 0 3px #00e6e6, 0 0 2px #00e6e6, 0 0 14px #00e6e6, 0 0 20px #00e6e6`,
  
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
    left: '57%',             
    width: '60vw',          
    height: '4px',           
    backgroundColor: 'black',  
    transform: 'translateX(-55%)',
  },
 }));

 export const BoxButtonContact = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  
  
  
 }));