import { Avatar, Box, Divider, Drawer, Icon, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemLink{
    label: string,
    icon: string,
    route: string,
    onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IListItemLink> = ({label, icon, route, onClick}) =>{
    const navigate = useNavigate()

    const resolvedPath = useResolvedPath(route);
    const match = useMatch({path: resolvedPath.pathname, end: false});

    const handleClick = () =>{
        navigate(route)
        if (onClick) onClick()
    }

    return(
        
            <ListItemButton onClick={onClick} selected={!!match}>
                <ListItemIcon>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={label}></ListItemText>
            </ListItemButton>
    );
}

export const MenuLateral: React.FC<{children: React.ReactNode}> = ({children}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();
    return(
        <>
            <Drawer variant={!smDown ? "permanent" : "temporary"} open={isDrawerOpen} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(20)} display="flex" alignItems='center' justifyContent='center'>
                        <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12)}} src="data:image/webp;base64,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"></Avatar>
                    </Box>
                    <Divider/>
                    <Box flex={1}>
                    {drawerOptions.map(drawerOption=>(
                        <ListItemLink 
                        key={drawerOption.route}
                        onClick={smDown ? toggleDrawerOpen : undefined} 
                        icon={drawerOption.icon} 
                        route={drawerOption.route} 
                        label={drawerOption.label}
                        />
                    ))}
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={!smDown ? theme.spacing(28): 0} >
            {children}
            </Box>
        </>
    );
}