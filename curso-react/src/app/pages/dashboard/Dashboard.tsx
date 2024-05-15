import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/contexts";


export const Dashboard = () => {

    const usuarioLogadoContext = useContext(UsuarioLogadoContext);

    const countRef = useRef({counter: 0});
    return (
        <div>
        <p>Dashboard</p>
        <p>{usuarioLogadoContext.nomeUsuario}</p>
        <p>Contador: {countRef.current.counter}</p>
        <button onClick={() => countRef.current.counter++}>Count</button>
        <button onClick={() => console.log(countRef.current.counter)}>Log</button>
        <p>
            <Link to="/entrar" relative="path"> Login </Link>
        </p>
        </div>
    );
}
