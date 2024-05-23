import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary:{
            main: blue[700],
            dark: blue[900],
            light: blue[400],
            contrastText: '#ffffff'
        },
        secondary: {
            main: purple[700],
            dark: purple[900],
            light: purple[400],
            contrastText: '#ffffff'
        },
        background: {
            default: '#303030',
            paper: '#202020'
        }
    }
});