# Tipos avanzados y funciones

> :pushpin: Los fundamentos de tipado con TypeScrip se encuentran en el folder [fundamentos](../fundamentos/README.md)

## Enums
Conjunto/set de valores predefinidos. Al tipar una variable con un enum, TypeScript solo permite asignarle uno de los elementos definidos en el enum.

**`Definición`**
> :writing_hand: Es una buena práctica nombar los enums en mayúsculas.
```js
enum ROLES {
  ADMIN = 'admin',
  SELLER = 'vendedor',
  CUSTOMER = 'cliente'
}
```
**`Asignación`**
Es igual como si se asignara un tipo de dato primitivo o un alias.
```js
type User = {
  name: string,
  username: string,
  rol: ROLES
}
```
**`Implementación`**
```js
const user: User = {
  name: 'Paola',
  username: 'pahoalapizco',
  // rol: 'cliente' // error
  rol: ROLES.CUSTOMER
}
```
**Ventajas** de utilizar enum:
1. Minimiza errores en tiempo de desarrollo e ejecución
2. Ayuda al desarrollador a ser más eficiente y a evitar bugs
3. Dependiendo del editor de código que se utilice, nos brinda tooltips con guías sobre los valores que podemos utilizar de un enum.

[Documentación](https://www.typescriptlang.org/docs/handbook/enums.html)

## Tuples
Las tuplas permiten definir arrays fuertemente tipados, esto quiere decir que define el tipo de dato de cada posición del array y por ende también la longitud del mismo.

**`Definición`**
Cuando definimos un array como una tupla, debemos asignarle los valores iniciales.
```js
let userData: [string, string, number] = [] // :x: error
let user: [string, string, number] = ['Paola Alapizco', 'pahoalapizco', 31] // :white_check_mark:
```
**`Asignación`**
Si bien al inicio definimos los valores de la tupla, estos pueden cambiar en el ciclo de vida de nuestro código. Sin embargo cuando reasignamos los valores a la tupa debemos respetar el orden de los tipos de datos y la longitud.
```js
user = [] //:x: error
user = ['Pedrito Peres'] //:x: error
user = ['Pedrito Peres', 'pepe'] //:x: error
user = ['Pedrito Peres', 'pepe', 20] // :white_check_mark:

// Push no funciona
user.push('Fulanito')// Lo ignora
```
Al igual que con los array, con las tuplas también podemos aplicar el destructuring, con la ventaja de que ya conocemos el tipo de dato que obtendremos de cada una de las posiciones.
```js
const [nombre, ,edad] = user
console.log("🚀 edad:", edad) // string
console.log("🚀 nombre:", nombre) // number
```

**Ventajas**
1. AL utilizar editores de código como VSCode + TypeScript, son los tooltips que nos ayudan a saber exactamente con que tipos de datos estamos trabajando:

| string | number |
|--|--|
| ![String](./imgs/02-tuples-desctruc-str.png) | ![Number](./imgs/02-tuples-desctruc-num.png) |
2. Podemos controlar el tamaño de un array.
