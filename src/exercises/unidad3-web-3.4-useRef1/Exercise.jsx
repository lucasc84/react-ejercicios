import { useRef } from 'react';

const App = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.innerHTML = "Nuevo contenido";
  };

  return (
    <div>
      <div ref={divRef}>Contenido original</div>
      <button onClick={handleClick}>Cambiar contenido</button>
    </div>
  );
};

export default App;