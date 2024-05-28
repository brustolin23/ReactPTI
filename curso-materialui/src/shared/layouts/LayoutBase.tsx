import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseProps {
    children: React.ReactNode,
    titulo: string,
    barraDeFerramentas?: React.ReactNode

}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({children, titulo, barraDeFerramentas}) =>{
    const _theme = useTheme();
    const smDown = useMediaQuery(_theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(_theme.breakpoints.down('md'));

    const {toggleDrawerOpen} = useDrawerContext();
    return(
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" height={_theme.spacing(smDown ? 6 : mdDown ? 9 : 12)} gap={1}>
                {smDown &&(
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography variant={smDown ? "h5": mdDown ? "h4":"h3"} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                    {titulo}
                </Typography>
            </Box>
            {barraDeFerramentas &&(<Box>
                {barraDeFerramentas}
            </Box>)}
            <Box flex={1} overflow="auto">
            {children}
            </Box>
        </Box>
    );
}