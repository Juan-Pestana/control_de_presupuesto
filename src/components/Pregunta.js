import React, {useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'



function Pregunta({setpresupuesto, setrestante, setmostrarPregunta}) {

    const [cantidad, setcantidad] = useState(0)
    const [error, seterror] = useState(false)
    
    const definirPresupuesto = e =>{
        setcantidad(parseInt(e.target.value, 10));
    }

    const agregarPresupuesto = e =>{
        e.preventDefault()

        //validación
        if (cantidad < 1  || isNaN(cantidad)){
            seterror(true)
            return
        }else{
            seterror(false)
            setpresupuesto(cantidad)
            setrestante(cantidad)
            setmostrarPregunta(false)
        }

    }

    return (
        <>
            <h2>Indica tu Presupuesto</h2>
            {error ? <Error mensaje='Indica un presupuesto válido'/> : null}
            <form
                onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className='u-full-width'
                    placeholder='indica tu presupuesto'
                    onChange={definirPresupuesto}
                    />
                <input 
                    type="submit" 
                    value="Definir Presupuesto" 
                    className='button-primary u-full-width'

                    />
            </form>
        </>
    )
}

Pregunta.propTypes = {
    setpresupuesto : PropTypes.func.isRequired,
    setrestante : PropTypes.func.isRequired,
    setmostrarPregunta : PropTypes.func.isRequired

}

export default Pregunta
