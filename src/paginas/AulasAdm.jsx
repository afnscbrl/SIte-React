import React, {Component} from 'react';
import ListaDeAulas from '../components/Aulas/ListaAulas';
import CadastroAula from '../components/Aulas/CadastroAula';
import FormEditaAula from '../components/Aulas/FormEditaAula';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Fab} from '@mui/material'
import axios from 'axios'
import {Link} from 'react-router-dom'
 
import "../assets/App.css"
import "../assets/index.css"


class PageAulas extends Component {
  constructor(props){
    super(props)
    this.state = {  
      aulas:[],
      itens: [],
      form: ""
    } 
  }
  
  
  componentDidMount() {
    const url = new URL(window.location.href);
    const urlId = url.pathname.replace(/[^\d]+/g, '');
    axios.get('http://localhost:3030/api/aulas/'+urlId, {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
            
        }
    }).then(res => {
      this.setState({aulas: res.data})
    })
    this.setState({form:false})
}

async atualizaAulas() {
  const url = new URL(window.location.href);
  const urlId = url.pathname.replace(/[^\d]+/g, '');
  const novoArrayAulas = await axios.get('http://localhost:3030/api/aulas/'+urlId, {
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
  }).then(res => res.data)
  const novoEstado = {
    aulas: novoArrayAulas
  }

  this.setState(novoEstado)
}

async criarAula(aula) {
  console.log(aula)
  // const novaAula = {aula, modulo, data, duracao}
  await axios.post('http://localhost:3030/api/aulas/', aula, {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Token')
    }
  }).then(res => console.log(res.status)).catch(err => alert(err))
  // condicional de acordo com a res.status
  this.atualizaAulas()

}

async deleteAula(id) {
  await axios.delete('http://localhost:3030/api/aulas/'+id, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('Token')
      }
    }).then(res => console.log(res.status)).catch(err => alert(err))
  // condicional de acordo com a res.status
  this.atualizaAulas()

}

async editarAulas(id, nome, modulo, data, duracao) {
  const aulaEditada = {nome, modulo, data, duracao}
  await axios.put('http://localhost:3030/api/aulas/'+id, aulaEditada, {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Token')
    }
  }).then(res => console.log(res.status)).catch(err => alert(err))
  // condicional de acordo com a res.status
  this.atualizaAulas()
}

showForm(bool) {
  this.setState({form: bool})
  //console.log("state form", this.setState.form)
}

editItens(id, nome, modulo, data, duracao) {
  this.setState({itens: [id, nome, modulo, data, duracao]})

}

componentDidUpdate(){
  this.atualizaAulas()
}

render() {
    return (
      <section className='conteudo-aulasadm'>

        <main className='principal'>
          <section className='forms-aulas'>
            <CadastroAula enviarAula={this.criarAula.bind(this)}/>
            <FormEditaAula
              editarAula={this.editarAulas.bind(this)} 
              showForm={this.showForm.bind(this)}
              form={this.state.form}
              itens={this.state.itens}>
            </FormEditaAula>
          </section>
          <ListaDeAulas
            editItens={this.editItens.bind(this)}
            showForm={this.showForm.bind(this)}
            apagarAula={this.deleteAula.bind(this)}
            aulas={this.state.aulas}/>
        </main>
        <Link to='/modulosadm' className='aulasAdm-voltar'>
          <Fab color="primary">
            <ArrowBackIcon/>
          </Fab>
        </Link>
    </section>
      )
}

  
}
 
export default PageAulas;
