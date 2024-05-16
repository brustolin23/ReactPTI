import {createContext, useCallback, useEffect, useState} from "react";


interface IUsuarioLogadoContextData{
    nomeUsuario: string;
    logout: () => void;
}
interface IUsuarioLogadoProviderProps{
    children:React.ReactNode;
}
export const UsuarioLogadoContext = createContext <IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) =>{
    const [nome, setNome] = useState('');
    useEffect(() =>{
        setTimeout(()=>{
            setNome("Ednaldo")
        },300)
    })
    const handleLogout = useCallback(()=>{
        console.log("Logout Executado com sucesso")
    },[]);

    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: nome, logout:handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}