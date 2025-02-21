import { styled } from '@mui/material';

export const EditorContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',

  '.ql-container': {
    height: '400px',
  },

  '.ql-toolbar': {
    zIndex: 1000, // Увеличиваем z-index для выпадающего списка
    position: 'relative',
  },

  '.ql-picker': {
    zIndex: 1100, // Даем выпадающим спискам больше приоритета
  }
}));

 export const ToggleButton = styled('div')(() => ({
  margin: '10px 0',
  width: '200px',
  padding: '8px 12px',
  background: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '15px',
  
  '&:hover': {
    background: '#0056b3',
  }
  
 }));