import styled from "styled-components";
import { Button } from "@mui/material";


export const StyledButton = styled(Button)(
  ({ background, fontSize, $variant }) => ({
    "&.MuiButton-root": {
      backgroundColor: background || "yellow",
      fontSize: fontSize,
      width: "6rem",
      height: "3rem",
      margin: "1rem",
    },
    
  })
);
