import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import API from '../../config/js/API';
// import Header from '../../components/Header';
import AuthContext from '../../config/js/auth';
import './index.css'
import logo from '../../assets/img/logo.png'

function Login() {
    const [Logged, setLogged] = useContext(AuthContext)
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    let history = useHistory()
    async function authenticate() {
        try {
            const result = await API.post('/user/login', {
                user,
                password
            })
            if(result.data.msg===1){
                console.log("logou")
                setLogged(true)
            }
        } catch (error) {
            setMessage("Usuário incorreto!")
            setUser("")
            setPassword("")
        }
    }
    return (
        <div >
            {/* <Header className="login-header" /> */}
            <header className="header">
                <img src={logo} alt="logo" className="header-logo-login px-5" />
            </header>
            <div className="Login-div Auto-centralize">
                <div className="content">
                    <h1>LOGIN</h1>
                </div>
                <h4 className="error-message">{message}</h4>
                <div className="content">
                    <div class="form__group field">
                        <input type="input" class="form__field" value={user} placeholder="Name" required onChange={e => setUser(e.target.value)} />
                    </div>
                </div>
                <div className="content">
                    <div class="form__group field">
                        <input type="password" class="form__field" value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <button onClick={e => authenticate()} className="loginbutton px-5" role="button">Logar</button>
            </div>
        </div>
    )
}
export default Login;