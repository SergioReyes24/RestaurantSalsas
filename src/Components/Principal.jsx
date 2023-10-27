import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ServicioDomicilio from './ServicioDomicilio'
import Sucursales from './Sucursales'
import { Menu } from './Menu'
import Footer from './Footer'
import Platillos from './Platillos'
import Reserva from './Reserva'
import Inicio from './Inicio'

export default function App() {

  return (
    <div> 
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path='/Inicio' element={<Inicio/>}></Route>
            <Route path='/Platillos' element={<Platillos/>} />
            <Route path='/ServicioDomicilio' element={<ServicioDomicilio/>} />
            <Route path='/Sucursales' element={<Sucursales/>} />
            <Route path='/Reserva' element={<Reserva/>} />
            <Route path='*' replace element={<Navigate to="/Inicio" />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
