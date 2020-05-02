import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({ setGasto, setCrearGasto }) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)

    //Cuando el usuario agrega un gato 
    const agregarGasto = e => {
        e.preventDefault()

        //Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }
        setError(false)

        //construir el gasto 
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasar gasto al componente principal 
        setGasto(gasto)
        setCrearGasto(true)

        //resetear el form
        setNombre('')
        setCantidad(0)
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus datos aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

export default Formulario;