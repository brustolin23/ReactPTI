import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary:{
            main: blue[400],
            dark: blue[900],
            light: blue[200],
            contrastText: '#ffffff'
        },
        secondary: {
            main: purple[400],
            dark: purple[900],
            light: purple[200],
            contrastText: '#ffffff'
        },
        background: {
            default: '#f0f0f0',
            paper: '#ffffff'
        }
    }
});