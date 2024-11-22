import { styled } from '@mui/material/styles';

export const CardItemLarge = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: '15px',
  width: 'auto',
  height: '243px',
  paddingLeft: '60px',
  gap: '50px',
  
}));

export const CardImages = styled('img')(() => ({
  width: '210px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'cover',
  borderRadius: '10px',
}));

export const CardInnerText = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: 'auto',
  height: '220px',
  gap: '5px',
  
}));

export const TitleArticle = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  width: 'auto',
  height: 'auto',
  fontFamily: 'Inter',
  fontSize: '24px',
  fontWeight: '600',
  color: '#ffffff',
  
}));
export const DateArticle = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  width: 'auto',
  height: 'auto',
  fontFamily: 'Inter',
  fontSize: '10px',
  fontWeight: '600',
  color: '#6AEBFF',
  
}));
export const DescriptionsArticle = styled('div')(() => ({
  textAlign: 'start',
  width: 'auto',
  height: 'auto',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontWeight: '600',
  color: '#ffffff',
  paddingTop: '20px',
  
}));

export const BoxBtnArticle = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  paddingTop: '50px',
  paddingRight: '15px',
  
  
}));

export const ButtonArticle = styled('div')(() => ({
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  width: '115px',
  height: '23px',
  backgroundColor: '#72F8FF',
  borderRadius: '10px',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontWeight: '600',
  color: '#000000',
  
  
}));
