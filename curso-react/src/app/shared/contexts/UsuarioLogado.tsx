import { Children, createContext} from "react";


interface IUsuarioLogadoContextData{
    nomeUsuario: string;
}
interface IUsuarioLogadoProviderProps{
    children:React.ReactNode;
}
const UsuarioLogadoContext = createContext <IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) =>{
    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: 'Ednaldo'}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}