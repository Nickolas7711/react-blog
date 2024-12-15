import { styled } from "@mui/material";
import TextField from '@mui/material/TextField';


export const AuthConteiner = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#212121',
  padding: '30px',
  borderRadius: '30px',
  width: '30vw',
  height: 'auto',
  animation: 'pulse 2s infinite ease-in-out',
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 15px 3px rgba(114, 248, 255, 0.5)',
    },
    '50%': {
      boxShadow: '0 0 25px 10px rgba(114, 248, 255, 0.7)',
    },
    '100%': {
      boxShadow: '0 0 15px 3px rgba(114, 248, 255, 0.5)',
    },
  },
}));

export const AuthTitle = styled('div')(() => ({
  display: 'flex',
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  fontWeight: '300',
  fontSize: '2.75rem',
  lineHeight: '1.2',
  color: '#72F8FF',
  textShadow: '0 0 3px #00e6e6,0 0 2px #00e6e6,0 0 14px #00e6e6,0 0 20px #00e6e6',
}));

export const AuthForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '450px',
  marginTop: '20px',
}));

export const CustomTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    color: '#72F8FF', 
    backgroundColor: '#212121', 
  },
  '& .MuiInputLabel-root': {
    color: '#72F8FF', 
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#72F8FF', 
    borderRadius: '10px',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#72F8FF', 
    boxShadow: `
      2px 9px 50px hsla(0, 0%, 0%, 0.1), 
      -2px 9px 60px hsla(0, 0%, 0%, 0.1), 
      0 0 15px 3px #72F8FF`,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#72F8FF !important', 
    boxShadow: '0 0 8px #72F8FF', 
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#72F8FF', 
  },
}));

export const ButtonBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  width: '100%',
  marginTop: '20px',
}));

export const Authbtn = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000000',
  background: '#72F8FF',
  borderRadius: '10px',
  padding: '5px',
  width: '115px',
  height: '23px',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontWeight: '600',
  
}));
