import React, { useState } from 'react'
import {ThemeProvider} from './context.jsx'
import ComponentA from './ComponentA.jsx'

function Exercise() {

  return (
    <ThemeProvider> 
        <ComponentA />
    </ThemeProvider>
  )
}

export default Exercise