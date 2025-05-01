import React from "react";
import { Button } from "@mui/material";

const CustomBtn = (props) => {
  const { label, link, startIcon, endIcon, onClick, variant, color, size, sx, type } = props;

  return (
    <Button
      href={link}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      type={type}
      sx={{
        borderRadius: 1,
        fontWeight: 'bold',
        textTransform: "none",
        fontSize: { xs: "12px", sm: "14px", md: "16px" },
        ...sx, // Spread additional styles
      }}
    >
      {label}
    </Button>
  );
};

// Setting default props
CustomBtn.defaultProps = {
  variant: "contained",
  size: "medium",
  sx: {},
  onClick: () => console.log("Button clicked"),
  type: "submit",
};

export default CustomBtn;