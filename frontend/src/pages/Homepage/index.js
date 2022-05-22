import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';
import './index.css';
import API from '../../config/js/API';
import AuthContext from '../../config/js/auth'
import ContentContext from '../../config/js/content'
import { useHistory } from 'react-router-dom';
import CreateFurniture from '../../components/CreateFurniture/index'
import { useCookies } from 'react-cookie';
import shoppingcar from '../../assets/img/shoppingcart.png'
import ShoppKart from '../../components/ShoppKart';
import Report from '../../components/Report';
function Homepage() {
    const [cart, setCart] = useState([])
    const [furniture, setFurniture] = useState("sofa");
    const [allFurnitures, setFurns] = useState([]);
    const [isLogged, setLogged] = useContext(AuthContext)
    const [content, setContent] = useContext(ContentContext)
    const [cookies, setCookies] = useCookies(['auth'])
    let history = useHistory()

    async function getAllFurnitures() {
        const response = await API.get(`/${furniture}`)
        setFurns(response.data)
    }



    useEffect(() => {
        getAllFurnitures()
    }, [furniture])



    function logoff() {
        setLogged(false);
        setCookies('log', "", { path: '/' })
        // history.push('/Login')
        window.location.reload(false)
    }

    function add_kart(data) {
        var bool = false
        var shopcar = cart
        shopcar.map(info => {
            if (info._id === data._id) {
                console.log("IGUAL")
                bool = true
                if (info.qtd < data.qtd) {
                    info.qtd += 1
                    setCart(shopcar)
                    localStorage.setItem('kart', JSON.stringify(shopcar))
                    alert("adicionou ao carrinho!")
                    getAllFurnitures()

                }
                else {
                    alert("Todos ja adicionados")
                }
            }
        })
        if (!bool) {
            var newData = data;
            newData.qtd = 1;
            shopcar.push(newData)
            setCart(shopcar)
            localStorage.setItem('kart', JSON.stringify(shopcar))
            alert("adicionou ao carrinho!")
            getAllFurnitures()
        }

    }




    return (
        <div className="homepage-container">
            <header className="header">
                <div><img src={logo} alt="addfurniture" className="header-logo" /></div>
                <h4 className="content-changer" style={(content == 0) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(0) }}>List</h4>
                <h4 className="content-changer" style={(content == 1) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(1) }}>Add</h4>
                <span className="material-symbols-outlined kart" style={(content == 2) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(2) }}>
                    shopping_cart
                </span>
                <h4 className="content-changer" style={(content == 3) ? { color: "#c50e29" } : { color: "black" }} onClick={e => { setContent(3) }}>Report</h4>
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
                        {allFurnitures.map(í => (
                            <div className="body-furniture">
                                <img src={shoppingcar} alt="shopping_cart" class="add_kart" onClick={e => add_kart(í)} />
                                <div className="content-container py-3 my-1">
                                    <h3 className="subtitle-furniture px-2">Nome:</h3>
                                    <h4 className="info-furniture">{í.name}</h4>
                                    <br />
                                    <h3 className="subtitle-furniture px-2">Price:</h3>
                                    <h4 className="info-furniture">{í.price}</h4>
                                    <br />
                                    <h3 className="subtitle-furniture px-2">Amount:</h3>
                                    <h4 className="info-furniture pr-3">{í.qtd}</h4>
                                </div>
                            </div>
                        ))} </div>,
                    1: <CreateFurniture />,
                    2: <ShoppKart />,
                    3: <Report />
                }[content]
            }



        </div>
    )
}
export default Homepage;