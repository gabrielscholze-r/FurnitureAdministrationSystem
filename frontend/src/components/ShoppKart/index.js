import React, { useContext, useEffect, useState } from 'react';
import KartShop from '../../config/js/kart';
import './index.css'

function ShoppKart() {
    const [shopkart, setKart] = useState([])
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('kart'));
        if (items) { setKart(items) }
    }, [JSON.parse(localStorage.getItem("kart"))])

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
            // console.log(data.qtd)
            shop[shop.indexOf(data)] = data2

            setKart(shop)
            localStorage.setItem('kart', JSON.stringify(shopkart))
            console.log(data2)
        }
    }
    return (
        <div className='final-pedido-container px-4'>

            <div className="kart-content">
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
            <div className="finalizar-pedido">
                <button>Finalizar Pedido</button>
            </div>
        </div>
    );
}

export default ShoppKart;