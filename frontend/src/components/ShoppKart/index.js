import React, { useContext, useEffect, useState } from 'react';
import KartShop from '../../config/js/kart';
import './index.css'

function ShoppKart() {
    const [shopkart, setKart] = useState([])
    const [total, setTotal] = useState(0)

    function updateList(){
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
        items.map(data => {
            soma += (data.qtd * data.price)
        })
        setTotal(soma)
        console.log(total)
    }

    function delItem(data) {
        var shop = shopkart
        if (shop[shop.indexOf(data)].qtd == 1) {
            const deleted = shop.pop(shopkart.indexOf(data))
            console.log(deleted)
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

    function buy(kart){
        // get deleted dict
        // compare qtd
        // if kart_item.qtd==deleted.qtd then do nothing
        // else deleted.qtd = deleted.qtd-kart
        
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
                <button className="buy-button py-1 px-3">Finalizar Pedido</button>
            </div>
        </div>
    );
}

export default ShoppKart;