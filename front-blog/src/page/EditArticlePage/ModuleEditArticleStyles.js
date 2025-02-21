import { styled } from '@mui/material/styles';


export const EditWrapp = styled('div')(() => ({
 display: 'flex',
 flexDirection: 'row',
 justifyContent: 'flex-start',
 padding: '10px',
 height: 'auto',  
 gap: '30px',
 
}));

export const TitleEdit = styled('div')(() => ({
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

 export const TitleArticleEdit = styled('div')(() => ({

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

 export const EditInner = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  

  
 }));

 export const EditInnerText = styled('div')(() => ({
  width: '100%',
  
 }));

 export const EditBoxBtn = styled('div')(() => ({
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

 export const ImgEditInner = styled('div')(() => ({
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

 export const BoxInnerImg = styled('div')(() => ({
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

 export const BoxInnerNoImage = styled('div')(() => ({
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