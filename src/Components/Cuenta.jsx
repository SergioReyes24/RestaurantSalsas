import React from 'react'

export default function Cuenta() {
  return (
    <div>
      <h1>Cuenta</h1>

      <div className='Contenedor'>
        <div className='Registro'>
            <h2>Registrate</h2>
            <form action="">
                <label htmlFor="Nombre">Nombre:</label>
                <input type="text" placeholder='Nombre completo' />
                <br /><br />
                <label htmlFor="Correo">Correo:</label>
                <input type="email" placeholder='usuario@correo.com'/>
                <br /><br />
                <label htmlFor="Contraseña">Contraseña</label>
                <input type="password" placeholder='****'/>
                <br /><br />
                <button type="submit">Enviar</button>
            </form>
        </div>

        <div className='Ingreso'>
            <h2>Ingresa</h2>
            <form action="">
                <label htmlFor="Correo">Correo:</label>
                <input type="email" placeholder='usuario@correo.com'/>
                <br /><br />
                <label htmlFor="Contraseña">Contraseña</label>
                <input type="password" placeholder='******'/>
                <br /><br />
                <button type="submit">Enviar</button>
            </form>
        </div>
      </div>
    </div>
  )
}
