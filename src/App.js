import React, { useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'


function App() {

  //definidiendo el presupuesto

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarPregunta, setMostrarPregunta] = useState(true)
  const [gastos, setGastos] = useState([])

  //funcion se va a ejcutar uando agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto => {
    setGastos([
      ...gastos,
      gasto
    ])
  }

  return (
    <div className="Container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta
            ?
            (
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarPregunta={setMostrarPregunta}
              />
            )
            :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>
                <div className="one-half column">
                  2
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
