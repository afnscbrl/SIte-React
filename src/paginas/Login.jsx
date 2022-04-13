import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import './Pages.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IsAuth from '../context/isAuth';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto'



const Login = () => {
    const [nome, setNome] = useState()
    const [pass, setPass] = useState()
    const [erros, setErros] = useState({erro: false, text: ''})
    const navigate = useNavigate()
    const [auth, setAuth] = useContext(IsAuth)


    const nomeInput = (evento) => {
        evento.stopPropagation()
        setNome(evento.target.value)
    }

    const passInput = (evento) =>{
        evento.stopPropagation()
        setPass(evento.target.value)
    }



    const loginInput = async (evento) =>{
            evento.preventDefault()
            evento.stopPropagation()

        const usuario = {nome: nome, senha: pass}


        const loginResponse = await axios.post('https://sistema-curso.herokuapp.com/api/users/login/', JSON.stringify(usuario), {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            }
            }).then(res => res).catch(setErros({erro: true, text: 'Usuário ou senha inválidos'}))
            if(loginResponse.status === 202) {
                localStorage.setItem('User', nome)
                const token = loginResponse.headers['authorization']
                localStorage.setItem('Token', token)
                setAuth(nome)
                navigate('/modulosadm')
            }

        }



    return (

        <Container maxWidth='sm' className="loginPage">
            <Typography variant='h5' align='center'>LOGIN</Typography>
            <form className='loginPage-form' onSubmit={loginInput}>
                <TextField 
                    onChange={nomeInput}
                    id='nome' 
                    label='Nome'
                    variant='outlined' 
                    margin='normal' 
                    fullWidth
                />
                <TextField 
                    onChange={passInput}
                    error ={erros.erro}
                    helperText={erros.text}
                    id='senha' 
                    type='password' 
                    label='Senha' 
                    variant='outlined' 
                    margin='normal' 
                    fullWidth
                />
                <section className='loginPage-form_buttons'>
                    <Link className='loginPage_registrar' to={'/registrar'}>
                        <Button variant='text' fullWidth>
                        Registrar
                        </Button>
                    </Link>
                    <Button type='submit' variant='contained' color='primary'>
                        Login
                    </Button>
                </section>
            </form>
        </Container>
           
    )
}

export default Login
