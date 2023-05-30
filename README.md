# Fundamentos de TypeScript

Practica de TypeScript seguida del curso [Fundamentos de TypeScript](https://platzi.com/cursos/typescript/)

## Compilar/Transpilar archivos TypeScript
Mediante la libreria `tsc` es posible transpilar archivos `.ts` a `.js`, siendo estos últimos los que lee el navegador.

### `Compilado`
```bash
npx tsc folder/file.ts
```
obtendremos un archivo `file.js`

### `Compilado a una versión especifica`
```bash
# npx tsc folder/file.ts --targert [VERSION]
npx tsc folder/file.ts --targert es6
```
Con la instrucción `target` le indicames que transpile a la versión que le indicamos, esto es útil cuando trabajamos sobre distintas versiones de JavaScript.

### `Enviar compilado a una ruta distinta`
```bash
# npx tsc folder/file.ts --outDir [RUTA]
npx tsc folder/file.ts --outDir dist
```
Va a crear el archivo `file.js` en el directorio `dist/`

## Compilado global
Compilar manualmente archivo por archivo no es lo más viable, por eso la libreria `tsc` nos provee una solución utilizando un archivo de configuración llamado `TSConfig.json`.

En la terminal corremos el comando
```bash
npx tsc --init
```
y obtendremos el siguiente output:

```bash
Created a new tsconfig.json with:

  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```
El resultado anterior indica cuales son las configuraciónes que ya estan precargadas en el archivo `TSConfig.json` que se creó en la raíz del proyecto.

El siguiente comando permite transpilar en tiempo real los archivos `.ts`:
```bash
npx tsc --watch
```

## Tipado en TypeScript
Es el cómo declaramos una variable, esto hace referencia a la asignación del tipo de dato, conocido como **type annotation**, de este modo evitamos la mezcla de tipos de datos en una sola variable.

JavaScript a diferencia de TypeScript, nos da mucha flaxibilidad a la hora de "tipar" las variables, ya que podemos tener una variable _string_ y luego le asignamos un valor _boolean_. 

```js
// file.js
let test = null // tipo: null
test = "hola" // tipo: string
test = 333 // tipo: number
test = false // tipo: boolean
test = undefined // tipo: undefined
test = [] // tipo: array

test = { tipo: // objeto
  name: "Paho",
  lastName: "Alapizco"
}

test = (x) => console.log(x) // tipo: función
```
Este tipo de flexibilidad sino la manejamos correctamente podemos incurrir en generar bugs u obtener errores inesperados en nuestro código.

Con TypeScript podemos evitar errores de tipado y anomalías en el código.
En JS declaramos una variable de la siguiente forma:

```js
// file.js
let totalAmount = 20
```
Al momento de asignarle el `20` a la variable `totalAmount` JS sabe que es de tipo  numérica, pero a medida que código crece el tipo de dato puede cambiar.

La forma de declarar una variable en TypeScrip es la siguiente
```js
// file.ts
let totalAmount: number = 20
```
Se de clara la variable `totalAmount` seguida de dos puntos (`:`) los cuales separa la declaración del **type annotation** donde le decimos al código que esa variables `number`, con esta declaración la variable `totalAmount` solo aceptara valores numéricos a lo largo de todo el código o su scope.

## Tipos inferidos
A partir de la inicialización de una variable TypeScrip deduce (ó infiere) el tipo de dato que representa la variable, y en todo el ciclo de vida de esa variable solo aceptara valores correspondientes al tipo de dato asignado al inicio.

```js
  let saludo = "Hola" // tipo: String
  /*
  ...
  */
  saludo = 123 // error
```
### Nombres de variables iguales
TypeScript marcará como error aquellas variables con el mismo nombre a pesar de estar en archivos distintos. Esto no sucederá en entornos preconfigurados como por ejemplo Angular o React, ya que estos trabajan de forma modular o tienen un alcance (scope) para cada variable.

Para que evitar este inconveniento podemos utilizar una función auto ejecutada en cada archivo `.ts`:

```js
( () => {
  let nombre = "Paho"
})()
```

## Type: number
El tipo de dato `number` se utiliza para variables que contendran números positivos, negativos y decimales.

### Operaciones
Con JavaScript, una variable `number` puede concatenarse con un valor o variable `string` utilizacon el operador `+`:
```js
// file.js
let edad = 31 // number
edad = edad + "1" // "311" --> Stirng
```
En el ejemplo anterior lo que JS hizo fue concatenar la cadena "1" al valor de la variable `edad`, conviertiendo así a esta variable en string. Este tipo de prácticas puede incurrir en confusiones y errores.
Utilizando TypeScrit tenemos restricciones:
```js
// file.ts
let edad = 31 // number, gracias a la inferencia TS resuelva la variable como number
edad = edad + "1" // error
edad = edad + 1 // 32
```

### Variables sin inicializar
Serán señalados como errores aquellas variables que queramos usar sin haberles dado un valor inicial:

```js
// file.js
let edad: number // number

consle.log("Mi edad es:", edad) // TS lo marca como error.
```
Cuando no vamos a inicializar una variable al momento de declararla, debemos indicarle el tipo de dato que va a recibir, de lo contrario TypeScript no podra inverir su tipo de dato.

### Covnersión de string a number
El metodo para hacer la conversión es `parseInt` y solo funciona con string que contenan valores `[0-9]` incluido el punto para detonar valores decimales.

```js
let precio: number = parseInt("123")

let numeroString: string = "100"
let nuevoNumero: number;
nuevoNumero = parseInt(numeroString)

nuevoNumero = parseInt("hola") // Retornara un NaN (Not a Number)

```

### Binarios y Hexadecimales
TypeScript nos puede indicar error si intentamos definir números binarios que tengan números que no sean 0 o 1 y si declaramos hexadecimales usando valores fuera del rango:
```js
//Binarios: se definen colocando "0b" al inicio del valor
let primerBinario = 0b1010
let segundobinario = 0b1210 // error, 2 es inválido

//Hexadecimales: se definen colocando "0x" al inicio del valor
let primerHexa = 0xfff
let segundoHexa = 0xffz // error, "z" es inválido
```

## Type: boolean
Los tipos de dato `boolean` solo pueden tomar dos valores `true` o `false`.

```js
let isEnable: boolean = true
let isNew = false // Toma el tipo boolean gracias a la inferencia.

isNew = 50 // error
isEnable = "false" // error
```

## Type: string
Los tipos de dato string nos permiten almacenar valores alfanuméricos/cadena de caracteres. 
Podemos definirilo de varias formas:
1. Comillas simples:
```js
let comillaSimple = 'Esto es un string'
let comillaSimpleOk = 'Esto es un string que usa "comillas dobles"'
let comillaSimpleErr = 'Esto es un incorrecto con comillas 'simples' dentro de comillas simples' // error
```
2. Comillas dobles:
```js
let comillaDoble = "Esto es un string"
let comillaDobleOk = "Esto es un string que usa 'comillas simples'"
let comillaDobleErr = "Esto es un incorrecto con comillas "dobles" dentro de comillas dobles"
```
3. Backticks:
```js
let backtick = `Esto es un string`
let backtickComSimple = `Esto es un string que usa 'comillas simples'`
let backtickComDoble = `Esto es un stringq ue usa "comillas dobles"`
```
La última forma de asignar un valor `string` tiene varias ventajas, las dos más importantes:
1. Puede incluir textos en múltiples líneas:
```js
let texto = `
  Este es 
  un texto
  con 3 líneas
`
```
2. Podemos concatenar dentro de un mismo `string`
```js
let nombre: string = "Paho"
let edad: number = 31

let concatenar = `Hola mi nombres es ${nombre} y tengo ${edad} años.`
```

## Type: array
Los arrays son una colección ordenada de datos. Al declarar un array de un determinado tipo de dato lo debemos hacer con la siguiente sintaxis: `data_type[]` => `number[]` esto es un arreglo de numeros, `string[]` arreglo de strings...

Ejemplos:
```js
// file.ts
let precios = [1,2,3,4.5] // number[]
precios.push(5)
console.log("precios", precios)

precios.push("hola") // error
```
En el código anterior TypeScript sabe que la variable `precios` es de tipo `number[]`, por lo cuál marca un error al intentar agregar un elemento que no sea de tipo `number`.

Si intentamos hacer operaciones con un array que contiene un detemrinado tipo de dato utilizando otro tipo TypeScript nos marcara error:
```js
// file.ts
let mensaje = ["Buenos", "días"] // string[]
mensaje.map(item => item * 2) // error
```

JavaScript tiene una ventaja con los arrays, y es que en ellos podemos guardar diferente información, ya sea númerica, texto, etc. 

En TypeScript también podemos incluir más de un tipo de dato en un array, para hacerlo necesitamos indicarlo de la siguiente manera:
```js
let dosTipos: (number | string)[] = ["hola",2,4,6,"mundo"];
console.log("dosTipos:", dosTipos)

let otrosPrecios: (boolean | number)[];
otrosPrecios = [True] 

otrosPrecios.push("Hola") // error
```
