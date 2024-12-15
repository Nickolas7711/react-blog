import { styled } from '@mui/material/styles';

export const CardItemSmall = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '15px',
  width: 'auto',
  height: 'auto',
  gap: '50px',
  borderRadius: '10px',
  border: '2px solid #72F8FF ',
  
  '@media (max-width: 760px)': {
    height: 'auto',
  },

  '@media (max-width: 736px)': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 'auto',
    paddingLeft: '10px',
    gap: '15px',
  },

}));

export const CardImagesSmall = styled('img')(() => ({
  display: 'none',

  '@media (max-width: 736px)': {
    width: '119px',
    height: '105px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'cover',
    borderRadius: '10px',
  },

  '@media (max-width: 468px)': {
    width: '80px',
    height: '73px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'cover',
    borderRadius: '10px',
  },

}));

export const CardInnerTextSmall = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: 'auto',
  height: '220px',
  gap: '5px',

  '@media (max-width: 736px)': {
    height: 'auto',
  },
  
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

  '@media (max-width: 865px)': {
    fontSize: '20px',
  },

  '@media (max-width: 832px)': {
    fontSize: '18px',
  },
  
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

  '@media (max-width: 1342px)': {paddingTop: '30px',},

  '@media (max-width: 1220px)': {
    paddingTop: '15px',
    justifyContent: 'flex-end',
    paddingRigth: '15px',
    paddingBootom: '5px',
    paddingLeft: '0px',
  },
  '@media (max-width: 980px)': {paddingTop: '5px',},

    
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