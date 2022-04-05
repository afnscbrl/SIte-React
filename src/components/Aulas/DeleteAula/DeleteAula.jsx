import React, {Component} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import './estilo.css'

class DeleteAula extends Component {

    click() {
        console.log(this.props.nome)
        this.props.apagarAula(this.props.nome)
    }

    render() { 
        return (
            <Fab color="primary" size='small' sx={{ margin: 1 }} onClick={this.click.bind(this)}>
                <DeleteIcon/>
            </Fab>
        );
    }
}
 
export default DeleteAula;