import React from 'react';
import './Pages.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';


const Registrar = () => {
    const [nome, setNome] = useState()
    const [pass, setPass] = useState()
    //const [login, setLogin] = useState()
    const navigate = useNavigate()

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

        console.log(usuario)

        const loginResponse = await axios.post('http://localhost:3030/api/users/registro/', usuario, {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
            }).then(res => res.status)
            if(loginResponse === 201) {
                alert('registrado com sucesso')
                navigate('/Login')

            } else {
                alert('Erro no registro')
            }
        }



    return (

        <Container maxWidth='sm' className="loginPage">
            <Typography variant='h5' align='center'>REGISTRAR</Typography>
            <form className='loginPage-form' onSubmit={loginInput}>
                <TextField 
                    required
                    onChange={nomeInput}
                    id='nome' 
                    label='Nome'
                    variant='outlined' 
                    margin='normal' 
                    fullWidth
                />
                <TextField 
                    required
                    onChange={passInput}
                    id='senha' 
                    type='password' 
                    label='Senha' 
                    variant='outlined' 
                    margin='normal' 
                    fullWidth
                />
                <section className='loginPage-form_buttons'>

                    <Button type='submit' variant='contained' color='primary'>
                        Registrar
                    </Button>

                </section>
            </form>
        </Container>
    )
}

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.nome = ""
//         this.pass = ""
//         this.state = {
//             login: false
//         }
//     }

//     _handleLoginNome(evento){
//         evento.stopPropagation()
//         this.nome = evento.target.value
//         console.log(this.nome)
//     }

//     _handleLoginPass(evento){
//         evento.stopPropagation()
//         this.pass = evento.target.value
//         console.log(this.pass)
//     }

//     async _loginPost(evento){
//         evento.preventDefault()
//         evento.stopPropagation()
//         //this.props.Logar(this.nome, this.pass)
//         // this.setState({login: true})
//         // console.log('login:', this.state.login)
//         // if(this.state.login) {
//         //     return(
//         //     <Navigate to='/modulosadm'/>)
//         // }
//     const usuario = {nome: this.nome, senha: this.pass}

//     console.log(usuario)

//     const loginx = await axios.post('http://localhost:3030/api/users/login/', usuario, {
//         headers: {
//             'Accept': '*/*',
//             'Content-Type': 'application/json'
//         }
//         }).then(res => res.status)
//         console.log('status', typeof loginx)
//         if(loginx === 202) {
//             console.log('entrou no if')
//             this.setState({login: true})
//         }       
//     }

    
//     render() {
//         const {login} = this.state
//         console.log("render", login)
//         if(login) {
//             console.log(this.props)
//         }
//         return (

//             <section className="loginPage">
//                 <h3 className="loginPage-titulo">LOGIN</h3>
//                 <form className='loginPage-form' onSubmit={this._loginPost.bind(this)}>
//                     <p>Nome:</p>
//                     <input
//                         type='text'
//                         plaholder='Nome'
//                         className='loginPage-form_input'
//                         onChange={this._handleLoginNome.bind(this)}/>
//                     <p>Password:</p>
//                     <input
//                         type='password'
//                         className='loginPage-form_input'
//                         onChange={this._handleLoginPass.bind(this)}/>
//                     <section className='loginPage-form_buttons'>
//                         <Link className='loginPage_registrar' to={'/registar'}>
//                             Registrar
//                         </Link>
//                         <button className='loginPage-button_logar' onSubmit={this._loginPost.bind(this)}>
//                             Login
//                         </button>
//                     </section>
//                 </form>
//                 <Link to="/" className='homePage-login'>
//                     <button>
//                         Pagina Inicial
//                     </button>
//                 </Link>
//             </section>
//         )
//     }
// }

export default Registrar
