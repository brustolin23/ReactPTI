import { BarraFerramentas } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";


export const Dashboard = () =>{
    return (
        <LayoutBase titulo="Dashboard" barraDeFerramentas={(<BarraFerramentas mostrarInputBusca/>)}>
            Teste
        </LayoutBase>
    );
}