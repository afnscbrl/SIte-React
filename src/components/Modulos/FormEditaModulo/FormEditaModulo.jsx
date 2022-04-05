import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, {Component} from 'react';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "./estilo.css"

class FormEditaModulo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nome: "",
            categoria: ""
        }
        this.nome = ""
        this.categoria = ""
    }

    _handleMudancaNome(evento){
        evento.stopPropagation()
        this.nome = evento.target.value
        this.setState({
            id: this.props.itens[0],
            nome: this.nome})

    }
    
    _handleMudancaCategoria(evento){
        evento.stopPropagation()
        this.categoria = evento.target.value
        this.setState({categoria: this.categoria})

    }
    
    _editarModulo(evento){
        evento.preventDefault()
        evento.stopPropagation()
        //this.props.showForm(false)
        this.props.editarModulo(this.props.itens[0], 
            this.state.nome, this.state.categoria)
            
        }
        
    componentDidUpdate() {
        if (this.props.itens[0] !== this.state.id) {
            this.setState({
                id: this.props.itens[0],
                nome: this.props.itens[1],
                categoria: this.props.itens[2]
            })
        }
        
    }
        
        
    render() {
        return (
            <section>
            {this.props.form ?
                <section className='formE'>                        
                    <Typography variant='h6' align='center'>Editar: {this.props.itens[1]}</Typography>
                    <form className='form-edita' onSubmit={this._editarModulo.bind(this)}>
                        <TextField 
                            id='nome' 
                            label='Nome'
                            variant='outlined'
                            margin='dense' 
                            size='small'
                            fullWidth
                            required = {true}
                            onChange={this._handleMudancaNome
                                .bind(this)}
                                />
                        <Select
                            id="Categoria"
                            label="Categoria"
                            placeholder='Categoria'
                            variant='outlined'
                            defaultValue={this.props.itens[2]}
                            size='small'
                            fullWidth
                            required = {true}
                            onChange={this._handleMudancaCategoria
                                .bind(this)}>
                            <MenuItem value={'Front-End'}>Front-End</MenuItem>
                            <MenuItem value={'Back-End'}>Back-End</MenuItem>
                        </Select>
                        <Box sx={{ margin: 1, width: 200, }}>
                            <Button type='submit' 
                                variant='contained' 
                                color='primary'
                                size='small'
                                fullWidth
                                startIcon={<EditAttributesIcon />}>
                                Editar Aula
                            </Button>
                        </Box>
                    </form>
                </section> 
                :
                <>

                </>
            } 
            </section>
            );
    }
}
 

export default FormEditaModulo