
import { Grid2, styled } from '@mui/material';

export const MainWrapp = styled(Grid2)(() => ({
  height: 'auto',
  width: '70vw',
  backgroundColor: '#212121',
  borderRadius: '30px',
  
  
}));

export const Item = styled('div')(() => ({
  padding: '0',
  textAlign: 'center',
  
  
}));

export const HeaderGrid = styled(Grid2)(() => ({
  height: '7%',
  padding: '30px',
    
}));

export const MainGrid = styled(Grid2)(() => ({
 padding: '1vw 4vw 2vw 4vw',
 backgroundColor: '#212121',
 height: 'auto',
//  borderRadius: ' 20px 20px 0px 0px',
 
}));

export const FooterGrid = styled(Grid2)(() => ({
  height: '10vw',
  backgroundColor: '#212121',
  borderRadius: ' 0px 0px 20px 20px',
  position: 'relative',       
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10px',              
    left: '50%',             
    width: '64vw',          
    height: '2px',           
    backgroundColor: '#93e7e6',  
    transform: 'translateX(-50%)',
    boxShadow: `0 0 8px #00e6e6, 0 0 12px #00e6e6, 0 0 16px #00e6e6, 0 0 20px #00e6e6`,
  },

}));