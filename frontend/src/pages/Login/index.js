import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
// import Header from '../../components/Header';
import AuthContext from '../../config/js/auth';
import './index.css'
import logo from '../../assets/img/logo.png'

function Login() {
    const [Logged, setLogged] = useContext(AuthContext)
    let history = useHistory()
    function authenticate() {
        alert("funfou")
        setLogged(true)

    } 
    return (
        <div >
            {/* <Header className="login-header" /> */}
            <header className="header">
                <img src={logo} alt="logo" className="header-logo-login px-5"/>
            </header>
            <div className="Login-div Auto-centralize">
                <div className="content">
                    <h1>LOGIN</h1>
                </div>
                <div className="content">
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Name" required />
                    </div>
                </div>
                <div className="content">
                    <div class="form__group field">
                        <input type="password" class="form__field" placeholder="Senha" required />
                    </div>
                </div>
                <button onClick={authenticate} className="loginbutton px-5" role="button">Logar</button>
            </div>
        </div>
    )
}
export default Login;