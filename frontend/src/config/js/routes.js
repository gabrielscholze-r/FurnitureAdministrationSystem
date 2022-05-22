import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Homepage from '../../pages/Homepage/index.js';
import Login from '../../pages/Login';
import AuthContext from './auth';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Rotas() {
    let history = useHistory()
    const [cookies, setCookies] = useCookies(['auth'])
    const [Logged, setLogged] = useContext(AuthContext)
    function rota(Logged) {
        if (Logged) {
            return (
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/Home"><Homepage /></Route>
                </Switch>
            )
        }
        else {
            if(cookies.log=="true"){
                setLogged(true)
            }
            return (
                <Switch >
                    <Route exact path="/"><Login /></Route>
                    <Route exact path="/Login"><Login /></Route>

                </Switch>
            )
        }
    }
    return (
        <>
            {rota(Logged)}
        </>
    )
}
export default Rotas;