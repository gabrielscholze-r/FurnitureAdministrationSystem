import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';
import './index.css';
import API from '../../config/js/API';
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
function Homepage() {
    var dict = {};

    useEffect(() => {
        API.get(`/${furniture}`).then(res => dict = res.data);
    }, [])
    const [furniture, setFurniture] = useState("sofa");
    var d;
    function getFurnitures() {
        // API.get(`/${furniture}`).then((res) => { console.log(res.data) });
        console.log(dict)
    }
    function renderDict() {
        var d = [];
        for (var i in dict) {
            Object.entries(dict[i]).map(([key, value]) => d.push())
        }
        return <div>{d}</div>;
    }
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
                <button className="filterbutton" onClick={e => getFurnitures()}>Aplicar</button>
                {renderDict}
                <button className="filterbutton" onClick={e => d = renderDict()}>sadadsasd</button>
            </div>
            


        </div>
    )
}
export default Homepage;