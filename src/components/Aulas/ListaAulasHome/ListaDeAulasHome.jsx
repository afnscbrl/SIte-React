import React, {Component} from 'react';
import CardAulasHome from "../CardAulaHome"



import "./estilo.css"


class  ListaDeAulasHome extends Component { 
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

                        <CardAulasHome
                        nome = {aula.nome} modulo = {aula.modulo} 
                        data = {aula.data} duracao = {aula.duracao} 
                        id = {aula.id}/>
                        </li>
                )}
            </ul>
        )
    }
}
 
export default ListaDeAulasHome;