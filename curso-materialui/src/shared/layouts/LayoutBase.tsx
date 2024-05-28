import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseProps {
    children: React.ReactNode,
    titulo: string,

}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({children, titulo}) =>{
    const _theme = useTheme();
    const smDown = useMediaQuery(_theme.breakpoints.down('sm'));

    const {toggleDrawerOpen} = useDrawerContext();
    return(
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" height={_theme.spacing(12)} gap={1}>
                {smDown &&(
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography variant="h5">
                    {titulo}
                </Typography>
            </Box>
            <Box>
                Barra de ferramentas
            </Box>
            <Box>
            {children}
            </Box>
        </Box>
    );
}