//sugar syntax

//destructuring

//objetos

const persona = {
    name: 'Lucas',    
    mail: 'sdsd@sdsd.com',
    edad: 30
}

const nombre = persona.name;

const {name, mail, edad} = persona;

console.log(name, mail, edad)

//arraya

const colores = ['rojo', 'verde', 'azul'];

console.log(colores[0]), colores[1], colores[2];

const [primero, segundo, tercero] = colores;

//spread operator

const numeros = [1,2,3,4,5];
const numerosNuevos = numeros.concat(6,7,8,9,10);

const numeroSugar = [...numeros, 6,7,8,9,10];

// operador ternario

let mensaje;

if (edad >= 18) {
    mensaje = 'Mayor de edad';
} else {
    mensaje = 'Menor de edad';
}

    
    const mensajeSugar = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';

// arrow

function suma(a, b) {
    return a + b;
}

const sumarArrow = (a, b) => a + b;
return a + b;

const sumarSuperSUgar = (a, b) => a + b;