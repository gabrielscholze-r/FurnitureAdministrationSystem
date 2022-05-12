import React from 'react';
import './index.css'
export default function Furniture({data}){
    console.log(data)
    return (
        <div class="content-container py-2">
            <h3 class="subtitle-furniture px-2">Nome:</h3>
            <h4 className="info-furniture">{data.name}</h4>
            <br/>
            <h3 class="subtitle-furniture px-2">Price:</h3>
            <h4 className="info-furniture">{data.price}</h4>
            <br/>
            <h3 class="subtitle-furniture px-2">Amount:</h3>
            <h4 className="info-furniture">{data.qtd}</h4>
        </div>
    )
}