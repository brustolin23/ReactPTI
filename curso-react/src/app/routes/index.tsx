import { Route, Routes as Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Dashboard, Login } from "../pages";
import { Navigate } from "react-router-dom";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" Component={Dashboard} />
                <Route path="/entrar" Component={Login} />
                <Route path="*" Component={()=> <Navigate to="/pagina-inicial" />} />
            </Switch>
        </BrowserRouter>
    );
}
