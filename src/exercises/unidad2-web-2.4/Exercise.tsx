import { useState } from 'react';
import '../../App.css'
import './Exercise.css'

function App() {

const [user, setUser]=useState('Lucas');

const handleClick = () => {
    setUser('Alberto');
}
const [count, setCount] = useState(0);
const handleClick2 = () => {
    setCount(count + 1);


}
return (
        <>
        <section className='container'>
        <h1>Hello {user}</h1>
        <button onClick={handleClick}>CAMBIAR NOMBRE {count}</button>
        <button onClick={handleClick2}>+</button>
        </section>
        </>
    );
}

export default App;