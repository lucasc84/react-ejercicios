import {useContext} from 'react'
import { ThemeContext } from './context.jsx'
import ComponentB from './ComponentB.jsx'
const ComponentA = () => {
  const {isDarkMode, toogleDarkMode} = useContext(ThemeContext) //consumimos el contexto

  console.log('ComponentA renderizado' + new Date().toLocaleTimeString())

  return (
    <div style={{backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black', height: '100vh'}}>
      <p>DarkMode is  {isDarkMode ? 'ON' : 'OFF'}</p>
      <button onClick={() => toogleDarkMode()}> Toggle Theme Dark</button>
 <ComponentB />
    </div>
  )
} 
export default ComponentA