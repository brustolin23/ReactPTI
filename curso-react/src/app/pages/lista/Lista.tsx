import { useCallback, useEffect, useState } from "react";
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/TarefasService";
import { ErrorException } from "../../shared/services/api/ErrorException";





export const Lista = () =>{
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(()=>{
        TarefasService.getAll().then((result)=>{
            if (result instanceof ErrorException) {
                alert(result.message);
            } else {
                setLista(result);
            }
        });
    },[]);

    const handleInputKeyDown :React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) =>{
        if (e.key==='Enter'){
            if(e.currentTarget.value.trim().length === 0) return;
            const value = e.currentTarget.value.trim();
            e.currentTarget.value = '';
            TarefasService.create({
                title: value,
                isCompleted:false
            }).then((result)=>{
                if (result instanceof ErrorException) {
                    alert(result.message);
                } else {
                    setLista((oldLista)=> {return [...oldLista,result]});
                }
            })
            
        }
    },[])

    const handleOnChange = useCallback((id: string) =>{
        const tarefaUpdate = lista.find((tarefa)=>tarefa.id === id);
        if (tarefaUpdate===undefined) return;
        TarefasService.updateById(id, {
            ...tarefaUpdate,
            isCompleted: !tarefaUpdate.isCompleted
        }).then((result)=>{
            if (result instanceof ErrorException) {
                alert(result.message);
            } else {
                setLista(oldLista => {
                    return oldLista.map(oldListItem =>{
                        if (oldListItem.id===id) return result
                        return oldListItem
                    });
                })
            }
        })
    },[lista])

    return (
        <div>
            <p>Lista</p>
            <input onKeyDown={handleInputKeyDown}></input>
            <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>
            <ul>
                {lista.map((ListItem)=> {return <li key={ListItem.id}>
                    <input type="checkbox"
                    checked={ListItem.isCompleted}
                    onChange={()=>{
                        handleOnChange(ListItem.id);
                    }} 
                    /*onChange={()=>{
                        setLista(oldLista => {
                            return oldLista.map(oldListItem =>{
                                const newIsSelected = oldListItem.title === ListItem.title? !oldListItem.isCompleted:oldListItem.isCompleted
                                return {
                                    TarefasService.updateById(oldListItem.id,[...oldListItem, newIsSelected]),
                                };
                            });
                        })
                    }}*/>
                    </input>
                    {ListItem.title}
                    </li>})}
            </ul>
        </div>
    );
}