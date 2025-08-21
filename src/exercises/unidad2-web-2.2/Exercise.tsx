import '../../App.css'
import './Exercise.css'

function App() {

const user ='Lucas'; 

return (
        <>
        <section>
        <h1>Hola usuario</h1>
        <p>Ejemplo 1 con solo HTML</p>
        </section>

        <section>
        <h1>Hola {user}</h1>
        <p>Ejemplo 2 usando HTML y JS</p>
        </section>

        <section className='container'>
        <h1>Hola {user}</h1>
        <p style= {{color: 'red',fontSize: '2rem'}}>Ejemplo 2 usando HTML, JS y CSS</p>
        </section>
        </>
    )

}
export default App