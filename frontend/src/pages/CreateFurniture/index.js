import React, {useState} from 'react';
// import axios from 'axios';
import API from '../../config/js/API';

export default function CreateFurniture(){
    const [furniture, setFurniture] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0)

    function HandleSubmit(){
        API.post(`/${furniture}`,{
            name: name,
            price: price,
            qtd: amount
        })
    }
    
    return (
        <div>
            <form>
                <label>Sofa</label>
                <input type='radio' name="furniture" value="sofa" onChange={e => setFurniture(e.target.value)}/><br/>
                <label>Chair</label>
                <input type='radio' name="furniture" value="chair" onChange={e => setFurniture(e.target.value)}/><br/>
                <label>Table</label>
                <input type='radio' name="furniture" value="table" onChange={e => setFurniture(e.target.value)}/><br/>
                
                <p>Furniture Name</p><br/>
                <input type="text" name="furniture" placeholder='Name' onChange={e => setName(e.target.value)}/>

                <p>Furniture Price</p><br/>
                <input type="number" name="furniture" placeholder='Price' onChange={e => setPrice(e.target.value)}/>

                <p>Furniture Amount</p><br/>
                <input type="number" name="furniture" placeholder='Amount' onChange={e => setAmount(e.target.value)}/>
            </form>
            <button type="button" name="furniture" onClick={e => HandleSubmit()}>Submit</button>
        </div>
    )
}