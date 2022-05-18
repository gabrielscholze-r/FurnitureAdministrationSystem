import React, { useEffect, useState, useContext } from 'react';
import './index.css'
import API from '../../config/js/API'
import Furniture from '../../components/furniture';
import greenplus from '../../assets/img/greenplus.png'
import KartShop from '../../config/js/kart';

function Venda() {
  let shopcar = []
  const [furniture, setFurniture] = useState("sofa")
  const [allFurnitures, setFurns] = useState([])

  useEffect(() => {
    async function getAllFurnitures() {
      const response = await API.get(`/${furniture}`)
      setFurns(response.data)
    }
    getAllFurnitures()
  }, [furniture])

  function addKart(data) {
    if (shopcar.includes(data)) {
      shopcar[shopcar.indexOf(data)].qtd += 1
    }
    else {
      data.qtd = 1;
      shopcar.push(data)
    }
    console.log(typeof (shopcar))
    console.log(typeof (allFurnitures))

  }
  return (
    <div className="d-flex p-4">
      <div className="px-2 mr-3 shop-list">
        <select className="select-input my-2" name="furniture" value={furniture} onChange={e => setFurniture(e.target.value)}>
          <option value="sofa" >Sofa</option>
          <option value="chair" >Chair</option>
          <option value="table">Table</option>
        </select>
        <div className="furniture-container">
          {allFurnitures.map(data => (
            <div className="body-furniture">
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
              <img src={greenplus} alt="add_to_kart" class="add_to_kart" onClick={e => addKart(data)} />
            </div>
          ))}
        </div>
      </div>
      <div className="px-2 shop-car">
        {shopcar.map(data => (
          <div className="body-furniture">
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

export default Venda;