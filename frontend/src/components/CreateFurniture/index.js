import React, { useState } from 'react';
// import axios from 'axios';
import API from '../../config/js/API';
import logo from '../../assets/img/logo.png';
import './index.css';
import { Alert } from 'react-bootstrap';

export default function CreateFurniture() {
    const [furniture, setFurniture] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(null);
    const [amount, setAmount] = useState(null)
    const [show, setShow] = useState(false)
    async function HandleSubmit() {
        if (name!="" && price!=null && amount!=null) {
            try {
                await API.post(`/${furniture}`, {
                    name: name,
                    price: price,
                    qtd: amount
                })
                setName("")
                setPrice("")
                setAmount("")
                setShow(true)
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div className="body">
            <div className="under-header">
                <h1>Adicionar Móvel</h1>
                <Alert show={show} variant="success" className="success-alert">
                    <Alert.Heading>Adicionado com sucesso!</Alert.Heading>
                </Alert>
                <div className="creation-container">
                    <h3 className="subtitle">Tipo</h3>
                    <div className="form-field-radio px-5">
                        <p className="label">Sofa</p>
                        <input type='radio' name="furniture" value="sofa" className="radio-button" onChange={e => setFurniture(e.target.value)} /><br />
                    </div>
                    <div class="form-field-radio px-5">
                        <p className="label">Chair</p>
                        <input type='radio' name="furniture" value="chair" className="radio-button" onChange={e => setFurniture(e.target.value)} /><br />
                    </div>
                    <div className="form-field-radio px-5">
                        <p className="label">Table</p>
                        <input type='radio' name="furniture" value="table" className="radio-button" onChange={e => setFurniture(e.target.value)} /><br />
                    </div>
                    <div className="form-field">
                        <h3 className="subtitle mt-100">Furniture Name</h3><br />
                        <input type="text" name="furniture" placeholder='Name' value={name} className="text-input number-input" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <h3 className="subtitle">Furniture Price</h3><br />
                        <input type="number" name="furniture" placeholder='Price' value={price} className="text-input number-input" onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <h3 className="subtitle">Furniture Amount</h3><br />
                        <input type="number" name="furniture" placeholder='Amount' value={amount} className="text-input number-input" onChange={e => setAmount(e.target.value)} />
                    </div>
                    <div className="form-field buttons">
                        <div><button className="exitbutton" onClick={e => HandleSubmit()}>Adicionar</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}