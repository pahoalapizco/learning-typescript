// Tipos inferidos

let saludo = "hola" // string

// es lo mismo que decir:
let otroSaludo: string = "hola"

// No podemos asignarle valores de distintos tipos de datos
// saludo = 20 // error: "Type 'number' is not assignable to type 'string'"


// podemos acceder a los metodos correspondientes de cada tipo de dato.
saludo.toLocaleLowerCase()
saludo.charAt(0)
// etc..

// Lo mismo ocurre con los tipos numéricos
let edad = 31 // number

edad.toExponential(0)
edad.toFixed()
// etc...
