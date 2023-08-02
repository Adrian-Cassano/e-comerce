import styled from "styled-components";
import { Button } from "@mui/material";


export const StyledButton = styled(Button)(
  ({  fontSize, $variant }) => ({
    "&.MuiButton-root": {
      color:"white",
      fontSize: "20px",
      height: "3rem",
      marginLeft: "3rem",
      marginRight: "3rem",
      marginTop:"1rem",
      marginBottom:"1rem",
      borderLeft: "black 1px solid",
      borderRight: "black 1px solid",
    },
    
  })
);
