import React, {Component} from 'react';
import DeleteModulo from '../DeleteModulo/DeleteModulo';
import EditaModulo from '../EditaModulo/EditaModulo';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Typography, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import "./estilo.css"

class CardModulo extends Component {
    
    render() { 
        return (
            <Card variant='outlined' sx={{ 
                    borderColor: 'primary.main', 
                    borderRadius: 2,
                    borderTop: 10,
                    borderTopColor: 'primary.main'
                    }}>
                <CardContent>
                    <Typography variant='h6' align='left'>Modulo: {this.props.nome}</Typography>
                    <Typography variant="body2">
                        Categoria: {this.props.categoria} <br/>
                        Total de aulas: {this.props.totalAulas} <br/>
                        Total de horas: {this.props.totalHoras} <br/>
                    </Typography>
                    <CardActions>
                        <Link to={`/aulasadm/${this.props.id}`}>
                            <Fab color="primary" size='small' sx={{ margin: 1 }}>
                                <AddIcon/>
                            </Fab>
                        </Link>
                        <section className='card-modulo_buttonUpdate'>
                            <EditaModulo id = {this.props.id} 
                                nome = {this.props.nome}
                                categoria = {this.props.categoria}
                                editItens={this.props.editItens}
                                showForm={this.props.showForm}>
                            </EditaModulo>
                            <DeleteModulo nome = {this.props.id} apagarModulo={this.props.apagarModulo}></DeleteModulo>
                        </section>
                    </CardActions>
                </CardContent>
            </Card>
        );
    }
}
 
export default CardModulo