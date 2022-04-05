import React, {Component} from 'react';
import DeleteAula from '../DeleteAula/DeleteAula';
import EditaAula from '../EditaAula/EditaAula';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Typography} from '@mui/material';

import "./estilo.css"

class CardAula extends Component {
    
    render() { 
        return (
            <Card variant='outlined' sx={{ 
                    borderColor: 'primary.main', 
                    borderRadius: 2,
                    minWidth: 200,
                    borderTop: 10,
                    borderTopColor: 'primary.main'
                    }}>
                <CardContent>
                    <Typography variant='h6' align='left'>Aula: {this.props.nome}</Typography>
                    <Typography variant="body2">
                        Modulo: {this.props.modulo}<br/>
                        Data: {this.props.data}<br/>
                        Duração: {this.props.duracao}<br/>
                    </Typography>
                    <CardActions sx={{flexDirection: 'column'}}>
                        <section className='card-modulo_buttonUpdate'>
                            <EditaAula id = {this.props.id} 
                            nome = {this.props.nome}
                            categoria = {this.props.categoria}
                            editItens={this.props.editItens}
                            showForm={this.props.showForm}></EditaAula>
                            <DeleteAula nome = {this.props.id} apagarAula={this.props.apagarAula}></DeleteAula>
                        </section>
                    </CardActions> 
                </CardContent>  
            </Card>
        );
    }
}
 
export default CardAula