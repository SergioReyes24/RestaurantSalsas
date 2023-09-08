import React from 'react'

const ServicioDomicilio = () => {
  return (
    <div>
      <h1>-A domicilio-</h1>
      <h2>¡Llámanos!</h2>
      
      <p>
            Pensando en tu comodidad, te llevamos nuestros deliciosos platillos al lugar donde te encuentres dentro de nuestra área de servicio.
      </p>

      <p>
            El servicio de envío tiene una cuota simbólica de $20 pesos, Qin no exige consumos mínimos a sus clientes.
      </p>

      <p>
            Propina a repartidores no está incluida.
      </p>
      
      <p>
            *Se aplican condiciones y restricciones.
      </p>

      <div className='Iconos'>
            
            <div>
                <img alt='Cubiertos' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADdElEQVR4nN2aTWgUMRTHo5O3bUEQBA8WFARBKQqd90YtIlVQ/Lr0JHgQRfHgQVEUFLwUFfEDCu0mW1hERRD8BvHqsVVBEPEDBZX6gdVLRQtuxVqspGXFbjPJzGwn290HuUz2H/LLe3n5WsYimgC8L4FGi0UA9cT5LgF7/29LABUEp5cSMNudCRYzVyYndGq8JPmuqxOAIwLoRDtjM6sa5B8Qp0ujjM2oehCpCqfDtQECOJSrD+bXAAgpr5yvCRABOJJnNK/qQeTYxMeDtQEC+KhGQOhPB2uZU/UgUhXP3+QEJJuhJXG+xwbh2O4EJG6J25bgdGXagqgtSHQN9k5bkHa2hkf3CH5MAQSHygT5odrpYovqYmi+TT0Ip7dlgXB6rdrpYC0NkT0CNDzlIILjhXJAlH5sQFjTrBhzZGjKQXI8WK4WqUQQSsdppWonz2h2dHh6w9IwCdSZECRXbEOt1jG8eDkVEHUUlRyvxpsbeOsG2+oV21C72shaz1+XCkgRRp2vbWGm6gXQqdJzeLZuxcKI8+Mec2ECaKepIzmgHTpdV6a5yR6K+CW180ip2dKoqtfpBBBaPDFYTAxOTDT4jcZRbfAbdbocD1YZwrEgOa12BjEGArTMBNINwVKdLusFm0MghqVHW5hrk9xvNWcrv1WnExBsC1kzjrJKmMxQmxEkQ206neC0V/f7LtY81z3FeGjtMU/aYLdOJzke0/2+s54WuKdQsc7piAlE1et0EvBMSGgdqpRHzlnS6FmdTgLlQyb757CUnapJThej7HZLTXC67vwuy2SC010LyB2dTm09wjMd9jl5WpgAMukhZ1Ko9GhBOD2u2EZRZ5LTM4tHnoToPlgG4DRzaerQE+VoOwkE8KvzmxOTqSxj9gh9CtEVLLp3zKUJoO9JbkDUk4EltAquQYaT3IBIwN9JdKmZBPpl7hCO6HU4mMSTqZlt0oaFiDr9WZJEf3q91nWI0/skI2u76BNpXQGFg+AL88hiX4juuQXkqVsQoIdJns5sOgn0wC0Ip9vmkcWbcTeNcnyOXHMLAngyyWuTVQd03ClI1gvWGz3i0VotiIcbTbqcRxucguQZQWgq5dSvHnTC78NwQA+CAxU5XIXdNmbB327UcTwQMgD73PW+tFPg75KcXqm3DPVHMgUXScdpv1ozBOBPtVMuF+IvfPQNNeR4HT8AAAAASUVORK5CYII="></img>
                
                <p>
                    Llámanos al <b>33 3647-6666</b>
                </p>
            </div>

            <div>
                    <img alt='Telefono' src="data:image/png;base64,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"></img>
                    
                    <p>
                        Pregunta por nuestros platillos disponibles en el momento
                    </p>
            </div>

            <div>
                <img alt='Reloj' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEa0lEQVR4nO1aS28URxAuNN0DKx45hUMgN04bIHbVYkVcEO8TDhwi8QuQSHKPhAFLiFMCgdnutQFZ4YQQ/jmQIE4gYZKAYl9DLGE7qp4V8c7udM/M7syso/6kklY7Pd1d1fXqqgHw8PDw8PDw8PDwqAQP4dgOJelQO2id0iF9zcS/52TrID+D/xsiOLBdhXhBSbynBL7Qkta0pI0UWovH4Hw7pPOz0Axhq6Kzo/W5lnRHS1yxMOwgXFESf44aU/thq+A+0CdKUqQlrRZnvI9WjSBgag+MM1SAZ5WkP0bIeC8J+l0FdBrGDRsA25SkGw77HhWtaYGzvCaMAxbhm0AL+qUCxhPagAu8dq3MbwBsK848LiuBz5j4d1Eh1KoJKlb7TJtVAl+zc2wHeIJDY3IuzgF0MHlSS2zz2BzzXq+H+QDPZrF5JfFPLejyfSC5+X326Eq2LjItwNHdm5/x2I7Ab7XEt1l8AidSlTIfmc1n8PaCHv0Eh3cm35+Dw3uVoFebVPllBBOfJsdpaO7SAh+7tYDeJIVYKrSku/ZTp3Ut8EqafWqJNwe8cyM1wgiaMXPafcptqDDDW3U4pyu2OZSgJwNO8YnjnRmHJvwz3/hyH9R9+lrQI5dn1oIWB7y36I44LnMoWQsiOLDdltsbhwfNXa55igiAwXauJL2zCGC51AuUCvGC4/QvZ5mnqADMHgR+Z/U/YWt6aEbTwFdaSzx+nQx1ZQiA19AClywOeA7Kgorv82kLR1nnGUYAZh8SlSUkPocycBu+atgSn05Ax6sSgKkmpfuhD6VUlpSkQ5bTX08uyuNNXYCZ7aMBKpxDAN3DsESDI1+MXADtAE/YvG8/8/jevsniAmDYolEebcwMU8BM3/zTnrES27mYLyCA+BZZYSTQFgHwZno2F5fE8glA0p2cAvi1UgG0c5gAl7jzmQD+ndduKzcBldMJshBM2jzQCW4ik1rnY74WJ/jQNDTwQ+qiweRJqAidgM5UHgZdiRA7PqgIWpK2ONPfSlwY50eRCg8DvuxwAcRijp3SFm+HdN5me1zGgpKhBX1v3UM4ea5U6WtrqwvfZrkOD1mKS70OK0l/ld5P1KbfZ0to8HEZpepuaayvkpQQwC0oG1Fjaj+Xn6wbETQz6nW1oGtjURJjcKPScRLrLIRRaEK3+XLNVRRVkn6EqhDB1B5uVDpOxJjDMOVqY/MOte+us1Sm7xkITjetidF/jnFZCfphUDcoDRxOlcRLpsbonJ/WausYa4GzGTb48ZS4ksPFDE5lk3Pxf91Ch7bF+f556SrUhY24VL2QebO9mrHCN7r4VlfsKxIl6AGMR3scCwqhODHztbfHe2M0Xq/iAwnjd+pUexvYhnPZb14SuMR1CRhnLMTdm1uuZCnnqb/nOF95qBsGnJVxr67w1x/d3J6FqRqTn8FWxSxfX8PWNF9TuWlhyx34WTyGOnyr29IfSqaBE6IonGiyLRvBhK1p89lMONHMkyx5eHh4eHh4eHh4wFD4F5nS6lku7k1mAAAAAElFTkSuQmCC"></img>
                <p>
                    Todos los días de 11:00am-8:30pm
                </p>
            </div>
      </div>

      <img className='RappiLOGO' alt='rappi' src="https://static.vecteezy.com/system/resources/previews/024/555/389/original/rappi-logo-transparent-free-png.png"></img>
        <br />
    <button className='Rappi'>ORDENA YA</button>
    <br /><br />
    </div>
  )
}

export default ServicioDomicilio