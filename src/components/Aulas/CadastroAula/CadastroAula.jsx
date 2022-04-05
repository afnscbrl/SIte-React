import React, {useState} from 'react';
import { Button, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import '@fontsource/roboto'
import "./estilo.css"
//import axios from 'axios'
//import { useParams } from 'react-router-dom';


function CadastroAula({enviarAula}) {
    //const {id} = useParams()
    const [aula, setAula] = useState({
        nome: '',
        modulo: '',
        data: '',
        duracao: '',
    })
    
    
    
    // useEffect(() => {
            // axios.get('http://localhost:3030/api/modulos/'+id, {
            //     headers: {
            //         'Accept': '*/*',
            //         'Content-Type': 'application/json',
            //         'Authorization': localStorage.getItem('Token')
                    
            //     }
            // }).then(res => aula.modulo = res.data.nome)
    // },[id]) 
    
    function criarAula(evento){
        evento.preventDefault()
        evento.stopPropagation()
        enviarAula(aula)

    }
    
    return (
        <section className='formC'>
            <Typography variant='h6' align='center'>Criar nova aula</Typography>
            <form className='form-cadastro' onSubmit={criarAula}>
                <TextField
                    id='nome' 
                    label='Nome'
                    variant='outlined'
                    margin='dense' 
                    size='small'
                    fullWidth
                    required = {true}
                    onChange={(event) => aula.nome = event.target.value}
                />
                    <TextField 
                    id='modulo' 
                    label='Módulo'
                    variant='outlined'  
                    margin='dense' 
                    size='small'
                    required = {true}
                    onChange={(event) => aula.modulo = event.target.value}
                />
                <TextField 
                    type='number'
                    id='horas'
                    margin='dense' 
                    label='Horas de aula'
                    size='small'
                    required = {true}
                    onChange={(event) => aula.duracao = event.target.value}
                />
                <TextField 
                    type='date'
                    id='horas'
                    margin='dense'
                    size='small' 
                    required = {true}
                    onChange={(event) => aula.data = event.target.value}
                />
                <Box
                    sx={{
                        margin: 1,
                        width: 200,
                    }}
                >
                    <Button type='submit' 
                        variant='contained' 
                        color='primary'
                        size='small'
                        fullWidth
                        startIcon={<AddCircleOutlineIcon />}>
                        Criar Aula
                    </Button>
                </Box>
            </form>
        </section>

    );
}
 

export default CadastroAula