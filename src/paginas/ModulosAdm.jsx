import React, {Component} from 'react';
import ListaDeModulos from '../components/Modulos/ListaModulos';
import CadastroModulo from '../components/Modulos/CadastroModulo';
import FormEditaModulo from '../components/Modulos/FormEditaModulo';
import axios from 'axios'

import "../assets/App.css"
import "../assets/index.css"


class PageModulos extends Component {
  constructor(){
    super()
    this.state = {  
      modulos:[],
      itens: [],
      form: ""
    } 
  }


componentDidMount() {
    axios.get('http://localhost:3030/api/modulos/', {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    }).then(res => {
      this.setState({modulos: res.data})
    })
    this.setState({form:false})
}

async atualizaModulos() {
  const novoArrayModulos = await axios.get('https://sistema-curso.herokuapp.com/api/modulos/', {
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'

    }
  }).then(res => {
    return res.data
  })
  const novoEstado = {
    modulos: novoArrayModulos
  }

  this.setState(novoEstado)
}

async criarModulo(modulo) {
  //const novoModulo = {nome, categoria}
  await axios.post('https://sistema-curso.herokuapp.com/api/modulos/', modulo, {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Token')
    }
  }).then(res => console.log(res.status)).catch(err => alert(err))
  // condicional de acordo com a res.status
  this.atualizaModulos()

}

async deleteModulo(id) {
  await axios.delete('https://sistema-curso.herokuapp.com/api/modulos/'+id, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('Token')
      }
    }).then(res => console.log(res.status)).catch(err => alert(err))
  // condicional de acordo com a res.status
  this.atualizaModulos()

}

async editarModulo(id, nome, categoria) {
  const moduloEditado = {nome, categoria}
  await axios.put('https://sistema-curso.herokuapp.com/api/modulos/'+id, moduloEditado, {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Token')
    }
  }).then(res => console.log(res.status)).catch(err => alert(err))
  // condicional de acordo com a res.status
  this.atualizaModulos()
}

showForm(bool) {
  this.setState({form: bool})
  //console.log("state form", this.setState.form)
}

editItens(id, nome, categoria) {
  this.setState({itens: [id, nome, categoria]})

}

render() {
    return (
      <section className='conteudo'>
      <section className='formularios'>
      <CadastroModulo enviarModulo={this.criarModulo.bind(this)}/>
      <FormEditaModulo
        editarModulo={this.editarModulo.bind(this)} 
        showForm={this.showForm.bind(this)}
        form={this.state.form}
        itens={this.state.itens}>
      </FormEditaModulo>
      </section>
      <main className='principal'>
      <ListaDeModulos
        editItens={this.editItens.bind(this)}
        showForm={this.showForm.bind(this)}
        apagarModulo={this.deleteModulo.bind(this)}
        modulos={this.state.modulos}/>
      </main>
    </section>
      )
}

  
}
 
export default PageModulos;
