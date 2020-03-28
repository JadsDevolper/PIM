import React, { Component, Fragment} from 'react';
import Header from './Header';

import DataTable from './DataTable';

class Motoristas extends Component {
    constructor(props){
    super(props);

    this.state = {
        motoristas: [
            {
                id_motorista:'1',
                nome_motorista:'Carlos Roberto',
                rg_motorista:'1452578',
                email:'carlos@gmail.com',
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
                id_motorista:'3',
                nome_motorista:'Pedro Henrique',
                rg_motorista:'1452578',
                email:'pedro@gmail.com',
                datanasc:'10-05-1989',
                telefone:'133232-3565',
                cpf:'59958956896',
                cnh:'798798987' 
            }
        ],
        titulo: 'Motoristas'
    };
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h2>Motoristas </h2>

                    <DataTable dados={this.state.motoristas}
                    titulo={this.state.titulo}
                    colunas={['nome_motorista']} />

                </div>
                
            </Fragment>
        );
    }
}

export default Motoristas;