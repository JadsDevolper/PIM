
import React, {Component, Fragment} from 'react';

import '../motoristas/Motoristas.css';
import 'materialize-css/dist/css/materialize.min.css';

import Tabelaviagens from './Tabela';
import Formmviagens from './Formulario';
import Headerveiculos from '../veiculos/Header';
import ApiService from '../ApiService';

//import Tabelaviagem from './components/viagens/Tabela';
//import Formviagens from './components/viagens/Formulario';

//import Tabela3 from './components/motoristas/Tabela';
//import Fomr3 from './components/motoristas/Formulario';

class Viagens extends Component {


  state = {
     viagens : [
      {
        id_viagem:'1',
        nome_viagem:'Cliente desconectado',
        destino_viagem:'Rua Exeplo 11, Barro teste',
        data_viagem:'10-05-2019',
        estatus_viagem: 'Pendente'
      },
      {
        id_viagem:'2',
        nome_viagem:'Cliente aparelho queimado',
        destino_viagem:'Rua Exeplo 22, Barro teste',
        data_viagem:'10-05-2019',
        estatus_viagem: 'Concluída' 
      },
      {
        id_viagem:'3',
        nome_viagem:'Cliente sem internt',
        destino_viagem:'Rua Exeplo 33, Barro teste',
        data_viagem:'10-05-2019',
        estatus_viagem: 'Pendente'
      }
    ],
  }

  escutadorSubmit = viagem => {
    this.setState({viagens:[...this.state.viagens, viagem] })
  }

 /* removeVeiculo =  (index) => {
    const {viagens} = this.state;
    
    this.setState(
      {
        viagens : Viagens.filter((viagem, posAtual) => {
          console.log(index, posAtual);
          return posAtual !== index;
        }),
      }
    );
  }*/

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

    const viagens = ApiService.ListaViagens();
    console.log(viagens);

    return (     
      <Fragment>
         <Headerveiculos />
          <div className="container mb-10">
            <Tabelaviagens viagens = { this.state.viagens } removeViagem = {this.removeViagem}/>
            
            <Formmviagens escutadorSubmit={this.escutadorSubmit}/>
            
        </div>        
      </Fragment>      
    );
  }
}



export default Viagens;