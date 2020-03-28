import React, {Component} from 'react';
import FormValidator from '../veiculos/Formvalidator';
import PopUp from './PopUp';

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
             campo:'id_motorista',
             metodo:'isInt',
             validoQuando: true,
             mensagem: 'Entre com um código válido'
            },
            {
             campo:'nome_motorista',
             metodo:'isEmpty',
             validoQuando: false,
             mensagem: 'Entre com um nome válido'
 
            },
            {
             campo:'rg_motorista',
             metodo:'isEmpty',
             validoQuando: false,
             mensagem: 'Entre com um fabricante válido'
 
            },
            {
             campo:'email',
             metodo:'isEmpty',
             validoQuando: false,
             mensagem: 'Entre com um cor válida'
 
            },
            {
             campo:'datanasc',
             metodo:'isInt',
             validoQuando: true,
             mensagem: 'Entre com um renavan válido'
 
            },
            {
             campo:'telefone',
             metodo:'isEmpty',
             validoQuando: false,
             mensagem: 'Entre com um placa válida'
            },
            {
             campo:'cpf',
             metodo:'isInt',
             validoQuando: true,
             mensagem: 'Entre com um ano válido'
            },
            {
            campo:'cnh',
            metodo:'isInt',
            validoQuando: true,
            mensagem: 'Entre com um ano válido'
           }
         ]);

        this.stateInicial = {
            id_motorista:'',
            nome_motorista:'',
            rg_motorista:'',
            email:'',
            datanasc:'',
            telefone:'',
            cpf:'',
            cnh:'',
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
            const { id_motorista, nome_motorista, rg_motorista, email, datanasc, telefone, cpf, cnh } = validacao;
            const campos = [ id_motorista, nome_motorista, rg_motorista, email, datanasc, telefone, cpf, cnh ];
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
    render(){
        const {
            id_motorista,
            nome_motorista,
            rg_motorista,
            email,
            datanasc,
            telefone,
            cpf,
            cnh
        } = this.state;

        return(
            <form>
                    <div className="row">
                        <div className="input-field col s4">
                            <label htmlFor="id_motorista" className="input-field">Cód.</label>
                            <input
                                id="id_motorista"
                                type="text"
                                name="id_motorista"
                                value={id_motorista}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="nome_motorista"className="input-field">Motorista</label>
                            <input
                                id="nome_motorista"
                                type="text"
                                name="nome_motorista"
                                value={nome_motorista}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="rg_motorista"className="input-field">RG </label>
                            <input
                                id="rg_motorista"
                                type="text"
                                name="rg_motorista"
                                value={rg_motorista}
                                onChange={this.escutadorInput}>

                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="email"className="input-field">E-mail </label>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="datanasc"className="input-field">Data de Nascimento</label>
                            <input
                                id="datanasc"
                                type="text"
                                name="datanasc"
                                value={datanasc}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>  
                        <div className="input-field col s4">
                            <label htmlFor="telefone"className="input-field">Telefone </label>
                            <input
                                id="telefone"
                                type="text"
                                name="telefone"
                                value={telefone}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="cpf"className="input-field">C P F </label>
                            <input
                                id="cpf"
                                type="text"
                                name="cpf"
                                value={cpf}
                                onChange={this.escutadorInput}>
                            </input>
                        </div> 
                        <div className="input-field col s4">
                            <label htmlFor="cnh"className="input-field">C N H </label>
                            <input
                                id="cnh"
                                type="text"
                                name="cnh"
                                value={cnh}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>                                        
                    </div>                
                    <button id="salvar" className ="btn" type="button" onClick={this.submitFormulario} > Salvar</button>
                </form>
        );
    }
}
export default Formulario;