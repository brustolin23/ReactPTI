import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";

interface IFerramentaDetalheProps{
    textoNovo?: string,
    mostrarNovo?: boolean,
    mostrarVoltar?: boolean,
    mostrarApagar?: boolean,
    mostrarSalvar?: boolean,
    mostrarSalvarVoltar?: boolean,
    existeSalvarVoltar?:boolean,
    existeNovo?:boolean,
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
    mostrarSalvarVoltar= true,
    mostrarVoltar= true,
    existeNovo=true,
    existeSalvarVoltar=true,
    }) =>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Box gap={1} marginX={1} padding={1} paddingX={1} display="flex" alignItems="center" height={theme.spacing(5)} component={Paper}>
                {mostrarSalvar &&(<Box display="flex" justifyContent="end">
                    <Button onClick={eventoSalvar} variant="contained" color="primary" disableElevation startIcon={<Icon>save</Icon>}>
                        <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden"> Salvar </Typography>
                    </Button>
                </Box>)}
                {!mostrarSalvar &&(<Skeleton width={110} height={60}/>)}
                {(mostrarSalvarVoltar && existeSalvarVoltar && !mdDown) && (<Box display="flex" justifyContent="end">
                    <Button onClick={eventoSalvarVoltar} variant="outlined" color="primary" disableElevation startIcon={<Icon>save</Icon>}>
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">Salvar e Voltar</Typography>
                    </Button>
                </Box>)}
                {(!mostrarSalvarVoltar && !mdDown) &&(<Skeleton width={180} height={60}/>)}
                {mostrarApagar && (<Box display="flex" justifyContent="end">
                    <Button onClick={eventoApagar} variant="outlined" color="primary" disableElevation startIcon={<Icon>delete</Icon>}>
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">Apagar</Typography>
                    </Button>
                </Box>)}
                {!mostrarApagar&&(<Skeleton width={110} height={60}/>)}
                {(mostrarNovo && existeNovo && !smDown) && (<Box display="flex" justifyContent="end">
                    <Button onClick={eventoNovo} variant="outlined" color="primary" disableElevation startIcon={<Icon>add</Icon>}>
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">{textoNovo}</Typography>
                    </Button>
                </Box>)}
                {(!mostrarNovo&& !smDown)&&(<Skeleton width={110} height={60}/>)}
                {((mostrarSalvarVoltar||mostrarApagar||mostrarNovo||mostrarSalvar)&&mostrarVoltar)&&(<Divider variant="middle" orientation="vertical"></Divider>)}
                {mostrarVoltar && (<Box display="flex" justifyContent="end">
                    <Button onClick={eventoVoltar} variant="outlined" color="primary" disableElevation startIcon={<Icon>arrow_back</Icon>}>
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">Voltar</Typography>
                    </Button>
                </Box>)}
                {!mostrarVoltar&&(<Skeleton width={110} height={60}/>)}
        </Box>
    );
}
