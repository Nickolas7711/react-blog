import { Grid2, styled } from "@mui/material";


export const ArticleWrapp = styled(Grid2)(() => ({
  height: 'auto',
  backgroundColor: '#212121',
  gap: '15px',
  
  '@media (max-width: 1220px)': {
    gap: '15px',
    
    
  }
    
}));

export const ArticleLarge = styled('div')(() => ({
  width: '100%',
  height: 'auto',
  backgroundColor: '#212121',
  borderRadius: '10px',
  border: '2px solid #72F8FF ',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease', // Плавный переход
  boxShadow: '2px 9px 50px hsla(0, 0%, 0%, 0.1), -2px 9px 60px hsla(0, 0%, 0%, 0.1)', // Обычная тень
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `
      2px 9px 50px hsla(0, 0%, 0%, 0.1), 
      -2px 9px 60px hsla(0, 0%, 0%, 0.1), 
      0 0 15px 3px #72F8FF`,
  }
    
}));

export const ArticleSmall = styled(Grid2)(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '49%',
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
  }
      
}));

export const CalendarBox = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '48%',
  height: '17vw',
  backgroundColor: '#212121',
  
    
}));


