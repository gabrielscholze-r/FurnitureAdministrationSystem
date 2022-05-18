import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';
import './index.css';
import API from '../../config/js/API';
import AuthContext from '../../config/js/auth'
import ContentContext from '../../config/js/content'
import { useHistory } from 'react-router-dom';
import CreateFurniture from '../CreateFurniture/index'
import { useCookies } from 'react-cookie';
import shoppingcar from '../../assets/img/shoppingcart.png'
import KartShop from '../../config/js/kart';
import shopcartblack from '../../assets/img/shopcartblack.svg'
import ShoppKart from '../../components/ShoppKart';
function Homepage() {
    const [cart, setCart] = useContext(KartShop)
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

    function add_kart(data) {
        let shopcar = cart
        if (shopcar.includes(data)) {
            shopcar[shopcar.indexOf(data)].qtd += 1
        }
        else {
            data.qtd = 1;
            shopcar.push(data)
        }
        setCart(shopcar)
        alert("adicionou ao carrinho!")
    }

    return (
        <div className="homepage-container">
            <header className="header">
                <div><img src={logo} alt="addfurniture" className="header-logo" /></div>
                <h4 className="content-changer" style={(content == 0) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(0) }}>Home</h4>
                <h4 className="content-changer" style={(content == 1) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(1) }}>Create</h4>
                {/* <img src={shopcartblack} alt="shopping_cart" style={(content==2) ? { color: "#c50e29" } : { color: "black" }} class="kart" onClick={e => { setContent(2) }}/> */}
                {/* <h4 className="content-changer" style={(content == 2) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(2) }}>Sale</h4> */}
                <span className="material-symbols-outlined kart" style={(content==2) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(2) }}>
                    shopping_cart
                </span>
                <div className="px-5"><button className="exitbutton" role="button" onClick={e => { logoff() }}>Sair</button></div>
            </header>
            {
                {
                    0: <div className='filter-search mt-5'>
                        <select className="select-input" name="furniture" value={furniture} onChange={e => setFurniture(e.target.value)}>
                            <option value="sofa" >Sofa</option>
                            <option value="chair" >Chair</option>
                            <option value="table">Table</option>
                        </select>
                        {allFurnitures.map(data => (
                            <div className="body-furniture">
                                <img src={shoppingcar} alt="shopping_cart" class="add_kart" onClick={e => add_kart(data)} />
                                <div className="content-container py-3 my-1">
                                    <h3 className="subtitle-furniture px-2">Nome:</h3>
                                    <h4 className="info-furniture">{data.name}</h4>
                                    <br />
                                    <h3 className="subtitle-furniture px-2">Price:</h3>
                                    <h4 className="info-furniture">{data.price}</h4>
                                    <br />
                                    <h3 className="subtitle-furniture px-2">Amount:</h3>
                                    <h4 className="info-furniture pr-3">{data.qtd}</h4>
                                </div>
                            </div>
                        ))} </div>,
                    1: <CreateFurniture />,
                    2: <ShoppKart />
                }[content]
            }



        </div>
    )
}
export default Homepage;