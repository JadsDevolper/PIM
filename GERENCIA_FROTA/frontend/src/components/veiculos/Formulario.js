import  React, {Component} from 'react';
import FormValidator from './Formvalidator';
import PopUp from './PopUp';

 class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
           {
            campo:'id_veiculo',
            metodo:'isInt',
            validoQuando: true,
            mensagem: 'Entre com um código válido'
           },
           {
            campo:'nome_veiculo',
            metodo:'isEmpty',
            validoQuando: false,
            mensagem: 'Entre com um nome válido'

           },
           {
            campo:'fabricante',
            metodo:'isEmpty',
            validoQuando: false,
            mensagem: 'Entre com um fabricante válido'

           },
           {
            campo:'cor',
            metodo:'isEmpty',
            validoQuando: false,
            mensagem: 'Entre com um cor válida'

           },
           {
            campo:'renavan',
            metodo:'isInt',
            validoQuando: true,
            mensagem: 'Entre com um renavan válido'

           },
           {
            campo:'placa',
            metodo:'isEmpty',
            validoQuando: false,
            mensagem: 'Entre com um placa válida'
           },
           {
            campo:'ano',
            metodo:'isInt',
            validoQuando: true,
            mensagem: 'Entre com um ano válido'
           }
        ]);
        
        
        this.stateInicial = {
            id_veiculo:'',
            nome_veiculo:'',
            fabricante:'',
            cor:'',
            renavan:'',
            placa:'',
            ano:'',
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
            const { id_veiculo, nome_veiculo, fabricante, cor, renavan, placa, ano } = validacao;
            const campos = [ id_veiculo, nome_veiculo, fabricante, cor, renavan, placa, ano ];
            const camposInvalidos = campos.filter(elem =>{
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
                id_veiculo, 
                nome_veiculo, 
                fabricante, 
                cor, 
                renavan, 
                placa, 
                ano 
            } = this.state;

            return(
                <form>
                    <div className="row">
                        <div className="input-field col s4">
                            <label htmlFor="idveiculo" className="input-field">Cód.</label>
                            <input
                                id="id_veiculo"
                                type="text"
                                name="id_veiculo"
                                value={id_veiculo}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="noem_veiculo"className="input-field">Veículo</label>
                            <input
                                id="nome_veiculo"
                                type="text"
                                name="nome_veiculo"
                                value={nome_veiculo}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="fabricante"className="input-field">Fabricante</label>
                            <input
                                id="fabricante"
                                type="text"
                                name="fabricante"
                                value={fabricante}
                                onChange={this.escutadorInput}>

                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="cor"className="input-field">Cor</label>
                            <input
                                id="cor"
                                type="text"
                                name="cor"
                                value={cor}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="renavan"className="input-field">Renavan</label>
                            <input
                                id="renavan"
                                type="text"
                                name="renavan"
                                value={renavan}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="placa"className="input-field">Placa</label>
                            <input
                                id="placa"
                                type="text"
                                name="placa"
                                value={placa}
                                onChange={this.escutadorInput}>
                            </input>
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="ano"className="input-field">Ano</label>
                            <input
                                id="ano"
                                type="text"
                                name="ano"
                                value={ano}
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

