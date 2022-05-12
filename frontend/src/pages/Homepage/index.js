import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';
import './index.css';
import API from '../../config/js/API';
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import Furniture from '../../components/furniture/Furniture';
function Homepage() {
    const [furniture, setFurniture] = useState("sofa");
    const [allFurnitures, setFurns] = useState([]);
    useEffect(()=>{
        async function getAllFurnitures(){
            const response = await API.get(`/${furniture}`)
            setFurns(response.data)
        }
        getAllFurnitures()
    },[])
    return (
        <div>
            <header className="header">

                <div className="px-5"><img src={logo} alt="logo" className="header-logo" /></div>
                <div className="px-5"><button className="exitbutton" role="button">Sair</button></div>
            </header>
            <div className='filter-search'>
                <select name="furniture" value={furniture} onChange={e => setFurniture(e.target.value)}>
                    <option value="sofa" >Sofa</option>
                    <option value="chair" >Chair</option>
                    <option value="table">Table</option>
                </select>
                <button className="filterbutton">Aplicar</button>
                <button className="filterbutton">sadadsasd</button>
                {allFurnitures.map(data => 
                (
                    <Furniture data={data}/>
                )
                )}
            </div>
            


        </div>
    )
}
export default Homepage;