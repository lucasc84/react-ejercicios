import React, { useEffect } from "react";

const Exercise = () => {
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/argentina")
      //traducir la respuesta a json
      .then((respuesta) => respuesta.json())
      //trabajar con la respuesta ya en json
      //traer la bandera
      .then((datos) => {
        console.log(datos);
        console.log(datos[0].flag);
      })
      //atrapar el error
      .catch((error) => console.log(error));
  }, []);

  return <div></div>;
};

export default Exercise;
