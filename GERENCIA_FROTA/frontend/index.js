import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import Veiculos from './components/veiculos/Veiculos';
import Motoristas from './components/motoristas/Motoristas';
import Viagens from './components//viagens/Viagens';
import NotFound from './components/veiculos/NotFound';


import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(

    <BrowserRouter>
    <Switch>
        <Route path='/veiculos' exact={true} component={Veiculos} />        
        <Route path='/motoristas' component={Motoristas} />
        <Route path='/viagens' component={Viagens} />
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>,

 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

