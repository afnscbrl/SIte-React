import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Typography, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "./estilo.css"

class CardModuloHome extends Component {
    
    render() { 
        return (
            <Card variant='outlined' sx={{ 
                borderColor: 'primary.main', 
                borderRadius: 2,
                borderTop: 10,
                borderTopColor: 'primary.main',
                minWidth: 200
                }}>
                <CardContent>
                    <Typography variant='h6' align='left'>Modulo: {this.props.nome}</Typography>
                    <Typography variant="body2">
                        Categoria: {this.props.categoria} <br/>
                        Total de aulas: {this.props.totalAulas} <br/>
                        Total de horas: {this.props.totalHoras} <br/>
                    </Typography>
                    <CardActions sx={{flexDirection: 'column'}}>
                        <Link to={`/aulas/${this.props.id}`}>
                            <Fab variant='extended'  sx={{ margin: 1 }} color='primary'>
                                <AddIcon/>
                            </Fab>
                        </Link>
                    </CardActions>
                </CardContent>
            </Card>
        );
    }
}
 
export default CardModuloHome