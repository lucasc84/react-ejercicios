import React from 'react';
import './Exercise.css'

const App = () => {
  return (
    <div>
      <ParentComponent title="Aprendiendo Props"/>
    </div>
  )
}

const ParentComponent = (props) => {
  const handleClick = () => console.log ("SOy un callback");

  return (
 <>
    <h1>{props.title}</h1>
    <ChildComponent callback= {handleClick}/>
    <ChildComponent callback= {handleClick}/>    
</>
  )
}

const ChildComponent = (props) => (
  <button onClick={props.callback}>Click me</button>
)

export default App;