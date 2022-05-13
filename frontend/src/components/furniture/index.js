import React from 'react';
import './index.css'
import excludeSignal from '../../assets/img/exclude.png'

export default function Furniture({data}){
    console.log(data)
    return (
        <div className="body-furniture">
        <img src={excludeSignal} alt="exclude_signal" className="exclude-signal mr-1"/>
        <div class="content-container py-3 my-1">
            <h3 class="subtitle-furniture px-2">Nome:</h3>
            <h4 className="info-furniture">{data.name}</h4>
            <br/>
            <h3 class="subtitle-furniture px-2">Price:</h3>
            <h4 className="info-furniture">{data.price}</h4>
            <br/>
            <h3 class="subtitle-furniture px-2">Amount:</h3>
            <h4 className="info-furniture pr-3">{data.qtd}</h4>
            
        </div>
        
        </div>
    )
}