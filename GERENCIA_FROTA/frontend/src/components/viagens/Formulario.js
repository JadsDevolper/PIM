import React, {Component} from 'react';
import FormValidator from '../veiculos/Formvalidator';
import PopUp from './PopUp';

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
             campo:'id_viagem',
             metodo:'isInt',
             validoQuando: true,
             mensagem: 'Entre com um código válido'
            },
            {
             campo:'nome_viagem',
             metodo:'isInt',
             validoQuando: false,
             mensagem: 'Entre com uma viagem válida'
 
            },
            {
             campo:'destino_viagem',
             metodo:'isInt',
             validoQuando: false,
             mensagem: 'Entre com um destino válido'
 
            },
            {
             campo:'data_viagem',
             metodo:'isInt',
             validoQuando: true,
             mensagem: 'Entre com uma data válida'
 
            },
            {
             campo:'estatus_viagem',
             metodo:'isInt',
             validoQuando: false,
             mensagem: 'Entre com um status válido'
 
            }
         ]);

        this.stateInicial = {
            id_viagem:'',
            nome_viagem:'',
            destino_viagem:'',
            data_viagem:'',
            estatus_viagem: '',
            validacao: this.validador.valido()

        }
        this.state = this.stateInicial;
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);
        console.log(validacao)
        if (validacao.isValid) {
            this.props.escutadorSubmit(this.state);
            this.setState(this.stateInicial);
        }else{
            const { id_viagem, nome_viagem, destino_viagem, data_viagem, estatus_viagem } = validacao;
            const campos = [ id_viagem, nome_viagem, destino_viagem, data_viagem, estatus_viagem ];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
            });
        }
    }

    escutadorInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }
    render() {
        const {
            id_viagem,
            nome_viagem,
            destino_viagem,
            data_viagem,
            estatus_viagem
        } = this.state;

        return(
            <form>
                    <div className="row">
                        <div className="input-field col s4">
                            <label htmlFor="idviagem" className="input-field">Cód.</label>
                            <input
                                id="id_viagem"
                                type="text"
                                name="id_viagem"
                                value={id_viagem}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="nome_viagem"className="input-field">Viagem</label>
                            <input
                                id="nome_viagem"
                                type="text"
                                name="nome_viagem"
                                value={nome_viagem}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="destino_viagem"className="input-field">Destino</label>
                            <input
                                id="destino_viagem"
                                type="text"
                                name="destino_viagem"
                                value={destino_viagem}
                                onChange={this.escutadorInput}>

                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="data_viagem"className="input-field">Data</label>
                            <input
                                id="data_viagem"
                                type="text"
                                name="data_viagem"
                                value={data_viagem}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="estatus_viagem"className="input-field">Estatus</label>
                            <input
                                id="estatus_viagem"
                                type="text"
                                name="estatus_viagem"
                                value={estatus_viagem}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>                                           
                    </div>                
                    <button  id="salvar" className ="btn"type="button" onClick={this.submitFormulario} > Salvar</button>
                </form>
        );
    }
}
export default Formulario;