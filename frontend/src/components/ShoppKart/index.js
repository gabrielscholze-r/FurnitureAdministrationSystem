import React, { useContext } from 'react';
import KartShop from '../../config/js/kart';
import './index.css'

function ShoppKart() {
    const [shopkart, setKart] = useContext(KartShop)
    return (
        <div className='final-pedido-container px-4'>
            <div className="finalizar-pedido">
                <button>Finalizar Pedido</button>
            </div>
            <div className="kart-content">
            {shopkart.map(data => (
                <div className="body-furniture-pedido">
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
        </div>
    );
}

export default ShoppKart;