import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

// import ICardGallery from './components/ICardGallery'

// import StateHandling from './components/StateHandling'

// import ChangeBgColor from './components/ChangeBgColor';

import ReactUseEffect from './components/ReactUseEffect'
import Products from './components/Products'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Registration from './components/Registration'




const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
