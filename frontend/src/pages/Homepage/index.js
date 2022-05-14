import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';
import './index.css';
import API from '../../config/js/API';
import Furniture from '../../components/furniture';
import AuthContext from '../../config/js/auth'
import AddSignal from '../../assets/img/AddSignal.png'
import { useHistory } from 'react-router-dom';

function Homepage() {
    const [furniture, setFurniture] = useState("sofa");
    const [allFurnitures, setFurns] = useState([]);
    const [isLogged, setLogged] = useContext(AuthContext)
    let history = useHistory()
    useEffect(() => {
        async function getAllFurnitures() {
            const response = await API.get(`/${furniture}`)
            setFurns(response.data)
        }
        getAllFurnitures()
    }, [furniture])
    
    

    return (
        <div className="homepage-container">
            <header className="header">
                <div><img src={AddSignal} alt="addfurniture" className="add-furniture" /></div>
                <div className="px-5"><button className="exitbutton" role="button" onClick={e => { setLogged(false) }}>Sair</button></div>
            </header>
            <div className='filter-search mt-5'>
                <select className="select-input" name="furniture" value={furniture} onChange={e => setFurniture(e.target.value)}>
                    <option value="sofa" >Sofa</option>
                    <option value="chair" >Chair</option>
                    <option value="table">Table</option>
                </select>
                <div className="furniture-container">
                    {allFurnitures.map(data =>
                    (
                        <Furniture data={data} furniture={furniture} />
                    )
                    )}
                </div>

            </div>



        </div>
    )
}
export default Homepage;