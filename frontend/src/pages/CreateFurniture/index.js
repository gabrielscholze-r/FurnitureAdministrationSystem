import React, { useState } from 'react';
// import axios from 'axios';
import API from '../../config/js/API';
import logo from '../../assets/img/logo.png';
import './index.css';

export default function CreateFurniture() {
    const [furniture, setFurniture] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0)
    async function HandleSubmit() {
        await API.post(`/${furniture}`, {
            name: name,
            price: price,
            qtd: amount
        })
    }
    return (
        <div className="body">
            <header className="header">
                <div className="px-5"><img src={logo} alt="logo" class="header-logo" /></div>
                <div className="px-5"><button class="exitbutton" role="button">Sair</button></div>
            </header>
            <div className="under-header">
            <h1>Adicionar Móvel</h1>
            <div className="creation-container">
                <h3 className="subtitle">Tipo</h3>
                <div className="form-field-radio px-5">
                    <p className="label">Sofa</p>
                    <input type='radio' name="furniture" value="sofa" className="radio-button" onChange={e => setFurniture(e.target.value)}/><br />
                </div>
                <div class="form-field-radio px-5">
                    <p className="label">Chair</p>
                    <input type='radio' name="furniture" value="chair" className="radio-button" onChange={e => setFurniture(e.target.value)}/><br />
                </div>
                <div className="form-field-radio px-5">
                    <p className="label">Table</p>
                    <input type='radio' name="furniture" value="table" className="radio-button" onChange={e => setFurniture(e.target.value)} /><br />
                </div>
                <div className="form-field">
                    <h3 className="subtitle mt-100">Furniture Name</h3><br />
                    <input type="text" name="furniture" placeholder='Name' className="text-input number-input" onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-field">
                    <h3 className="subtitle">Furniture Price</h3><br />
                    <input type="number" name="furniture" placeholder='Price' className="text-input number-input" onChange={e => setPrice(e.target.value)}/>
                </div>
                <div className="form-field">
                    <h3 className="subtitle">Furniture Amount</h3><br />
                    <input type="number" name="furniture" placeholder='Amount' className="text-input number-input" onChange={e => setAmount(e.target.value)}/>
                </div>
                <div className="form-field buttons">
                    <div><button className="exitbutton" onClick={e=> HandleSubmit()}>Adicionar</button></div>
                    <div><button className="exitbutton back">Voltar</button></div>
                </div>
                </div>
            </div>
        </div>
    )
}