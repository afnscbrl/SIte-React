import React, {Component} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Typography} from '@mui/material';
import "./estilo.css"

class CardAulaHome extends Component {
    
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
                </CardContent>
            </Card>
        );
    }
}
 
export default CardAulaHome