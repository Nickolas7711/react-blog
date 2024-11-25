import { styled } from "@mui/material";


export const ArticleBlogWrrap = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
    
}));

export const BoxTitleImages = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  paddingLeft: '20px',
  paddingRight: '20px',
  marginBottom: '20px',

    
}));

export const ImagesBox = styled('img')(() => ({
  width: '498px',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'cover',
  borderRadius: '10px',
}));

export const TitleInnerBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',      
}));

export const TitleBox = styled('div')(() => ({
  fontFamily: 'Inter',
  fontSize: '35px',
  fontWeight: '600',
  color: '#ffffff',
}));

export const SubheaderBox = styled('div')(() => ({
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: '600',
  color: '#6AEBFF',
}));

export const ArticleBox = styled('div')(() => ({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '400',
  color: '#ffffff',
  padding: '15px',
}));