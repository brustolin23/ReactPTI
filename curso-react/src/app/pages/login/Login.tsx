import { useCallback, useEffect, useMemo, useState } from "react";

export const Login = () =>{
    //estados para armazenar os inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() =>{
        console.log("Olá mundo");
    },[]);
    const handleEntrar = useCallback(() =>{
        console.log("Entrou");
        console.log(email);
    },[email]);

    const emailLength = useMemo(() =>{
        return email.length;
    }, [email.length]);

    return (
        <div>
            <form>
                <p>Quantidade de caracteres de email é {emailLength}</p>
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