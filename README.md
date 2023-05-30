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
