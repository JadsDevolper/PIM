import React, {Component} from 'react';

const TableHeadveiculos = () => {
    return(
        <thead>
            <tr>
                <th>ID </th>
                <th>Veículo </th>
                <th>Fabricante </th>
                <th>Cor </th>
                <th>Renavan </th>
                <th>Placa </th>
                <th>Ano </th>
            </tr>
        </thead>
    );
}

const TableBodyveiculos = props => {
    const linhas = props.veiculos.map((linha)=> {
        return(
            <tr key={linha.id_veiculo}>
                <td>{linha.id_veiculo}</td>
                <td>{linha.nome_veiculo}</td>
                <td>{linha.fabricante}</td>
                <td>{linha.cor}</td>
                <td>{linha.renavan}</td>
                <td>{linha.placa}</td>
                <td>{linha.ano}</td>
                <td><button onClick = {() =>{props.removeVeiculo(linha.id_veiculo)}} id="remover" className="btn" >Remover</button></td>
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
        const {veiculos, removeVeiculo} = this.props;
       
        return(
            <table className="center hightlight">
                <TableHeadveiculos />
                <TableBodyveiculos veiculos = {veiculos} removeVeiculo = {removeVeiculo}/>
          </table>          
        );       
    }    
}

export default Tabela;