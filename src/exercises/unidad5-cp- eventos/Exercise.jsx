import React from 'react'
import { useState } from 'react'

const Exercise = () => {
  const [nombre, setNombre] = useState("")
  const inputHandler = (event) => {
    console.log(event.target.value, "evento")
    setNombre(event.target.value)
  }


// input con mascara que no permita vocales
  const noVocales = (event) => {
  console.log (event.key)
  if (["a","e","i","o","u","A","E","I","O","U"].includes(event.key)) {
    // podes tambien, en vez de icluir las mayusculas, usar toLowerCase
    // if (["a","e","i","o","u"].includes(event.key.toLowerCase())) {
    // asi no hace falta poner las mayusculas, con esto indias que pase todo a minuscula y entonces entre en el preventDefault
    // tampoco estan incluidas las vocales con tilde, esun ejemplo basico
    event.preventDefault()
    alert("No se permiten vocales")
  }
}


  return (
    <div>
      <h1>Evento</h1>
      <input type="text" name="Escribe tu nombre" id="#name" placeholder='Escribe tu nombre'onChange={inputHandler}/>
      <p>Estas Escribiendo: {nombre}</p>
      <h1>Evento sin Vocales</h1>
      <input type="text" name="Escribe tu nombre" id="#name" placeholder='Escribe tu nombre'onKeyDown={noVocales}/>
      <p>Estas Escribiendo: {nombre}</p>
    </div>
  )
}

export default Exercise
