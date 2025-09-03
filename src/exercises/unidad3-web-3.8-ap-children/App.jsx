import React from 'react';
import './styles.css';

const App = () => {
  return (      
      <Layout title="Título del componente">
         <h4>Subtítulo</h4>
         <p>Cuerpo de Texto del Layout</p>      
      </Layout>  
  )
}

const Layout = (props) => {
  console.log(props);
  return(
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default App;
