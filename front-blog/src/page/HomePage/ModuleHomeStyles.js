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
  },

  '@media (max-width: 892px)': {
    width: '59vw',
  },

  '@media (max-width: 820px)': {
    width: '56vw',
  },

  '@media (max-width: 736px)': {
    width: 'auto',
    height: 'auto',
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
  },

  '@media (max-width: 1220px)': {
    width: '48%',
  },

  '@media (max-width: 960px)': {
    height: '18.5vw',
  },

  '@media (max-width: 822px)': {
    width: '45%',
  },

  '@media (max-width: 798px)': {
    height: '23vw',
  },

  '@media (max-width: 736px)': {
    width: 'auto',
    height: 'auto',
  },
      
}));

export const CalendarBox = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '48%',
  height: '17vw',
  backgroundColor: '#212121',

  '@media (max-width: 1188px)': {
    height: '18vw',
    width: '49%',
  },

  '@media (max-width: 960px)': {
    height: '22vw',
    
  },

  '@media (max-width: 825px)': {
    width: '45%',
    
  },

  '@media (max-width: 798px)': {
    height: '24vw',
    
  },

  '@media (max-width: 736px)': {
     width: '100%',
     height: 'auto',
      
  },
  
  // '@media (max-width: 468px)': {
  //   display: 'none',
    
  // }
    
}));


