
import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

export const BoxButton = styled(MuiButton)(({ active }) => ({
  width: 'auto',  // Убираем фиксированную ширину, чтобы кнопка адаптировалась под текст
  height: '50px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '1px',
  position: 'relative',
  color: '#93e7e6',

  '&:hover': {
    borderBottom: 'none',  // Отключаем стандартное подчеркивание при наведении
  },

  // Добавляем псевдоэлемент подчеркивания
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,  // Размещаем подчеркивание снизу текста
    left: 0,
    width: active ? '100%' : '0%',  // Подчеркивание по ширине текста, если активен
    height: '3px',  // Толщина подчеркивания
    backgroundColor: active ? '#93e7e6' : 'transparent',  // Цвет подчеркивания
    transition: 'width 0.3s ease',  // Анимация при изменении ширины
  },

  '&:hover::after': {
    width: '100%',  // Подчеркивание при наведении
    backgroundColor: '#93e7e6',  // Цвет подчеркивания при наведении
  },
}));