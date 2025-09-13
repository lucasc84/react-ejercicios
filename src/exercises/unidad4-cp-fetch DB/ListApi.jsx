import React from 'react'
import ApiCard from './ApiCard'

const ListApi = ({data}) => {
  return (
    <div style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
{data.map((guerrero)=> <ApiCard key ={guerrero.id} guerrero={guerrero}/>)}</div>
  )
}

export default ListApi
