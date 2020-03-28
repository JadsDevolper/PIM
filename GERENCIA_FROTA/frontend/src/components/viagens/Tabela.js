import React, {Component} from 'react';

const TableHeadviagens = () => {
    return(
        <thead>
            <tr>
                <th>ID </th>
                <th>Viagem </th>
                <th>Destino </th>
                <th>Data </th>
                <th>Estatus </th>
            </tr>
        </thead>
    );
}

const TableBodyviagens = props => {
    const linhas = props.viagens.map((linha, index) =>{
        return(
            <tr key={index}>
            <td>{linha.id_viagem}</td>
            <td>{linha.nome_viagem}</td>
            <td>{linha.destino_viagem}</td>
            <td>{linha.data_viagem}</td>
            <td>{linha.estatus_viagem}</td>
            <td><button onClick = {() =>{props.removeViagem(index)}} id="remover"className="btn" >Remover</button></td>
        </tr>
        )
    });
    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render() {
        const {viagens,removeViagem} = this.props;
        return(
            <table className="center highlight">
                <TableHeadviagens />
                <TableBodyviagens  viagens = {viagens} removeViagem = {removeViagem}/>
                 
            </table>
        );
    }
}

export default Tabela;