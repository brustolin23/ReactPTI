import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const Login = () =>{
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    //estados para armazenar os inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() =>{
        console.log("Olá mundo");
    },[]);
    const handleEntrar = useCallback(() =>{
        console.log("Entrou");
        console.log(email);
        if (inputEmailRef.current!=null) {
            inputEmailRef.current.focus();
        }
    },[email]);

    const emailLength = useMemo(() =>{
        return email.length;
    }, [email.length]);

    return (
        <div>
            <form>
                <p>Quantidade de caracteres de email é {emailLength}</p>
                <InputLogin type="Text" label="Email" value={email} onChange={e => setEmail(e)} onPressEnter={() => inputPasswordRef.current?.focus()}></InputLogin>
                <InputLogin ref={inputPasswordRef} type="password" label="Senha" value={password} onChange={e => setPassword(e)} onPressEnter={() => null}></InputLogin>
                <ButtonLogin type="button" onClick={handleEntrar}>Entrar</ButtonLogin>
            </form>
        </div>
    );
}