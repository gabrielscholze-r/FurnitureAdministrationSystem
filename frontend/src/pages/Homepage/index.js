import React from 'react';
import logo from '../../assets/img/logo.png'
import './index.css'
function Homepage(){
    return (
        <div>
            <header className="header">
                <div className="px-5"><img src={logo} alt="logo" className="header-logo"/></div>
                <div className="px-5"><button className="exitbutton" role="button">Sair</button></div>
            </header>
        </div>
    )
}
export default Homepage;