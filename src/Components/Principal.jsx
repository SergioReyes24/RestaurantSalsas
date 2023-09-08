import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ServicioDomicilio from './ServicioDomicilio'
import Sucursales from './Sucursales'
import { Menu } from './Menu'
import Footer from './Footer'
import Platillos from './Platillos'
import Cuenta from './Cuenta'
import Inicio from './Inicio'

export default function App() {

  return (
    <div> 
      <BrowserRouter>
        <Menu/>
        <Inicio/>
        <Routes>
            <Route path='/Platillos' element={<Platillos/>} />
            <Route path='/ServicioDomicilio' element={<ServicioDomicilio/>} />
            <Route path='/Sucursales' element={<Sucursales/>} />
            <Route path='/Cuenta' element={<Cuenta/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
