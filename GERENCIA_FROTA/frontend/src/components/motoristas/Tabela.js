import React, {Component} from 'react';

const TableHead = () => {
    return(
        <thead>
            <tr>
                <th>ID </th>
                <th>Motorista </th>
                <th>RG </th>
                <th>E-mail </th>
                <th>Data de Nascimento </th>
                <th>Telefone </th>
                <th>CPF </th>
                <th>CNH </th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const linhas = props.motoristas.map((linha, index)=> {
        return(
            <tr key={index}>
                <td>{linha.id_motorista}</td>
                <td>{linha.nome_motorista}</td>
                <td>{linha.rg_motorista}</td>
                <td>{linha.email}</td>
                <td>{linha.datanasc}</td>
                <td>{linha.telefone}</td>
                <td>{linha.cpf}</td>
                <td>{linha.cnh}</td>
                <td><button onClick = {() =>{props.removeMotorista(index)}} id="remover"className="btn" >Remover</button></td>
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
        const {motoristas, removeMotorista} = this.props;
       
        return(
            <table className="center highlight">
                <TableHead />
                <TableBody motoristas = {motoristas} removeMotorista = {removeMotorista}/>
          </table>          
        );       
    }    
}

export default Tabela;