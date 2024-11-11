
import { Grid2, styled } from '@mui/material';

export const MainWrapp = styled(Grid2)(() => ({
  height: '100vh',
  width: '100vw',
  
}));

export const Item = styled('div')(() => ({
  padding: '0',
  textAlign: 'center',
  
}));

export const HeaderGrid = styled(Grid2)(() => ({
  height: '11%',
    
}));

// export const SidebarGrid = styled(Grid2)(() => ({
//   backgroundColor: 'blue',
//   height: 'auto',
  
// }));

export const MainGrid = styled(Grid2)(() => ({
 padding: '4vw',
 backgroundColor: '#253838',
 
}));

export const FooterGrid = styled(Grid2)(() => ({
  height: '15vw',
  backgroundColor: '#294b5e',

}));