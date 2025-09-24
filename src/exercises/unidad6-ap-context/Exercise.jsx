import React from 'react'
import { useState } from 'react'
import ThemeContext from './context,jsx'
import ComponentA from './ComponentA.jsx'

function Exercise() {
  const [isDarkMode,  setIsDarkMode] = useState(true) //estado para controlar el tema

  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}> 
        <ComponentA />
    </ThemeContext.Provider>
  )
}

export default Exercise