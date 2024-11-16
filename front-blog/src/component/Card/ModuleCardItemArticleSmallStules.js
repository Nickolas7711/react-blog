import { styled } from '@mui/material/styles';

export const CardItemSmall = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '15px',
  width: 'auto',
  height: '15vw',
  gap: '50px',
  borderRadius: '10px',
  border: '2px solid #72F8FF '
}));

export const CardInnerTextSmall = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: 'auto',
  height: '220px',
  gap: '5px',
  
}));

export const TitleArticleSmall = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  width: 'auto',
  height: 'auto',
  fontFamily: 'Inter',
  fontSize: '24px',
  fontWeight: '600',
  color: '#ffffff',
  
}));
export const DateArticleSmall = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  width: 'auto',
  height: 'auto',
  fontFamily: 'Inter',
  fontSize: '10px',
  fontWeight: '600',
  color: '#6AEBFF',
  
}));
export const DescriptionsArticleSmall = styled('div')(() => ({
  textAlign: 'start',
  width: 'auto',
  height: 'auto',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontWeight: '600',
  color: '#ffffff',
  paddingTop: '4px',
  
}));

export const BoxBtnArticleSmall = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  paddingTop: '50px',
  paddingLeft: '15px',
  
  
}));

export const ButtonArticleSmall = styled('div')(() => ({
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