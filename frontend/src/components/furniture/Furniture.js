import React from 'react';

export default function Furniture({data}){
    console.log(data)
    return (
        <div>
            <h3>Nome</h3>
            <h4>{data.name}</h4>
            <br/>
            <h3>Price</h3>
            <h4>{data.price}</h4>
            <br/>
            <h3>Amount</h3>
            <h4>{data.qtd}</h4>
        </div>
    )
}