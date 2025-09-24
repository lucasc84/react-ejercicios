import {useContext} from 'react'
import ThemeContext from './context,jsx'

function ComponentA() {
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext) //consumimos el contexto

  return (
    <div style={{backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black', height: '100vh'}}>
      <h1>Component A</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
    </div>
  )
}

export default ComponentA