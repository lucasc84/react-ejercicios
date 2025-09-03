import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const Exercise = () => {
  return (      
      <Layout title="Título del componente">
         <h4>Subtítulo</h4>
         <p>Cuerpo de Texto del Layout</p>      
      </Layout>  
  );
}

const Layout = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default Exercise;
