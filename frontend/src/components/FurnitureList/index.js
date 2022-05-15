import React, { useEffect, useState } from 'react';
import API from '../../config/js/API';
import Furniture from '../furniture';

export default function FurnitureList() {
    const [furniture, setFurniture] = useState("sofa");
    const [allFurnitures, setFurns] = useState([])

    useEffect(() => {
        async function getAllFurnitures() {
            const response = await API.get(`/${furniture}`)
            setFurns(response.data)
        }
        getAllFurnitures()
    }, [furniture])

    return (
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
    )

}
