import { useEffect, useState } from "react";

export const Login = () =>{
    //estados para armazenar os inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() =>{
        console.log("Olá mundo");
    },[]);
    const handleEntrar = () =>{
        console.log("Entrou");
    }

    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>
    );
}