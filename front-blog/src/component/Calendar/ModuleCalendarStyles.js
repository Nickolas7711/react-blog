import { styled } from '@mui/material/styles';

export const CalendarWidgetBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px 30px 20px 30px',
  width: 'auto',
  height: 'auto',  
  gap: '10px',
  borderRadius: '10px',
  border: '2px solid #72F8FF ',

  '@media (max-width: 1456px)': {
    padding: '10px 23px 20px 25px',
    
  },

  '@media (max-width: 1326px)': {
    padding: '10px 5px 20px 25px',
    
  },

  '@media (max-width: 1220px)': {
    padding: '10px 17px 20px 24px',
    
  },

  '@media (max-width: 1145px)': {
    padding: '10px 5px 20px 7px',
    
  },

  '@media (max-width: 736px)': {
    padding: '10px 49px 20px 49px',
    
  },


  
}));

export const BoxMonthYear = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  width: '305px',
  gap: '15px',

  '@media (max-width: 1326px)': {
    paddingTop: '10px',
    
  },

  '@media (max-width: 1110px)': {
    paddingTop: '5px',
    width: '283px',
    
  },

  '@media (max-width: 960px)': {
    paddingTop: '5px',
    width: 'auto',
    
  },
   
}));

export const TitleMonth = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: '#6AEBFF',

  '@media (max-width: 1270px)': {fontSize: '22px'},
   
}));

export const TitleYear = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: '#6AEBFF',

  '@media (max-width: 1270px)': {fontSize: '22px'},
   
}));

export const BoxDaysGrid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 35px)',
  justifyItems: 'center',
  gap: '10px',

  '@media (max-width: 1416px)': {
    gap: '6px',

  },

  '@media (max-width: 1014px)': {
    gap: '3px',

  },

  '@media (max-width: 960px)': {
    gap: '2px',

  },

  '@media (max-width: 898px)': {
    gridTemplateColumns: 'repeat(7, 28px)',

  },

  '@media (max-width: 798px)': {
    gridTemplateColumns: 'repeat(7, 3.3vw)',

  },

  '@media (max-width: 736px)': {
    gridTemplateColumns: 'repeat(7, 4.3vw)',
    gap: '10px',
  },
   
}));

export const NumberDay = styled('div')(({ status }) => ({
  width: '30px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '3px',
  cursor: 'pointer',
  color: status === 'open' ? '#6AEBFF' : '#fff', // Цвет текста для статуса
  backgroundColor: status === 'open' ? 'transparent' : '#6AEBFF', // Цвет фона
  border: `2px solid #6AEBFF`, // Универсальный стиль границы
  fontWeight: status === 'open' ? 'bold' : 'normal', // Жирный текст при статусе "open"
  transition: 'background-color 0.3s ease, border 0.3s ease', // Анимация изменений
  '&:hover': {
    backgroundColor: status === 'open' ? '#66BB6A' : '#6AEBFF', // Изменение фона при наведении
  },

  '@media (max-width: 1610px)': {
    width: '25px',
    height: '25px',
  },

  '@media (max-width: 1270px)': {
    width: '22px',
    height: '22px',
  },

  '@media (max-width: 1110px)': {
    width: '20px',
    height: '20px',
    fontSize: '15px',
  }
}));
