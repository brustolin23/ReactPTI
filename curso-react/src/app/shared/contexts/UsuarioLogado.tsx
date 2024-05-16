import {createContext, useCallback} from "react";


interface IUsuarioLogadoContextData{
    nomeUsuario: string;
    logout: () => void;
}
interface IUsuarioLogadoProviderProps{
    children:React.ReactNode;
}
export const UsuarioLogadoContext = createContext <IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) =>{
    
    const handleLogout = useCallback(()=>{
        console.log("Logout Executado com sucesso")
    },[]);

    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: 'Ednaldo', logout:handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}