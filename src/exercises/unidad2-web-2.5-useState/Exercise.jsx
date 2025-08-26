import React from 'react';
import { useState } from 'react';  // 1. Import hook
import './Exercise.css'

const App = () => {
    //2. Inicializar estado
    const [buttonText, setButtonText] = useState("Clickeame");

    return (
        <div>
               {/* 3. Generar un cambio de estado */}
               <button onClick={() => setButtonText("Gracias!")}>{buttonText}</button>
        </div>
    )
}

export default App;