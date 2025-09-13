import React, { use, useState, useEffect } from 'react'
import ListApi from './ListApi'


const Exercise = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //pido datos
    fetch("https://dragonball-api.com/api/characters")
    //lo traduzco
    .then((response) => response.json())
    //guardo al rspuesta para poder utilziarla
    .then((data) => setData(data.items))
    .catch ((error) => console.log(error))
  }, []);

console.log('data', data)


  return (
    <div>
      <ListApi data={data}/>
      {/* {data.map ((guerrero => <p key ={guerrero.id}>{guerrero.name}</p>))}  */}
    </div>
  )

}


export default Exercise
