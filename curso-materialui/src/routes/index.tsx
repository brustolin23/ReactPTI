import { Button } from "@mui/material";
import { Routes, Route, Navigate} from "react-router-dom";
import { useAppThemContext } from "../shared/contexts/ThemeContext";


export const AppRoutes = () => {
    const {toggleTheme} = useAppThemContext();
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="secondary" onClick={toggleTheme}>Hello World</Button>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"}/>}/>
        </Routes>
    );
};