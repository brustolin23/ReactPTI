import { Button } from "@mui/material";
import { Routes, Route, Navigate} from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";


export const AppRoutes = () => {
    const {toggleDrawerOpen, setDrawerOption} = useDrawerContext();
    useEffect(()=>{
        setDrawerOption([
            {
                label: "Página Inicial",
                icon: "home",
                route:"pagina-inicial"
            },
            {
                label: "Ednaldo",
                icon: "abc",
                route:"pagina-inicial"
            }
        ])
    });
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="secondary" onClick={toggleDrawerOpen}>Hello World</Button>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"}/>}/>
        </Routes>
    );
};