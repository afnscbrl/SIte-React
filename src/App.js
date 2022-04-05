import React, { useState } from 'react';
import Home from './paginas/Home'
import Aulas from './paginas/Aulas'
import Cabecalho from './components/Header'
import NaoEncontrado404 from './paginas/NotFound';
import Login from './paginas/Login'
import PageModulos from './paginas/ModulosAdm';
import AulasAdm from './paginas/AulasAdm'
import Registrar from './paginas/Registrar'
import IsAuth from './context/isAuth';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import "./assets/App.css"
import "./assets/index.css"


function App() {
  const user = localStorage.getItem('User')
  const [auth, setAuth] = useState(user)

  
  function PrivateRoute({children}) {
    return auth ? children : <Navigate to ='/'/>
  }

  return (
    <Router>
      <IsAuth.Provider value={[auth, setAuth]}>
        <Cabecalho/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/aulas/:id' element={<Aulas/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registrar' element={<Registrar/>}/>
          <Route path='/modulosadm' element={
            <PrivateRoute>
              <PageModulos/>
            </PrivateRoute>
            }
            />
          <Route path='/aulasadm/:id' element={
            <PrivateRoute>
              <AulasAdm/>
            </PrivateRoute>
            }
            />
          <Route path="*" element={<NaoEncontrado404/>}/>
        </Routes>
      </IsAuth.Provider>
    </Router>

  )
}

 
export default App;
