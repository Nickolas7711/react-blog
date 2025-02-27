import { styled } from "@mui/material";


export const AboutWrapp = styled('div')(() => ({
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'flex-start',
  padding: '10px 20px',
  gap:'50px',

  '& h3': {
    margin: '0',
  }
    
}));

export const WrappProfile = styled('div')(() => ({
  display: 'flex',
  flexDirection: "row",
  justifyContent: 'flex-start',
  gap: '50px',

      
}));

export const AvatarBox = styled('div')(() => ({
  display: 'flex',  
  alignItems: 'center',  
  justifyContent: 'center',  
  overflow: 'hidden',
  width: '30%',
  height: '30%',  
  borderRadius: '100%',
  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.8), 0 0 10px 5px rgba(0,184, 255, 80%)",

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
    
}));

export const InfoBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'flex-start',
  gap: '30px',
 
  '& h3': {
    margin: '0',
  }
      
}));

export const PartfolioAbout = styled('div')(() => ({
  display: 'flex',
  flexDirection: "row",
  justifyContent: 'flex-start',
  gap: '35px',

  '& img': {
  borderRadius: '10px',
  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.8), 0 0 10px 5px rgba(0,184, 255, 80%)",
  }
      
}));

export const BiographyBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'flex-start',
  gap: '25px',
  
 
  '& h3': {
    margin: '0',
  }
      
}));

export const BiographyDescription = styled('div')(() => ({
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'flex-start',
  width: '100%',
  minHeight: '300px',
  padding: '10px 20px',
  borderRadius: '10px',
 
  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.8), 0 0 10px 5px rgba(0,184, 255, 80%)",
 
  '& h3': {
    margin: '0',
  }
      
}));

