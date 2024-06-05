import { FerramentaDetalhe} from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";


export const Dashboard = () =>{
    return (
        <LayoutBase titulo="Dashboard" barraDeFerramentas={(<FerramentaDetalhe/>)}>
            Teste Dash
        </LayoutBase>
    );
}