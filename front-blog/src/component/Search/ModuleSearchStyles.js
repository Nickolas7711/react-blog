
import { styled } from '@mui/system';

export const StyledSearchBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
  padding: '10px',
  backgroundColor: '#212121',
  borderRadius: '20px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
}));

export const StyledTextField = styled('div')(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    color: '#ffffff',
    borderRadius: '20px',
    backgroundColor: '#333333',
    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
    '& fieldset': {
      borderColor: '#555555',
    },
    '&:hover fieldset': {
      borderColor: '#72F8FF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#72F8FF',
      boxShadow: '0 0 10px #72F8FF',
    },
  },
  '& .MuiInputBase-input': {
    padding: '12px 14px',
  },
}));