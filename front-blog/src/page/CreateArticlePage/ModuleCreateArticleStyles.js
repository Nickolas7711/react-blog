import { styled } from '@mui/material/styles';


export const CreateWrapp = styled('div')(() => ({
 display: 'flex',
 flexDirection: 'row',
 justifyContent: 'flex-start',
 padding: '10px',
 height: 'auto',  
 gap: '30px',
 
}));

export const TitleCreate = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  width: 'auto',
  height: 'auto',
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: '600',
  color: '#ffffff', 
  marginBottom: '20px',
  
 }));

 export const TitleArticleCreate = styled('div')(() => ({

 '& input': {
    width: '100%',
    height: '35px',
    borderRadius: '5px',
    borderColor: '#72F8FF',
    padding: '5px',
    fontFamily: 'Inter',
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '15px',
  },
  
  
 }));

 export const CreateInner = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  

  
 }));

 export const CreateInnerText = styled('div')(() => ({
  width: '100%',
  
 }));

 export const CreateBoxBtn = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  width: '100%',
  gap: '10px',

  '& button': {
    with: '200px',
    height: '30px',
    background: '#72F8FF',
    color: '#000000',
    borderRadius: '5px',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',

    '&:hover': {
      background: '#1bd1db',
    }
  }
  
 }));

 export const ImgCreateInner = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '30%',  
  
  '& img': {
    width: '300px',
    height: '300px',
    marginTop: '12%',
    border: 'dashed #72F8FF',
  }
  
 }));

 export const BoxInnerImgCreate = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  gap: '10px',

  '& button': {
    background: '#72F8FF',
    color: '#000000',
    borderRadius: '5px',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '12px',
    cursor: 'pointer',

    '&:hover': {
      background: '#1bd1db',
    }

  } 
    
 }));

 export const BoxInnerNoImageCreate = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  gap: '10px',

  '& button': {
    background: '#72F8FF',
    color: '#000000',
    borderRadius: '5px',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '12px',
    cursor: 'pointer',

    '&:hover': {
      background: '#1bd1db',
    }

  } 
    
 }));