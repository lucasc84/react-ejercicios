import React, { use, useState, useEffect } from 'react'

const Exercise = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //pido datos
    fetch("https://dragonball-api.com/api/characters")
    //lo traduzco
    .then((response) => response.json())
    //guardo al rspuesta para poder utilziarla
    .then((data) => {console.log(data, 'data')
    })
  }, []);




  return (
    <div>
      
    </div>
  )

}


export default Exercise
