import React, {Component} from 'react';
import ListaDeModulosHome from '../components/Modulos/ListaModulosHome';
import axios from 'axios'

import "../assets/App.css"
import "../assets/index.css"


class home extends Component {
  constructor(){
    super()
    this.state = {  
      modulos:[]
    } 
  }
  
  
  componentDidMount() {
    axios.get('https://sistema-curso.herokuapp.com/api/modulos/', {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.setState({modulos: res.data})
    })
    this.setState({form:false})
  }
  
  render() {
    return (
      <section className='conteudo-home'>
        <main className='principal'>
          <ListaDeModulosHome
          modulos={this.state.modulos}/>
        </main>
      </section>
      )
}

  
}
 
export default home;
