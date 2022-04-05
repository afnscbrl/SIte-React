import React, {Component} from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import './estilo.css'

class EditaAula extends Component {

    click() {
        this.props.showForm(true)
        this.props.editItens(this.props.id, this.props.nome, this.props.data, this.props.categoria)
    }

    render() { 
        return (
            <Fab color="primary" size='small' sx={{ margin: 1 }} onClick={this.click.bind(this)}>
                <EditIcon/>
            </Fab>
        );
    }
}
 
export default EditaAula;