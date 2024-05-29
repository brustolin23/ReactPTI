import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentaDetalheProps{
    textoNovo?: string,
    mostrarNovo?: boolean,
    mostrarVoltar?: boolean,
    mostrarApagar?: boolean,
    mostrarSalvar?: boolean,
    mostrarSalvarVoltar?: boolean,
    eventoNovo?: ()=>void,
    eventoVoltar?: ()=>void,
    eventoApagar?: ()=>void,
    eventoSalvar?: ()=>void,
    eventoSalvarVoltar?: ()=>void,

}

export const FerramentaDetalhe: React.FC<IFerramentaDetalheProps> = ({
    textoNovo = 'Novo',
    eventoApagar,
    eventoNovo,
    eventoSalvar,
    eventoSalvarVoltar,
    eventoVoltar,
    mostrarApagar= true,
    mostrarNovo= true,
    mostrarSalvar= true, 
    mostrarSalvarVoltar= false,
    mostrarVoltar= true
    }) =>{
    const theme = useTheme();
    return(
        <Box gap={1} marginX={1} padding={1} paddingX={1} display="flex" alignItems="center" height={theme.spacing(5)} component={Paper}>
                {mostrarSalvar &&(<Box display="flex" justifyContent="end">
                    <Button onClick={eventoSalvar} variant="contained" color="primary" disableElevation startIcon={<Icon>save</Icon>}>
                        Salvar
                    </Button>
                </Box>)}
                {mostrarSalvarVoltar && (<Box display="flex" justifyContent="end">
                    <Button onClick={eventoSalvarVoltar} variant="outlined" color="primary" disableElevation startIcon={<Icon>save</Icon>}>
                        Salvar e Voltar
                    </Button>
                </Box>)}
                {mostrarApagar && (<Box display="flex" justifyContent="end">
                    <Button onClick={eventoApagar} variant="outlined" color="primary" disableElevation startIcon={<Icon>delete</Icon>}>
                        Apagar
                    </Button>
                </Box>)}
                {mostrarNovo && (<Box display="flex" justifyContent="end">
                    <Button onClick={eventoNovo} variant="outlined" color="primary" disableElevation startIcon={<Icon>add</Icon>}>
                        {textoNovo}
                    </Button>
                </Box>)}
                <Divider variant="middle" orientation="vertical"></Divider>
                {mostrarVoltar && (<Box display="flex" justifyContent="end">
                    <Button onClick={eventoVoltar} variant="outlined" color="primary" disableElevation startIcon={<Icon>arrow_back</Icon>}>
                        Voltar
                    </Button>
                </Box>)}
        </Box>
    );
}
