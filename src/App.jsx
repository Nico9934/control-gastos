import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import iconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  
  const [modal, setModal] = useState (false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)
    console.log('Agregando nuevo gasto');
    setTimeout(() => {
        setAnimarModal(true)
    }, 300);
  }


  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img
            src={iconoNuevoGasto} 
            alt="Icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
      </div>  
      )}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
      />}

    </div>
    
  )
}

export default App
