import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentaDetalheProps{
    textoBusca?: string,
    mostrarInputBusca?:boolean,
    mudarTextoBusca?: (novoTexto: string) => void,
    textoBotao?: string,
    mostrarBotao?: boolean,
    clicarBotao?: () => void
}

export const FerramentaDetalhe: React.FC<IFerramentaDetalheProps> = ({
    textoBusca = '', mostrarInputBusca = false, mudarTextoBusca,
    textoBotao = 'Novo', mostrarBotao = true, clicarBotao
    }) =>{
    const theme = useTheme();
    return(
        <Box gap={1} marginX={1} padding={1} paddingX={1} display="flex" alignItems="center" height={theme.spacing(5)} component={Paper}>
                <Box display="flex" justifyContent="end">
                    <Button variant="contained" color="primary" disableElevation startIcon={<Icon>save</Icon>}>
                        Salvar
                    </Button>
                </Box>
                <Box display="flex" justifyContent="end">
                    <Button variant="outlined" color="primary" disableElevation startIcon={<Icon>save</Icon>}>
                        Salvar e Voltar
                    </Button>
                </Box>
                <Box display="flex" justifyContent="end">
                    <Button variant="outlined" color="primary" disableElevation startIcon={<Icon>delete</Icon>}>
                        Apagar
                    </Button>
                </Box>
                <Box display="flex" justifyContent="end">
                    <Button variant="outlined" color="primary" disableElevation startIcon={<Icon>add</Icon>}>
                        Novo
                    </Button>
                </Box>
                <Divider variant="middle" orientation="vertical"></Divider>
                <Box display="flex" justifyContent="end">
                    <Button variant="outlined" color="primary" disableElevation startIcon={<Icon>arrow_back</Icon>}>
                        Voltar
                    </Button>
                </Box>
        </Box>
    );
}
