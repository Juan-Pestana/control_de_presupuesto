import React, {useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Pregunta from './components/Pregunta'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'




function App() {

  const [presupuesto, setpresupuesto] = useState(0)
  const [restante, setrestante] = useState(0)
  const [mostrarPregunta, setmostrarPregunta] = useState(true)
  const [gastos, setgastos] = useState([])
  const [gasto, setgasto] = useState({})
  const [crearGasto, setcrearGasto] = useState(false)


    //useEffect actualizar restonte
  useEffect(()=>{
    if(crearGasto){
      setgastos([...gastos, gasto]);
    }

    const presupuestoRestante = restante - gasto.cantidad 
    setrestante(presupuestoRestante)

    setcrearGasto(false)
    

  },[gasto])


 

  return (
    <>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">

            {mostrarPregunta ? 
              (<Pregunta
                setpresupuesto={setpresupuesto}
                setrestante={setrestante}
                setmostrarPregunta={setmostrarPregunta}
              />) 
            : 
              (<div className="row">
                <div className="one-half column">
                  <Formulario
                    setgasto={setgasto}
                    setcrearGasto={setcrearGasto}
                  />
                </div>
                <div className="one-half column">

                  <Listado 
                  gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />

                </div>
              </div>)}
            
            
          </div>    
        </header>
      </div>
    </>
  );
}

export default App;
