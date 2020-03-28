
import React, {Component, Fragment} from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

//import Tabelaveiculos from './components/veiculos/Tabela';
//import Formveiculos from './components/veiculos/Formulario';
//import Headerveiculos from './components/veiculos/Header';
import Motoristas from './components/motoristas/Motoristas';
import Veiculos from './components/veiculos/Veiculos';
import Viagens from './components/viagens/Viagens';
//import { Module } from 'module';


//import Tabelaviagem from './components/viagens/Tabela';
//import Formviagens from './components/viagens/Formulario';

//import Tabela3 from './components/motoristas/Tabela';
//import Fomr3 from './components/motoristas/Formulario';

class App extends Component {

  render () {

    return (
      <Fragment>
         {/*<Headerveiculos />*/}
          <div className="container mb-10">
            <Veiculos />
            <Motoristas />
            <Viagens />
           {/* <Tabelaveiculos veiculos = { this.state.veiculos } removeVeiculo = {this.removeVeiculo}/> */}
            
            {/*<Formveiculos escutadorSubmit={this.escutadorSubmit}/>*/}
            
        </div>        
      </Fragment>      
    );
  }
}



export default App;
