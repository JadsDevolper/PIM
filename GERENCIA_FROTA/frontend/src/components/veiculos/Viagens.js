import React, { Component, Fragment} from 'react';
import Header from './Header';

import DataTable from './DataTable';

class Viagens extends Component {
    constructor(props){
    super(props);

    this.state = {
        viagens: [
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
        titulo: 'Viagens'
    };
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h2>Viagens </h2>

                    <DataTable dados={this.state.viagens}
                    titulo={this.state.titulo}
                    colunas={['nome_viagem']} />

                </div>
                
            </Fragment>
        );
    }
}

export default Viagens;