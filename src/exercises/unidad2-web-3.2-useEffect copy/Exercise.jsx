import { useState, useEffect } from "react";

export default function CicloDeVida() {
    const [data, setData] = useState('cargando...');

    useEffect(() => {
        console.log("Componente montado");
        // Simular una llamada a una API
        const timer = setTimeout(() => {
            setData("Datos cargados");
        }, 2000);

        return () => {
            clearTimeout(timer);
            console.log("Componente desmontado");
        };
    }, []);

    const handleClick = () => {
        setData("Datos actualizados");
    }
    return (
        <section>
            <h1>{data}</h1>
            <button onClick={handleClick}>Actualizar la variable de estado</button>
        </section>
    )
}