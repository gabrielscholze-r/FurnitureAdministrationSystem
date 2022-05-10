import React, {useContext} from 'react';
import {Switch} from 'react-router-dom'
import Homepage from '../../pages/Homepage/index.js';
import Login from '../../pages/Login';
import AuthContext from './auth';


function Rotas() {
    const [Logged, setLogged] = useContext(AuthContext)
    function rota(Logged){
        if(Logged){
            return (
                <Switch path="/Home"><Homepage/></Switch>
            )
        }
        else{
            return (<Switch path="/Login"><Login/></Switch>)
        }
    }
    return (
        <>
        {rota(Logged)}
        </>
    )
}
export default Rotas;