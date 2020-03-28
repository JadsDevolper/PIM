
import React, {Component, Fragment} from 'react';

import '../veiculos/Veiculos.css';
import 'materialize-css/dist/css/materialize.min.css';
import ApiService from '../ApiService';
import api from '../../../src/services/api';

import Tabelaveiculos from './Tabela';
import Formveiculos from './Formulario';
import Headerveiculos from './Header';
import PopUp from '../viagens/PopUp';

class Veiculos extends Component {

  constructor(props) {
    super(props);

    this.state = { veiculos: []};
  }
  
// listando todos os veículos 
  async componentDidMount() {
        
    try {
        const response = await api.get(`/veiculos/`);
        this.setState({ veiculos: response.data })
    }
    catch (error) {
        console.log(error)
    }
}

//CADASTRANDO VEICULOS

  escutadorSubmit = veiculo => {
    ApiService.CriaVeiculos(JSON.stringify(veiculo))
    .then(res => res.data)
    .then(veiculo => {
      this.setState({ veiculos:[...this.state.veiculos, veiculo] });
      PopUp.exibeMensagem("success", "Veiculo adicionado com sucesso");
    })
    
  }

// REMOVE VEICULO DO FORM E DO BANCO

  
  removeVeiculo =  id_veiculo => {

    const {veiculos} = this.state;
    
    this.setState(
      {
        veiculos : veiculos.filter(veiculo => {
          console.log(veiculos);
          return veiculo.id_veiculo !== id_veiculo;
        }),
      }
    );
    PopUp.exibeMensagem("error", "Veículo removido com sucesso");
    ApiService.RemoveVeiculos(id_veiculo);
  }



  render () {

  

    return (     
      <Fragment>
         <Headerveiculos />
          <div className="container mb-10">
            <Tabelaveiculos veiculos = { this.state.veiculos } removeVeiculo = {this.removeVeiculo} />
            
            <Formveiculos escutadorSubmit={this.escutadorSubmit}/>
            
        </div>        
      </Fragment>      
    );
  }
}



export default Veiculos;
