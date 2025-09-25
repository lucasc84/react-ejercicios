import {memo} from 'react'

const ComponentB = memo (() => {
    console.log('ComponentB renderizado ' + new Date().toLocaleTimeString())
  return (
      <p>Componente B, hijo de A</p>

  )
})

export default ComponentB
