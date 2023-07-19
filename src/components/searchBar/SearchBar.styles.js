import { TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import styled from "styled-components";

export const Container = styled(TextField)(
    ({ background, fontSize, }) =>({
        "&.MuiButton-root": {
            backgroundColor : background || green,
            fontSize: fontSize,
            
        }
    })
)