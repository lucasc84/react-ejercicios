import React from 'react';
import '../../App.css';

// Componente React
const ButtonReact = () => {
  const saludar = () => {
    alert('Holis dsde react');
  };
  return (
    <button className="mi-boton" onClick={saludar}>
      Boton React
    </button>
  );
};

// Código fuente HTML+CSS+JS
const htmlCode = `<!DOCTYPE html>
<html lang=\"en\">
  <head>
    <title>Home</title>
    <meta charset=\"UTF-8\" />
    <meta name=\"viewport\" content=\"width=device-width\" />
    <link rel=\"stylesheet\" href=\"styles.css\" />
  </head>
  <body>
    <main>
      <button>Boton HTML</button>
      <div id=\"root\"></div>
    </main>
  </body>
  <script>
    function agregarBoton() {
      const rootDiv = document.getElementById('root');
      if (!rootDiv) {
        console.error('No se encontró el div');
        return;
      }
      const boton = document.createElement('button');
      boton.textContent = 'Boton JS';
      boton.classList.add('mi-boton');
      boton.addEventListener('click', function () {
        alert('Holis 😊');
      });
      rootDiv.appendChild(boton);
    }
    agregarBoton();
  </script>
</html>`;
const jsCode = `function agregarBoton() {
  //1. Seleccionar el div de id root
  const rootDiv = document.getElementById('root');

  //2. Verificamos que el div exista
  if (!rootDiv) {
    console.error('No se encontró el div');
    return; //para salir de la funcion
  }

  //3. Crear un nuevo boton
  const boton = document.createElement('button');

  //4. Agregar texto al boton
  boton.textContent = 'Boton JS';

  //5. aGREGAR UNA CLASE PARA ESTILOS
  boton.classList.add('mi-boton');

  //6. Agregamos un evento click al boton
  boton.addEventListener('click', function () {
    alert('Holis 😊');
  });

  //7. Agregamos el boton al div
  rootDiv.appendChild(boton);
}

//llamaos a la funcion
agregarBoton();`;

const cssCode = `* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, sans-serif; color: black; background-color: white; }
nav { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; padding: 0.5rem; gap: 0.5rem; border-bottom: solid 1px #aaa; background-color: #eee; }
nav a { display: inline-block; min-width: 9rem; padding: 0.5rem; border-radius: 0.2rem; border: solid 1px #aaa; text-align: center; text-decoration: none; color: #555; }
nav a[aria-current='page'] { color: #000; background-color: #d4d4d4; }
main { padding: 1rem; }
h1 { font-weight: bold; font-size: 1.5rem; }
.mi-boton { padding: 2rem; background-color: yellow; color: black; font-weight: bold; }`;

export default function Exercise() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Ejemplo con React</h2>
      <ButtonReact />
      <pre style={{ background: '#f6f6f6', padding: '1rem', marginTop: 16 }}>
        {`// ButtonReact.jsx\n\nconst ButtonReact = () => {\n  const saludar = () => {\n    alert('Holis dsde react');\n  };\n  return (\n    <button className=\"mi-boton\" onClick={saludar}>\n      Boton React\n    </button>\n  );\n};\nexport default ButtonReact;`}
      </pre>

      <h2>Ejemplo con HTML + CSS + JS puro</h2>
      <iframe
        srcDoc={`<html><head><style>${cssCode}</style></head><body><main><button>Boton HTML</button><div id='root'></div><script>function agregarBoton(){const rootDiv=document.getElementById('root');if(!rootDiv){console.error('No se encontró el div');return;}const boton=document.createElement('button');boton.textContent='Boton JS';boton.classList.add('mi-boton');boton.addEventListener('click',function(){alert('Holis 😊');});rootDiv.appendChild(boton);}agregarBoton();</script></main></body></html>`}
        style={{ border: '1px solid #ccc', width: 350, height: 120, marginTop: 16 }}
        title="Ejemplo JS puro"
      />
      <h3 style={{ marginTop: 24 }}>Código fuente HTML</h3>
      <pre style={{ background: '#f6f6f6', padding: '1rem' }}>{htmlCode}</pre>
      <h3 style={{ marginTop: 24 }}>Código fuente CSS</h3>
      <pre style={{ background: '#f6f6f6', padding: '1rem' }}>{cssCode}</pre>
      <h3 style={{ marginTop: 24 }}>Código fuente JS</h3>
      <pre style={{ background: '#f6f6f6', padding: '1rem' }}>{jsCode}</pre>
    </div>
  );
}
