import React, {useState} from 'react';
import { Button, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '@fontsource/roboto'
import "./estilo.css"

function CadastroModulo({enviarModulo}) {
    const[modulo, setModulo] = useState({
        nome: '',
        categoria: ''
    })

    function criarModulo(evento){
        evento.preventDefault()
        evento.stopPropagation()
        enviarModulo(modulo)

    }



    return (
        <section className='formC'>
            <Typography variant='h6' align='center'>Criar novo modulo</Typography>
            <form className='form-cadastro' onSubmit={criarModulo}>
            <TextField
                    id='nome' 
                    label='Nome'
                    variant='outlined'
                    margin='dense' 
                    size='small'
                    fullWidth
                    required = {true}
                    onChange={(event) => modulo.nome = event.target.value}
                />
                <Select
                    id="Categoria"
                    label="Categoria"
                    variant='outlined'
                    size='small'
                    fullWidth
                    required = {true}
                    onChange={(event) => modulo.categoria = event.target.value}
                    >
                    <MenuItem value={'Front-End'}>Front-End</MenuItem>
                    <MenuItem value={'Back-End'}>Back-End</MenuItem>
                </Select>
                <Box sx={{ margin: 1, width: 200,}}>
                    <Button type='submit' 
                        variant='contained' 
                        color='primary'
                        size='small'
                        fullWidth
                        startIcon={<AddCircleOutlineIcon />}>
                        Criar Módulo
                    </Button>
                </Box>
            </form>
        </section>

    );
}
 

export default CadastroModulo