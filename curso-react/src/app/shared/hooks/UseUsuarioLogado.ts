
import { useContext } from "react";
import { UsuarioLogadoContext } from "../../shared/contexts";

export const useUsuarioLogado = () => {
    
    const usuarioLogadoContext = useContext(UsuarioLogadoContext);
    return usuarioLogadoContext;
}