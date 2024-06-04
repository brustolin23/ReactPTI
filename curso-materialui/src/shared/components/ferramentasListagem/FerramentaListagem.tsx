import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import { Environment } from "../../environment";

interface IBarraFerramentasProps{
    textoBusca?: string,
    mostrarInputBusca?:boolean,
    mudarTextoBusca?: (novoTexto: string) => void,
    textoBotao?: string,
    mostrarBotao?: boolean,
    clicarBotao?: () => void
}

export const FerramentaListagem: React.FC<IBarraFerramentasProps> = ({
    textoBusca = '', mostrarInputBusca = false, mudarTextoBusca,
    textoBotao = 'Novo', mostrarBotao = true, clicarBotao
    }) =>{
    const theme = useTheme();
    return(
        <Box gap={1} marginX={1} padding={1} paddingX={1} display="flex" alignItems="center" height={theme.spacing(5)} component={Paper}>
            {mostrarInputBusca &&(
                <TextField value={textoBusca} onChange={(e) => mudarTextoBusca?.(e.target.value)} size="small" placeholder={Environment.INPUT_DE_BUSCA}></TextField>
            )}
            {mostrarBotao &&(
                <Box flex={1} display="flex" justifyContent="end"><Button variant="contained" color="primary" disableElevation endIcon={<Icon>add</Icon>}>{textoBotao}</Button></Box>
            )}
        </Box>
    );
}
