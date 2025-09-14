import React, { useEffect } from "react";
import useFetch from "./hooks/useFetch";

const Exercise = () => {

  //borramos el fetch claico del ejercicio anterior


  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/name/argentina")
  //     //traducir la respuesta a json
  //     .then((respuesta) => respuesta.json())
  //     //trabajar con la respuesta ya en json
  //     //traer la bandera
  //     .then((datos) => {
  //       console.log(datos);
  //       console.log(datos[0].flag);
  //     })
  //     //atrapar el error
  //     .catch((error) => console.log(error));
  // }, []);

  //hacemos una nueva funcion con el custom hook

  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/name/argentina"
  );

  // este consoloe log seria lo correcto, pero vamos a hacer uno por cada estado para verlos bien
  console.log(data, loading, error);

  //consoloe log por cada estado (data, loading, error)
  console.log(data);
  console.log(loading);
  console.log(error);


  return <div></div>;
};

export default Exercise;
