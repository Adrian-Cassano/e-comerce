import styled from "styled-components";
import { TextField } from "@mui/material";


export const StyledInput = styled(TextField)(
    ({ background, fontSize, $variant ,color}) => ({
      "&.MuiButton-root": {
        backgroundColor: background || "yellow",
        fontSize: fontSize,
        width: "6rem",
        height: "3rem",
        margin: "1rem",
        display:"flex",
        color: "white",
      },
      
    })
  );
