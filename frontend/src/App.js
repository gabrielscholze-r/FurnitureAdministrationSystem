import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './config/js/auth';
// import { alignPropType } from 'react-bootstrap/esm/types'
import LoginPage from './pages/Login'
import Rotas from './config/js/routes';
import API from './config/js/API';
import axios from 'axios';
import ContentContext from './config/js/content';
import KartShop from './config/js/kart';
import { CookiesProvider } from 'react-cookie'
function App() {
  const [logged, setLogged] = useState(false)
  const [content, setContent] = useState(0)
  const [kart, setKart] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <CookiesProvider>
          <AuthContext.Provider value={[logged, setLogged]}>
            <ContentContext.Provider value={[content, setContent]}>
              <KartShop.Provider value={[kart, setKart]}>
                <Rotas />
              </KartShop.Provider>
            </ContentContext.Provider>
          </AuthContext.Provider>
        </CookiesProvider>
      </BrowserRouter>
    </div>

  )
}

export default App;
