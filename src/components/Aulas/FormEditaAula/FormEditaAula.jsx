import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, {Component} from 'react';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import "./estilo.css"
import '@fontsource/roboto'

class FormEditaAula extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nome: '',
            modulo: '',
            data: '',
            duracao: ''
        }
        this.nome = ""
        this.modulo = ""
        this.data = ""
        this.duracao = ""
    }

    _handleMudancaNome(evento){
        evento.stopPropagation()
        this.nome = evento.target.value
        this.setState({
            id: this.props.itens[0],
            nome: this.nome
        })
    }

    _handleMudancaModulo(evento){
        evento.stopPropagation()
        this.modulo = evento.target.value
        this.setState({modulo: this.modulo})
    }

    _handleMudancaData(evento){
        evento.stopPropagation()
        this.data = evento.target.value
        this.setState({data: this.data})
        console.log(typeof(this.data))
    }

    _handleMudancaDuracao(evento){
        evento.stopPropagation()
        this.duracao = evento.target.value
        this.setState({duraca: this.duracao})
    }

    _editarAula(evento){
        evento.preventDefault()
        evento.stopPropagation()

        this.props.editarAula(this.props.itens[0], this.nome, this.modulo, this.data, this.duracao)

    }
        
    componentDidUpdate() {
        
        if (this.props.itens[0] !== this.state.id) {
            this.setState({
                id: this.props.itens[0],
                nome: this.props.itens[1],
                modulo: this.props.itens[2],
                data: this.props.itens[3],
                duracao: this.props.itens[4]
            })
        }
        
    }
        
        
    render() {
        return (
            <section>
            {this.props.form ?
                <section className='formE'>                        
                    <Typography variant='h6' align='center'>Editar: {this.props.itens[1]}</Typography>
                    <form className='form-edita' onSubmit={this._editarAula.bind(this)}>
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
                        <TextField
                            id='modulo' 
                            label='Módulo'
                            variant='outlined'  
                            value={this.props.itens[2]}
                            margin='dense' 
                            size='small'
                            required = {true}
                            onChange={this._handleMudancaModulo
                                .bind(this)}
                                />
                        <TextField
                            type='number'
                            id='horas'
                            margin='dense' 
                            label='Horas de aula'
                            size='small'
                            required = {true}
                            onChange={this._handleMudancaDuracao
                                .bind(this)}
                        />          
                        <TextField 
                            type='date'
                            id='horas'
                            margin='dense'
                            size='small' 
                            required = {true}
                        onChange={this._handleMudancaData
                            .bind(this)}
                        />        
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
 

export default FormEditaAula