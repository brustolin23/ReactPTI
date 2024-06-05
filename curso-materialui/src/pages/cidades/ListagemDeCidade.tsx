import { useSearchParams } from "react-router-dom"
import { FerramentaListagem } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"
import { useMemo } from "react";


export const ListagemDeCidade: React.FC = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    
    const busca = useMemo(()=>{
        return searchParams.get('busca')||'';
    }, [searchParams])

    return(
        <LayoutBase titulo="Cidades" barraDeFerramentas={
            <FerramentaListagem textoBusca={busca} mudarTextoBusca={texto => setSearchParams({busca:texto}, {replace: true})} mostrarInputBusca textoBotao="Nova cidade"></FerramentaListagem>
            }>
                teste
        </LayoutBase>
    )
}