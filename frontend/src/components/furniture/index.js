import React from 'react';
import './index.css'
import excludeSignal from '../../assets/img/exclude.png'
import API from '../../config/js/API'

export default function Furniture({data, furniture}){
    function DeleteFurniture(){
        if(window.confirm("Are you sure you want to delete this item? (all the items will be delete for this furniture)")){
            API.delete(`/${furniture}/${data._id}`)
            window.location.reload(false);
        }
    }
    
    return (
        <div className="body-furniture">
        <img src={excludeSignal} alt="exclude_signal" className="exclude-signal mr-1" onClick={e => DeleteFurniture()}/>
        <div className="content-container py-3 my-1">
            <h3 className="subtitle-furniture px-2">Nome:</h3>
            <h4 className="info-furniture">{data.name}</h4>
            <br/>
            <h3 className="subtitle-furniture px-2">Price:</h3>
            <h4 className="info-furniture">{data.price}</h4>
            <br/>
            <h3 className="subtitle-furniture px-2">Amount:</h3>
            <h4 className="info-furniture pr-3">{data.qtd}</h4>
            
            </div>
        
        </div>
    )
}