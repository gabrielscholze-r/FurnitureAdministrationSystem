import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './config/js/auth';
// import { alignPropType } from 'react-bootstrap/esm/types'
import LoginPage from './pages/Login'
import Rotas from './config/js/routes';
import API from './config/js/API';
import axios from 'axios';
import CreateFurniture from './pages/CreateFurniture';

function App() {
  // useEffect(() =>{
  //   API.get('Home').then(res=>{
  //     console.log(res.data);
  //   })
  // }, [])
  const [logged, setLogged] = useState(false)


  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <AuthContext.Provider value={[logged, setLogged]}>
          {/* <Rotas /> */}
          <CreateFurniture/>
        </AuthContext.Provider>
      {/* </BrowserRouter> */}
    </div>

  )
}

export default App;
