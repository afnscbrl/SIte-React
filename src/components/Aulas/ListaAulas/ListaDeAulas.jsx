import React, {Component} from 'react';
import CardAula from "../CardAula"



import "./estilo.css"


class  ListaDeAulas extends Component { 


    render() { 
        return (
            <ul className='lista-modulos'>
                {this.props.aulas.sort((a, b) => {

                    if(a.nome > b.nome) {
                        return 1
                    }
                    if(a.nome < b.nome) {
                        return -1
                    }
                    return 0
                }).map(
                    aula => <li className='lista-modulos_item' key={aula.id}>

                        <CardAula
                        showForm={this.props.showForm} 
                        apagarAula={this.props.apagarAula}
                        editItens={this.props.editItens}
                        nome = {aula.nome} modulo = {aula.modulo} 
                        data = {aula.data} duracao = {aula.duracao} 
                        id = {aula.id}/>

                        </li>
                )}
            </ul>
        )
    }
}
 
export default ListaDeAulas;