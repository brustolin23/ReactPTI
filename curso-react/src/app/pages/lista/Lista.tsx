import { useCallback, useState } from "react";

export const Lista = () =>{
    const [lista, setLista] = useState<string[]>(['Mu','Aldebaran','Saga','Máscara da Morte']);

    const handleInputKeyDown :React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) =>{
        if (e.key==='Enter'){
            if(e.currentTarget.value.trim().length === 0) return;
            const value = e.currentTarget.value.trim();
            e.currentTarget.value = '';
            setLista((oldLista)=>{
                return [...oldLista,value];
            })
        }
    },[])

    return (
        <div>
            <p>Lista</p>
            <input onKeyDown={handleInputKeyDown}></input>
            <ul>
                {lista.map((value, index)=> {return <li key={value}>{value}</li>})}
            </ul>
        </div>
    );
}