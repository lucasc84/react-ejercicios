import React from 'react';
import './Exercise.css'


const App = () => {
  return (
    <Layout title="Mi Componente">
      <h4>Subtítulo</h4>
      <p>Este es el contenido proyectado con children.</p>
    </Layout>
  );
};

const Layout = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default App;