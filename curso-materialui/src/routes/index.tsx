import { Routes, Route, Navigate} from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard } from "../pages";


export const AppRoutes = () => {
    const {setDrawerOption} = useDrawerContext();
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
            <Route path="/pagina-inicial" element={<Dashboard/>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"}/>}/>
        </Routes>
    );
};