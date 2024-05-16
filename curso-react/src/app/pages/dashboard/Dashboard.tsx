import {  useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";


export const Dashboard = () => {

    
    const { nomeUsuario, logout } = useUsuarioLogado();

    const countRef = useRef({counter: 0});
    return (
        <div>
        <p>Dashboard</p>
        <p>{nomeUsuario}</p>
        <p>Contador: {countRef.current.counter}</p>
        <button onClick={() => countRef.current.counter++}>Count</button>
        <button onClick={logout}>Log</button>
        <p>
            <Link to="/entrar" relative="path"> Login </Link>
        </p>
        </div>
    );
}
