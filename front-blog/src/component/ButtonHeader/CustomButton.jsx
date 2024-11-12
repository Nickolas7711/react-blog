import React from "react";
import { Typography } from "@mui/material";
import { BoxButton } from "./ModuleButtonHeaderStyles";


function CustomButton({ text, onClick, active }) {

  return (
    <BoxButton onClick={onClick} active={active}>
      <Typography 
      variant="h5" 
      component="span"  // Используем span, чтобы подчеркивание соответствовало длине текста
      sx={{ flexGrow: 1, display: 'inline' }}
      >
        {text || 'Button Text'}
      </Typography>
    </BoxButton>
  );
}

export default CustomButton;