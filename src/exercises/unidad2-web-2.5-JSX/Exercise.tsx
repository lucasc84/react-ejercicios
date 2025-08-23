import React from 'react';
import './Exercise.css'

export default function App() {
  const styles = { backgroundColor: '#999' };
  const user = 'Jon Foo';

  // elemento JSX
  const jsxElement = <div style={styles}>Hola Coders</div>;

  // Componente
  const Salute = () => <p style={{ marginLeft: 15 }}>Hello {user}</p>;

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log(evt);
  };

  return (
    <div>
      {jsxElement}
      <Salute />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
