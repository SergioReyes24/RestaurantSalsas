import React from 'react'


function Productos() {
  return (
    <div>
      <img className='BANNER' src="/images/chiles.jpg" alt="" />

      <h1>Productos</h1>

      <div className='Contenedor'>
            <div>
                <div>
                    <img className='Comida' src="https://d2r9epyceweg5n.cloudfront.net/stores/002/567/558/products/verde-100-gr-producto-sku-04ldv11-e7b05bd3563fbecc2f16872168185063-1024-1024.webp" alt="" />
                    <br /><br />
                    <h2>Salsas la doñita 100gr - Verde</h2>
                    <p>
                        Salsas La Doñita Presentación 100 gr etiqueta verde ligeramente picosa. Es la presentación ideal para llevar a donde quieras y poner ese toque especial a tus platillos, ideal para todo tipo de platillos y botanas.
                    </p>
                    <button>$43</button>
                </div>

                <br /><br /><br /><br />

                <div>
                    <img className='Comida' src="https://d2r9epyceweg5n.cloudfront.net/stores/002/567/558/products/verde-200-gr-producto-sku-02ldv21-69a65692a26621ce1816868696505922-1024-1024.webp" alt="" />

                    <h2>Salsas la doñita 200gr - Verde</h2>
                    <p>
                    Salsas La Doñita presentación 200 gr etiqueta verde ligeramente picosa. Es la presentación ideal para compartir con toda la familia y amigos, especial para todo tipo de platillos y botanas.
                    </p>
                    <button>$75</button>
                </div>
            </div>

            <div>
                <div>
                <img className='Comida' src="https://d2r9epyceweg5n.cloudfront.net/stores/002/567/558/products/roja-100-gr-producto-sku-03ldr11-4e52bbdd4630f8599c16868696308573-1024-1024.webp" alt="" />
                <br /><br />
                <h2>Salsas la doñita 100gr - Roja</h2>
                <p>
                    Salsas La Doñita presentación 100 gr etiqueta roja picosa. Es la presentación ideal para llevar a donde quieras y poner ese toque especial a tus platillos, especial para todo tipo de platillos y botanas.
                </p>
                <button>$43</button>
                </div>
                <br /><br /><br /><br /><br />
                <div>
                    <img className='Comida' src="https://d2r9epyceweg5n.cloudfront.net/stores/002/567/558/products/roja-200-gr-producto-sku-01ldr21-23971effa540e880de16868701695360-1024-1024.webp" alt="" />
                    <h2>Salsas la doñita 200gr - Roja</h2>
                    <p>
                        Salsas La Doñita Presentación 200 gr Etiqueta Roja Picosa. Es la presentación ideal para compartir con toda la familia y amigos, especial para todo tipo de platillos y botanas.
                    </p>
                    <button>$75</button>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Productos
