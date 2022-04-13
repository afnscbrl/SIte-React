import axios from 'axios';
import React, {useContext} from 'react';
import IsAuth from '../context/isAuth';
import {Link} from 'react-router-dom'
import {Fab} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import '../assets/App.css'

const Cabecalho = () => {

    const [auth, setAuth] = useContext(IsAuth)
    

    const deslogar = () => {
        axios.get('https://sistema-curso.herokuapp.com/api/users/logout', {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('Token')
            }
          })
        localStorage.removeItem('User')
        localStorage.removeItem('Token')
        setAuth('')


    }

    if(!auth) {
        return (

                <div className="Cabecalho">
                    <h1 className="Titulo"></h1>
                    <section className='cabecalho-butoes'>
                        <Link to='/'>
                            <Fab sx={{m: 1}} size='small' color='primary'>
                                <HomeIcon/>
                            </Fab>
                        </Link>
                        <Link to={'/Login'}>
                            <Fab sx={{m: 1, marginRight: 3 }} size='small' color='primary'>
                                <LoginIcon/>
                            </Fab>
                        </Link>
                    </section>
                </div>
        )

    } else {
        return (
            <div className="Cabecalho">
                <h1 className="Titulo"></h1>
                <section className='cabecalho-butoes'>
                    <Link to='/'>
                        <Fab sx={{m: 1}} size='small' color='primary'>
                            <HomeIcon/>
                        </Fab>
                    </Link>
                    <Link to='/modulosadm'>
                        <Fab sx={{m: 1}} size='small' color='secondary'>
                            <SettingsIcon/>
                        </Fab>
                    </Link>
                    <Link to={'/'}>
                        <Fab sx={{m: 1, marginRight: 3 }} size='small' color='secondary' onClick={deslogar}>
                        <LogoutIcon/>
                        </Fab>
                    </Link>
                </section>
            </div>
        )

    }

}

export default Cabecalho