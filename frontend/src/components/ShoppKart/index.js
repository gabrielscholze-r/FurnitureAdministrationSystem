import React, { useContext, useEffect, useState } from 'react';
import API from '../../config/js/API';
import KartShop from '../../config/js/kart';
import './index.css'

function ShoppKart() {
    const [shopkart, setKart] = useState([])
    const [total, setTotal] = useState(0)
    const [amount, setQTD] = useState(0)

    function updateList() {
        const items = JSON.parse(localStorage.getItem('kart'));
        if (items) {
            setKart(items)
        }

        updateTotal(items)
    }
    useEffect(() => {
        updateList()
    }, [])

    function updateTotal(items) {
        var soma = 0
        var q = 0
        items.map(data => {
            soma += (data.qtd * data.price)
            q+=data.qtd
        })
        setTotal(soma)
        setQTD(q)
    }

    function delItem(data) {
        var shop = shopkart
        if (shop[shop.indexOf(data)].qtd == 1) {
            const deleted = shop.pop(shopkart.indexOf(data))
            setKart(shop)
            localStorage.setItem('kart', JSON.stringify(shopkart))
        }
        else {
            var data2 = shop.find(x => x === data)
            data2.qtd = data.qtd - 1
            shop[shop.indexOf(data)] = data2
            setKart(shop)
            localStorage.setItem('kart', JSON.stringify(shopkart))
        }
        updateList()
    }

    async function buy() {
        var kart = shopkart
        // get deleted dict
        // compare qtd
        // if kart_item.qtd==deleted.qtd then do nothing
        // else deleted.qtd = deleted.qtd-kart
        const sofaList = await API.get("/sofa")
        const chairList = await API.get("/chair")
        const tableList = await API.get("/table")
        console.log("buying")
        kart.map(kartItem => {
            
            sofaList.data.map(async sofa => {
                if (kartItem._id == sofa._id) {
                    const deletedItem = await API.delete(`sofa/${kartItem._id}`)
                    if (kartItem.qtd < deletedItem.data.qtd) {
                        deletedItem.data.qtd -= kartItem.qtd
                        await API.post('sofa', deletedItem.data)
                    }
                }
            })
            chairList.data.map(async chair => {
                if (kartItem._id == chair._id) {
                    const deletedItem = await API.delete(`chair/${kartItem._id}`)
                    if (kartItem.qtd < deletedItem.data.qtd) {
                        deletedItem.data.qtd -= kartItem.qtd
                        await API.post('chair', deletedItem.data)
                    }
                }
            })
            tableList.data.map(async table => {
                if (kartItem._id == table._id) {
                    const deletedItem = await API.delete(`table/${kartItem._id}`)
                    if (kartItem.qtd < deletedItem.data.qtd) {
                        deletedItem.data.qtd -= kartItem.qtd
                        await API.post('table', deletedItem.data)
                    }
                }
            })
        })
        const d = new Date()
        await API.post('/record', {
            month: d.getMonth(),
            dateTime: d.getTime(),
            price: total,
            qtd: amount
        })
        alert('Pedido Feito')
        setTotal(0)
        setQTD(0)
        setKart([])
        localStorage.setItem('kart', JSON.stringify([]))
        updateList()
        window.location.reload(false)

    }

    return (
        <div className='final-pedido-container p-1'>
            <div className="kart-content p-2">
                {shopkart.map(data => (
                    <div className="body-furniture-pedido">
                        <span class="material-symbols-outlined exclude-signal" onClick={e => delItem(data)}>
                            close
                        </span>
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
                ))}
            </div>
            <div className="finalizar-pedido p-2">
                <h4>Total</h4>
                <p className="font-weight-bold text-success">R${total}</p>
                <button className="buy-button py-1 px-3" onClick={buy}>Finalize Order</button>
            </div>
        </div>
    );
}

export default ShoppKart;