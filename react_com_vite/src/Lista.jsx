import React from 'react';
import './App.css';

const Lista = () => {
    const itens = ['pao', 'manteiga', 'queijo', 'cafe'];

    return (
        <ul>
            {itens.map((itens, index) => (
                <li key={index}>{itens}</li>
            ))}
        </ul>
    );
};

export default Lista;