import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({setgasto, setcrearGasto}) => {

    const [nombre, setnombre] = useState('')
    const [cantidad, setcantidad] = useState(0)
    const [error, seterror] = useState(false)

    const agregarGasto = e =>{
        e.preventDefault()

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            seterror(true)
            return
        }
        seterror(false)

        //construir el gasto
        const gasto = {nombre, cantidad, id: shortid.generate()}
        //pasar el gasto al componente principal

        setgasto(gasto)
        setcrearGasto(true)

        //resetear el formulario
        setnombre('')
        setcantidad(0)

    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos</h2>
            {error && <Error mensaje= 'Ambos campos son obligatorios o Presupuesto incorrecto'/>}
            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text" 
                    name="" 
                    value={nombre}
                    className='u-full-width' 
                    placeholder='Ej.transporte'
                    onChange={e => setnombre(e.target.value)}
                    />
            </div>
            <div className="campo">
                <label>Gasto</label>
                <input 
                    type="number" 
                    name=""
                    value={cantidad} 
                    className='u-full-width' 
                    placeholder='Ej.300'
                    onChange={e => setcantidad(parseInt(e.target.value, 10))}
                    />
            </div>
            <input 
                type="submit"
                className='button-primary u-full-width'
                value='gasto'
                />
            
        </form>
    )
}

Formulario.propTypes = {
    setgasto : PropTypes.func.isRequired,
    setcrearGasto : PropTypes.func.isRequired

}

export default Formulario
