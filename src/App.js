import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
         {/* <img src={require(`./imagenes/freecodecamp-logo.png`)}  alt='Logo de freeCodeCamp'/> */}

        <img src={freecodecamplogo} className='freecodecamp-logo' alt='Logo de freeCodeCamp'/>
      </div>

      <div className='contenedor-calculadora'>
        <Boton>1</Boton>
        <Boton>+</Boton>
        <Boton>3</Boton>

        <Boton nombre='xd' gay='tu'></Boton>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;