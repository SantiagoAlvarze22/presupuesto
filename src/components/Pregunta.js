import React, { Fragment, useState } from 'react'

const Pregunta = () => {

    //definir state de la cantidad ingresada
    const [cantidad, setCantidad] = useState([]);

    //funcion que lee el presupuesto

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value))
    }

    //submit para definit presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar datos 

        //se pasa la validaciòn que se hace
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

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