import React, { Fragment, useState } from 'react'
import Error from './Error'

const Pregunta = () => {

    //definir state de la cantidad ingresada
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)
    //funcion que lee el presupuesto

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value))
    }

    //submit para definit presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar datos 
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        //se pasa la validaciòn que se hace
        setError(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primaty u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta;