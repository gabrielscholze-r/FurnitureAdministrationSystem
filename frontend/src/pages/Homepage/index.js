import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';
import './index.css';
import API from '../../config/js/API';
import Furniture from '../../components/furniture';
import AuthContext from '../../config/js/auth'
import ContentContext from '../../config/js/content'
import AddSignal from '../../assets/img/AddSignal.png'
import { useHistory } from 'react-router-dom';
import CreateFurniture from '../CreateFurniture/index'
import FurnitureList from '../../components/FurnitureList';
import { useCookies } from 'react-cookie';
import Venda from '../Venda';

function Homepage() {
    const [furniture, setFurniture] = useState("sofa");
    const [allFurnitures, setFurns] = useState([]);
    const [isLogged, setLogged] = useContext(AuthContext)
    const [content, setContent] = useContext(ContentContext)
    const [cookies, setCookies] = useCookies(['auth'])
    let history = useHistory()
    useEffect(() => {
        async function getAllFurnitures() {
            const response = await API.get(`/${furniture}`)
            setFurns(response.data)
        }
        getAllFurnitures()
    }, [furniture])

    function logoff() {
        setLogged(false);
        setCookies('log', "", { path: '/' })
        // history.push('/Login')
        window.location.reload(false)

    }
    return (
        <div className="homepage-container">
            <header className="header">
                <div><img src={logo} alt="addfurniture" className="header-logo" /></div>
                <h4 className="content-changer" style={(content == 0) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(0) }}>Home</h4>
                <h4 className="content-changer" style={(content == 1) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(1) }}>Create</h4>
                <h4 className="content-changer" style={(content == 2) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(2) }}>Sale</h4>
                <div className="px-5"><button className="exitbutton" role="button" onClick={e => { logoff() }}>Sair</button></div>
            </header>
            {
                {
                    0: <FurnitureList />,
                    1: <CreateFurniture />,
                    2: <Venda />
                }[content]
            }



        </div>
    )
}
export default Homepage;