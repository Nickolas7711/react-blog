import { styled } from "@mui/material";

export const ArticleAdminWrapp = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px',
  width: '100%',
  height: 'auto',
  gap: '20px',
  borderRadius: '10px',
  backgroundColor: '#212121',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease', // Плавный переход
  boxShadow: '2px 9px 50px hsla(0, 0%, 0%, 0.1), -2px 9px 60px hsla(0, 0%, 0%, 0.1)', // Обычная тень
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `
      2px 9px 50px hsla(0, 0%, 0%, 0.1), 
      -2px 9px 60px hsla(0, 0%, 0%, 0.1), 
      0 0 15px 3px #72F8FF`,
  },
  
}));