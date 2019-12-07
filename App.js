import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Incluir from './pages/veiculo/incluir';
import Alterar from './pages/veiculo/alterar';
import Pesquisar from './pages/veiculo/pesquisar';

import Incluirmo from './pages/motorista/incluirmo';
import Alterarmo from './pages/motorista/alterarmo';
import Pesquisarmo from './pages/motorista/pesquisarmo';

import Incluirvi from './pages/viagem/incluirvi';
import Alterarvi from './pages/viagem/alterarvi';
import Pesquisarvi from './pages/viagem/pesquisarvi';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menus">
            <Link to={'/'} className="navbar-brand">Controle de Frota de Veículos</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Incluir'} className="nav-link">Incluir Veículos</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Incluirmo'} className="nav-link">Incluir Motorista</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Incluirvi'} className="nav-link">Incluir Viagens</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Listar'} className="nav-link">Listar Veículos</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Listarmo'} className="nav-link">Listar Motoristas</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Listarvi'} className="nav-link">Listar Viagens</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <Switch>
            <Route exact path='/incluir' component={Incluir} />
            <Route path='/atualizar/:id' component={Alterar} />
            <Route path='/listar' component={Pesquisar} />
            <Route exact path='/incluirmo' component={Incluirmo} />
            <Route path='/atualizarmo/:id' component={Alterarmo} />
            <Route path='/listarmo' component={Pesquisarmo} />
            <Route exact path='/incluirvi' component={Incluirvi} />
            <Route path='/atualizarvi/:id' component={Alterarvi} />
            <Route path='/listarvi' component={Pesquisarvi} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;