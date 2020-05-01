import React, { useState } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);

    //Cuando el usuario agrega un gato 
    const agregarGasto = e => {
        e.preventDefault()

        //Validar


        //construir el gasto 


        //pasart gasto al componente principal 

        //resetear el form
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus datos aqui</h2>
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