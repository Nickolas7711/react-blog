import { styled } from '@mui/material/styles';

export const CalendarWidgetBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px 30px 20px 30px',
  width: 'auto',
  height: '243px',  
  gap: '10px',
  borderRadius: '10px',
  border: '2px solid #72F8FF '
}));

export const BoxMonthYear = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  width: '305px',
  gap: '15px',
  
   
}));

export const TitleMonth = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: '#6AEBFF',
   
}));

export const TitleYear = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: '#6AEBFF',
   
}));

export const BoxDaysGrid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 35px)',
  justifyItems: 'center',
  gap: '10px',
   
}));

export const NumberDay = styled('div')(({ status }) => ({
  width: '30px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '3px',
  cursor: 'pointer',
  color: '#6AEBFF',
  backgroundColor: status === 'open' ? '' : '#6AEBFF', // Цвет фона
  border: status === 'open' ? '2px solid #6AEBFF' : '2px solid #6AEBFF', // Граница
  fontWeight: status === 'open' ? 'bold' : 'normal', // Жирный текст
  transition: 'background-color 0.3s, border 0.3s', // Анимация изменений
  '&:hover': {
    backgroundColor: status === 'open' ? '#66BB6A' : '#6AEBFF', // Изменение цвета при наведении
  },
}));
