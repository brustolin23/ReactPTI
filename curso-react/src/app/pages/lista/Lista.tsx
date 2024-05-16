import { useCallback, useState } from "react";



interface IListItem{
    title:string;
    isSelected:boolean;
}



export const Lista = () =>{
    const [lista, setLista] = useState<IListItem[]>([]);

    const handleInputKeyDown :React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) =>{
        if (e.key==='Enter'){
            if(e.currentTarget.value.trim().length === 0) return;
            const value = e.currentTarget.value.trim();
            e.currentTarget.value = '';
            setLista((oldLista)=>{
                return [...oldLista,{
                    title: value,
                    isSelected:false
                }];
            })
        }
    },[])

    return (
        <div>
            <p>Lista</p>
            <input onKeyDown={handleInputKeyDown}></input>
            <p>{lista.filter((listItem) => listItem.isSelected).length}</p>
            <ul>
                {lista.map((ListItem)=> {return <li key={ListItem.title}>
                    <input type="checkbox" 
                    onChange={()=>{
                        setLista(oldLista => {
                            return oldLista.map(oldListItem =>{
                                const newIsSelected = oldListItem.title === ListItem.title? !oldListItem.isSelected:oldListItem.isSelected
                                return {
                                    ...oldListItem,
                                    isSelected: newIsSelected
                                };
                            });
                        })
                    }}>
                    </input>
                    {ListItem.title}
                    </li>})}
            </ul>
        </div>
    );
}