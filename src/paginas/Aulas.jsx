import React, {useState, useEffect} from 'react';
import ListaDeAulasHome from '../components/Aulas/ListaAulasHome';
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Fab} from '@mui/material'
import "../assets/App.css"
import "../assets/index.css"

let count = 0

const Aulas = () => {
   
  let navigate = useNavigate()
  const {id} = useParams()
  const[aulas, setAulas] = useState([])



  useEffect(() => {
    axios.get('https://sistema-curso.herokuapp.com/api/aulas/'+id, {
      headers: {
        'Accept': '*/*',
          'Content-Type': 'application/json'
        }
      }).then(res => (setAulas(res.data)))
  },[id])
  

  if(!aulas.length){
    count += 1
  } else {
    count = 0
  }
  if(count > 1) {
    navigate('/notfound') //add notfound
    count = 0
  }
  return (
    <section className='aulas-conteudo'>
      <main className='aulas-principal'>
        <ListaDeAulasHome
        aulas={aulas}/>
      </main>
      <section className='aulas-voltar'>
      
      <Fab color="primary" onClick={()=> navigate('/')}>
            <ArrowBackIcon/>
          </Fab>
      </section>
    </section>
    )

  
}
 
export default Aulas
