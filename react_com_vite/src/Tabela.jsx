import React from 'react';
import './App.css';

const Tabela = () => {
    const dados = [
        {id: 1, caso: 'Consultar Chamados', ator: 'Todos'},
        {id: 2, caso: 'Abrir Chamado', ator: 'Cliente'},
        {id: 3, caso: 'Validar Chamado', ator: 'Triagem'},
        {id: 4, caso: 'Gerenciar Sistema', ator: 'Gerente'}
    ];

    return (
        <table border='1'>
            <thead>
                <tr>
                    <td>Caso</td>
                    <td>Ator</td>
                </tr>
            </thead>
            <tbody>
                {dados.map((item) => (
                    <tr key={item.id}>
                        <td>{item.caso}</td>
                        <td>{item.ator}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

};

export default Tabela;