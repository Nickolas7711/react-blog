import { styled } from '@mui/material/styles';

export const CardItemLarge = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '15px',
  width: 'auto',
  height: 'auto',
  paddingLeft: '60px',
  gap: '50px',

  '@media (max-width: 1220px)': {
    gap: '29px',
    height: '156px',
    paddingLeft: '35px',
    
  },

  '@media (max-width: 910px)': {
    paddingLeft: '17px',
    
  },

  '@media (max-width: 736px)': {
    height: 'auto',
    
  },

  '@media (max-width: 468px)': {
    alignItems: 'flex-start',
    gap: '15px',
    height: '156px',
    paddingLeft: '10px',
    
  },
  
}));

export const CardImages = styled('img')(() => ({
  width: '210px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'cover',
  borderRadius: '10px',

  '@media (max-width: 1220px)': {
    width: '160px',
    height: '145px',
  },

  '@media (max-width: 910px)': {
    width: '119px',
    height: '105px',
  },

  '@media (max-width: 736px)': {
    width: '119px',
    height: '105px',
  },

  '@media (max-width: 468px)': {
    width: '80px',
    height: '73px',
  },
}));

export const CardInnerText = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
  height: '100%',
  gap: '5px',

  '@media (max-width: 1220px)': {
    width: 'auto',
    height: '12.049vw',
    gap: 'opx',
  },

  '@media (max-width: 736px)': {
    height: 'auto',
  },
  
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

  '@media (max-width: 865px)': {
    fontSize: '20px',
       
  },
  
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

  '@media (max-width: 910px)': {
    paddingTop: '10px',
  },

  '@media (max-width: 836px)': {
    paddingTop: '5px',
  },
  
}));

export const BoxBtnArticle = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  paddingTop: '50px',
  paddingRight: '15px',

  '@media (max-width: 1220px)': {
    paddingTop: '0.5vw',
  }
  
  
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
  cursor: 'pointer',
  
  
}));
