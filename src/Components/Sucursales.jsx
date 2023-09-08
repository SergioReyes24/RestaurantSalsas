import React from 'react'

export default function Sucursales() {
  return (
    <div>
      <h1>-Sucursales-</h1>
      <h2>¡Cerca de tu apetito!</h2>
      <p>
        Encuentra la sucursal más cercana y visítanos en nuestros cómodos horarios durante todo el año, <b>!Qué esperas!</b>
      </p>

      <div className='Contenedor'>
        <div>
            <div className='Sucursal'>
                <h3>Gran Plaza</h3>
                <p>
                    Av. Vallarta Col. Don Bosco Vallarta Zapopan, Jalisco. Local 0-15
                    <br />
                    <b>Todos los días</b> 11:00am - 9:00pm
                </p>
            </div>
            <div className='Sucursal'>
                <h3>Galerías</h3>
                <p>
                    Av. Rafael Sanzio y Vallarta Zapopan, Zapopan, Jalisco. Local FF07-FF08
                    <br />
                    <b>Todos los días</b> 11:00am - 9:00pm
                </p>
            </div>
            <div className='Sucursal'>
                <h3>Andares</h3>
                <p>
                    Blvd. Puerta de Hierro Fracc. Plaza Andares Zapopan, Jalisco. Local FC-17
                    <br />
                    <b>Todos los días</b> 11:00am - 9:00pm
                </p>
            </div>
            <div className='Sucursal'>
                <h3>Plaza Patria</h3>
                <p>
                    Av. Americas 1950, Plaza Patria, planta alta Local PG -10, Col. Jacarandas, C.P. 45160 Zapopan, Jalisco.
                    <br />
                    <b>Todos los días</b> 11:00am - 9:00pm
                </p>
            </div>
        </div>

        <div className='Mapa'>
            <h4>Mapa</h4>
            <img src="https://www.google.com/maps/d/thumbnail?mid=13kt4y4BDgREYyAWAlOTc7BcYxGY&hl=es_419" alt=""></img>
        </div>
      </div>
      <br />
    </div>
  )
}
