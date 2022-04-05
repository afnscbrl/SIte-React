import React, {Component} from 'react';
import CardModulo from "../CardModulo"



import "./estilo.css"


class  ListaDeModulos extends Component { 


    render() { 
        return (
            <ul className='lista-modulos'>
                {this.props.modulos.sort((a, b) => {

                    if(a.nome > b.nome) {
                        return 1
                    }
                    if(a.nome < b.nome) {
                        return -1
                    }
                    return 0
                }).map(
                    modulo => <li className='lista-modulos_item' key={modulo.id}>

                        <CardModulo
                        showForm={this.props.showForm} 
                        apagarModulo={this.props.apagarModulo}
                        editItens={this.props.editItens}
                        nome = {modulo.nome} categoria = {modulo.categoria} 
                        totalAulas = {modulo.totalAulas} totalHoras = {modulo.totalHoras} 
                        id = {modulo.id}/>

                        </li>
                )}
            </ul>
        )
    }
}
 
export default ListaDeModulos;