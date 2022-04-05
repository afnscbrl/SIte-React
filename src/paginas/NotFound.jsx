import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Fab} from '@mui/material'
import {Link} from 'react-router-dom'


import './Pages.css'

const NaoEncontrado404 = () => {

    return (
        <section className="notFound">
            <section className='notFound-voltar'>
            <Link to='/'>
                <Fab color="primary" sx={{m:2}}>
                    <ArrowBackIcon/>
                </Fab>
            </Link>
            </section>
            <h1 className='notFound-titulo'> PÁGINA NÃO ENCONTRADA </h1>
        </section>
    )
}

export default NaoEncontrado404

