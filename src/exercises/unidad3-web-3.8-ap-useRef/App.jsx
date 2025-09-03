import React, {useState, useRef} from 'react';
import './style.css';

const App = () => {
  const [count, setCount] = useState(0)
  const renderCount = useRef(0)

  // se ejecutará en cada renderizado/cambio de estado
  renderCount.current++;

  return (
    <div>
      <p>Contador {count}</p>
      <button onClick={ ()=> setCount(count +1) }>           
           Incrementar
       </button>
       <button onClick={ ()=> setCount(count -1) }>           
           Restar
       </button>
      <p>Este componente se ha renderizado {renderCount.current} veces.</p>
      <small>Nota: Si en index.js utilizas {"<StrictMode>"} el componente se renderizará el doble de veces</small>
    </div>
  )
}


export default App;
