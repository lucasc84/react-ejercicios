import React from 'react'


const ApiCard = ({guerrero}) => {
  return (
      <div className="card" style={{width: '18rem'}}>
  <img style={{height: '25rem', width: 'fit-content' }}src={guerrero.image} className="card-img-top" alt={guerrero.name}/>
  <div className="card-body">
    <h5 className="card-title">{guerrero.name}</h5>
    <p className="card-text">{guerrero.description}</p>
    <a href="#" className="btn btn-primary">Ver más...</a>
  </div>
</div>
  )
}

export default ApiCard
