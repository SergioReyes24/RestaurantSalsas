import React from 'react'

export default function Reserva() {
  return (
    <div>
      <img className='BANNER' src="https://static.wixstatic.com/media/7f29a6_167e9c5c73d140b3bce5acc176f6e96a~mv2.png/v1/fill/w_1903,h_451,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/7f29a6_167e9c5c73d140b3bce5acc176f6e96a~mv2.png" alt="" />

      <h1>Reserva</h1>
      <br /><br />
    
      <h2>Haz una reserva</h2>
      <p>
          Por disposición oficial redujimos el número de mesas por lo que te recomendamos hacer reservación.Te recordamos que no podemos ingresar mas de 5 personas. Nos vemos pronto!
      </p>

      <form action="">
        <label htmlFor="Fecha">Fecha: </label>
        <input id='Fecha' type="date"/>
        <br /><br />
        <label htmlFor="Horario">Horario: </label>
        <input id='Horario' type="time"/>
        <br /><br />
        <label>Tamaño del grupo: </label>
        <select name="Grupo" id="Grupo">
          <option value="opcion1">1 Persona</option>
          <option value="opcion2">2 Personas</option>
          <option value="opcion3">3 Personas</option>
          <option value="opcion4">4 Personas</option>
          <option value="opcion5">5 Personas</option>
        </select>
        <br /><br />
        <input id='Enviar' type="submit" />
      </form>
    </div>
  )
}
