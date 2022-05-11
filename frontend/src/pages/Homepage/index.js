import React, {useState} from 'react';
import logo from '../../assets/img/logo.png';
import './index.css';
import API from '../../config/js/API';
function Homepage() {
    // const [furniture, setFurniture] = useState("sofa");
    const [furnitureList, setFList] = useState({});
    function getFurnitures(e){
        API.get(`/${e}`).then(r => setFList(e.data));
        // console.log(furnitureList)
    }
    return (
        <div>
            <header className="header">
                <div className="px-5"><img src={logo} alt="logo" className="header-logo" /></div>
                <div className="px-5"><button className="exitbutton" role="button">Sair</button></div>
            </header>
            <div>
                <select name="furniture" onChange={e =>getFurnitures(e.target.value)}>
                    <optgroup>
                        <option value="sofa">Sofa</option>
                        <option value="chair">Chair</option>
                        <option value="table">Table</option>
                    </optgroup>

                </select>
            </div>


        </div>
    )
}
export default Homepage;