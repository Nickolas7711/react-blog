import { Grid2, styled } from '@mui/material';

export const AdminWrapp = styled(Grid2)(() => ({
  height: '100vh',
  width: '100vw',
  marginTop: '0px',
  marginLeft: '0px',
    
}));

export const AdminNameGrid = styled(Grid2)(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  backgroundColor: '#212121',
  height: '8vh',
  padding: '10px',
  borderBottom: '2px solid #72F8FF',
  boxShadow: '0 4px 10px rgba(114, 248, 255, 0.3)', 
  position: 'relative',
  zIndex: 1,
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '3px', // Толщина полосы
    background: 'linear-gradient(90deg, rgba(114, 248, 255, 0.7), rgba(255, 255, 255, 0.1))', 
    filter: 'blur(2px)', 
    boxShadow: '0 0 10px rgba(114, 248, 255, 0.5)', 
    zIndex: -1,
  },
  
}));
export const NameTitleAdmin = styled(Grid2)(() => ({
  fontFamily: 'Roboto',
  fontWeight: '400',
  fontSize: '1.2rem',
  color: '#72F8FF',
  textShadow: '0 0 3px #00e6e6,0 0 2px #00e6e6,0 0 14px #00e6e6,0 0 20px #00e6e6',
    
}));

export const AdminHeaderGrid = styled(Grid2)(() => ({
  backgroundColor: '#212121',
  height: '8vh',
  padding: '15px',
  borderBottom: '1px solid #72F8FF',
  boxShadow: '0 4px 10px rgba(114, 248, 255, 0.3)', 
  position: 'relative',
  zIndex: 1,
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px', // Толщина полосы
    background: 'linear-gradient(90deg, rgba(114, 248, 255, 0.7), rgba(255, 255, 255, 0.1))', 
    filter: 'blur(2px)', 
    boxShadow: '0 0 10px rgba(114, 248, 255, 0.5)', 
    zIndex: 2,
  },
}));

export const AdminMenuGrid = styled(Grid2)(() => ({
  backgroundColor: '#1a1e1e',
  height: 'auto',
  padding: '10px'
  
}));

export const AdminMainGrid = styled(Grid2)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: '#212121',
  height: '92vh',
  padding: '30px',
  overflowY: 'auto',
  overflowX: 'hidden',
  
}));

