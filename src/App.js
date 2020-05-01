import React, { useState } from 'react';
import Pregunta from './components/Pregunta'


function App() {

  //definidiendo el presupuesto

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)


  return (
    <div className="Container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
