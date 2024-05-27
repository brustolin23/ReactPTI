import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerOption{
    icon: string,
    label:string,
    route:string
}
interface IDrawerContextData{
    isDrawerOpen:boolean,
    drawerOptions: IDrawerOption[],
    toggleDrawerOpen: () => void,
    setDrawerOption: (newDrawerOptions: IDrawerOption[]) => void
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () =>{
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOption] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    },[])
    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[])=>{
        setDrawerOption(newDrawerOptions)
    },[])


    return(
        <DrawerContext.Provider value={{isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOption: handleSetDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    )
}