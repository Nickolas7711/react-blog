
import { styled } from '@mui/material/styles';

export const BoxHeader = styled('div')(() => ({
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'flex-start',
 padding: '10px',
 height: '10vw',
 position: 'relative',       
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '10px',              
    left: '50%',             
    width: '60vw',          
    height: '4px',           
    backgroundColor: 'black',  
    transform: 'translateX(-50%)',
    
  },
}));

export const Title = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '20vw',
  color: '#93e7e6',
  textShadow: `0 0 3px #00e6e6, 0 0 2px #00e6e6, 0 0 14px #00e6e6, 0 0 20px #00e6e6`,
  
 }));

 export const BoxButtonPage = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '60vw',
  paddingLeft: '47px',
  gap: '20px',
  
 }));

 export const BoxButtonContact = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  
  
  
 }));