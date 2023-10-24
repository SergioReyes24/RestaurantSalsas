import React from 'react'

export default function Platillos() {
    
  return (
    <div>
      <h1>Menú</h1>
        <p>
            Sólo son ingredientes fresco y los procesos más óptimos para brindarte la mejor calidad en todos y cada uno de nuestros productos. Conocemos tu apetito, por eso te presentamos un completo y riquísimo menú de entre lo que puedes elegir, sea combos, acompañamientos o nuestro completo paquete familiar...
        </p>

        <div className='Contenedor'>
            <div>
                <div>
                    <h2>-Combo 01-</h2>
                    <img className='Comida' src="https://d2r9epyceweg5n.cloudfront.net/stores/002/567/558/themes/style/1-slide-1684512947097-1344611543-076185a70455e870d0f17045e7b805221684512958-1920-1920.webp?242544022" alt="" />
                    <h4>1 persona</h4>
                    <p>1 platillo con dos acompañamientos</p>
                    <button>$140</button>
                </div>
                <br /><br /><br /><br />
                <div>
                    <h2>-Combo 03-</h2>
                    <img className='Comida' src="https://d2r9epyceweg5n.cloudfront.net/stores/002/567/558/themes/style/1-slide-1684512947097-645118475-101763bbdf49513510f70eb0ed9b3b351684512956-1920-1920.webp?242544022" alt="" />
                    <h4>2 personas</h4>
                    <p>3 platillos con dos acompañamientos</p>
                    <button>$206</button>
                </div>
            </div>

            <div>
                <div>
                    <h2>-Combo 02-</h2>
                    <img className='Comida' src="https://d2r9epyceweg5n.cloudfront.net/stores/002/567/558/themes/style/1-slide-1684512947097-8971737854-edb0ce52414846057d205d4dadf0fe111684512955-1920-1920.webp?242544022" alt="" />
                    <h4>Mucha Hambre</h4>
                    <p>2 platillos con dos acompañamientos</p>
                    <button>$179</button>
                </div>
                <br /><br />
                <div>
                    <h2>-Infantil-</h2>
                    <img className='Comida' src="https://d2r9epyceweg5n.cloudfront.net/stores/002/567/558/themes/style/1-slide-1684512947096-654564746-876f69c506ab80deab7017b24d85535a1684512953-1920-1920.webp?242544022" alt="" />
                    <h4>Poca Hambre</h4>
                    <p>1 cucharada de tu platillo favorito sobre una cama de cualquier acompañamiento.</p>
                    <button>$98</button>
                </div>
            </div>
        </div>
        
        <div>
                <br /><br />
                <h2>Para todos</h2>
                    <img className='Comida' src="https://blog.aconcaguafoods.cl/hubfs/shutterstock_2130398957.jpg" alt="" />
                    <h4>4 o 5 personas</h4>
                    <p>Cuatro de 578 gramos. Cajas, 2 platos principales y 2 guarniciones</p>
                    <button>$459</button>
                </div>

    </div>
  )
}
