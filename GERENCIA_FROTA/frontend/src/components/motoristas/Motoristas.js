
import React, {Component, Fragment} from 'react';

import '../motoristas/Motoristas.css';
import 'materialize-css/dist/css/materialize.min.css';

import Tabelamotorista from './Tabela';
import Formmotorista from './Formulario';
import Headerveiculos from '../veiculos/Header';
import ApiService from '../ApiService';

//import Tabelaviagem from './components/viagens/Tabela';
//import Formviagens from './components/viagens/Formulario';

//import Tabela3 from './components/motoristas/Tabela';
//import Fomr3 from './components/motoristas/Formulario';

class Motoristas extends Component {


  state = {
     motoristas : [
      {
        id_motorista:'3',
        nome_motorista:'Pedro Henrique',
        rg_motorista:'1452578',
        email:'pedro@gmail.com',
        datanasc:'10-05-1989',
        telefone:'133232-3565',
        cpf:'59958956896',
        cnh:'798798987'
      },
      {
        id_motorista:'2',
        nome_motorista:'João Augusto',
        rg_motorista:'1452578',
        email:'algusto@gmail.com',
        datanasc:'10-05-1989',
        telefone:'133232-3565',
        cpf:'59958956896',
        cnh:'798798987'
      },
      {
        id_motorista:'1',
        nome_motorista:'Carlos Roberto',
        rg_motorista:'1452578',
        email:'carlos@gmail.com',
        datanasc:'10-05-1989',
        telefone:'133232-3565',
        cpf:'59958956896',
        cnh:'798798987'
      }
    ],
  }

  escutadorSubmit = motorista => {
    this.setState({motoristas:[...this.state.motoristas, motorista] })
  }

  removeVeiculo =  (index) => {
    const {motoristas} = this.state;
    
    this.setState(
      {
        motoristas : motoristas.filter((motorista, posAtual) => {
          console.log(index, posAtual);
          return posAtual !== index;
        }),
      }
    );
  }

  removeViagem =  (index) => {
    const {viagens} = this.state;
    
    this.setState(
      {
        viagens : viagens.filter((viagens, posAtual) => {
          console.log(index, posAtual);
          return posAtual !== index;
        }),
      }
    );
  }

  removeMotorista =  (index) => {
    const {motoristas} = this.state;
    
    this.setState(
      {
        motoristas : motoristas.filter((motoristas, posAtual) => {
          console.log(index, posAtual);
          return posAtual !== index;
        }),
      }
    );
  }



  render () {

    const motoristas = ApiService.ListaMotoristas();
    console.log(motoristas);

    return (     
      <Fragment>
         <Headerveiculos />
          <div className="container mb-10">
            <Tabelamotorista motoristas = { this.state.motoristas } removeMotorista = {this.removeMotorista}/>
            
            <Formmotorista escutadorSubmit={this.escutadorSubmit}/>
            
        </div>        
      </Fragment>      
    );
  }
}



export default Motoristas;