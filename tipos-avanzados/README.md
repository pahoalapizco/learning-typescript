# Tipos avanzados y funciones

> :pushpin: Los fundamentos de tipado con TypeScrip se encuentran en el folder [fundamentos](../fundamentos/README.md)

## New types

### Enums
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
  // rol: 'cliente' //❌ error
  rol: ROLES.CUSTOMER
}
```
**Ventajas** de utilizar enum:
1. Minimiza errores en tiempo de desarrollo e ejecución
2. Ayuda al desarrollador a ser más eficiente y a evitar bugs
3. Dependiendo del editor de código que se utilice, nos brinda tooltips con guías sobre los valores que podemos utilizar de un enum.

[Documentación](https://www.typescriptlang.org/docs/handbook/enums.html)

### Tuples
Las tuplas permiten definir arrays fuertemente tipados, esto quiere decir que define el tipo de dato de cada posición del array y por ende también la longitud del mismo.

**`Definición`**
Cuando definimos un array como una tupla, debemos asignarle los valores iniciales.
```js
let userData: [string, string, number] = [] //❌ error
let user: [string, string, number] = ['Paola Alapizco', 'pahoalapizco', 31]
```
**`Asignación`**
Si bien al inicio definimos los valores de la tupla, estos pueden cambiar en el ciclo de vida de nuestro código. Sin embargo cuando reasignamos los valores a la tupa debemos respetar el orden de los tipos de datos y la longitud.
```js
user = [] //❌ error
user = ['Pedrito Peres'] //❌ error
user = ['Pedrito Peres', 'pepe'] //❌ error
user = ['Pedrito Peres', 'pepe', 20]

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

### Unknown
Su traducción literal al español es "desconocido", es una forma de decirle a una variable en TypeScript que su tipo de dato no lo conocemos, nos da la flexibilidad del tipo `any`, pero nos advierte (o avisa) que primero debemos verificar el tipo de dato antes de aplicarle alguna funcionalidad.

**`Definición`**
```js
let unknownVar: unknown
```
**`Asignación`**
En ninguna de las asignaciones siguientes obtenemos un ❌ error, porque tenemos la flexibilidad de asignarle cualquier tipo de dato.
```js
unknownVar = "Hello" // string
unknownVar = true // bollean
unknownVar = 123 // number
unknownVar = {} // object
```

**`Implementación`**
Cuando tenemos un tipo `unknown` antes de aplicar alguna funcionalidad, como un `toLowerCase()` para los strings primero debemos verificar que el tipo de dato que contiene la variable sea un `string`.
```js
unknownVar.toLowerCase() //❌ error

if(typeof unknownVar === "string"){
  unknownVar.toLowerCase()
}
```
La verificación de tipos también aplica cuando queremos asignar una variable uknown a una variable tipada
```js
let isBool: boolean
isBool= unknownVar // ❌ error

if(typeof unknownVar === "boolean"){
  isBool= unknownVar // ❌ error
}
```

**Ventajas**
1. Tenemos flexibilidad para asignar distintos tipos de datos a una variable.
2. Evita errores en tiempo de desarrollo al sugerirle al programador que primero verifique el tipo de dato antes de realizar cualquier acción con la variable.

> :writing_hand: Nota: Aunque uknown tiene mayor ventaja sobre any, es recomendable evitar hacer uso de estos recursos.

## Funciones

### Parámetros opcionales y nullish-coalescing
En una función los parametros opcionales son aquellos que podemos no enviar como argumento cuando la ejecutamos.
<br>

**`Definición`**
Los parámetros opcionales llevan el simobolo `?` inmediatamente despues del nombre y se posicionan al final.
```js
// ❌ error
const createPorductWithError = (
    id: number, 
    stock?: number, // debe ir al final
    name: string, 
    isNew?: boolean
  ) => {/*...*/}


const createPorduct = (
    id: number, 
    name: string, 
    stock?: number, 
    isNew?: boolean 
  ) => {/*...*/}
```
Es la función quien se encarga de verificar si se recibio o no el parámetro y en base a eso hace algo. Algunas formas sencillas de verificar si se recibió el valor de un detemrinado parámetro son:
- `||` (or operator): Si la expresión izquierda es falsy entonces obtendremos la expresión de la derecha como resultado.
- `??`  (nullish-coalescing): Si y solo si la expresión izquierda es null o undefind entonces obtendremos la expresión de la derecha como resultado.

**`Implementación`**
Ejemplo con un or operator (`||`)
```js
const createPorduct = (
    id: number, 
    name: string, 
    stock?: number, 
    isNew?: boolean 
  ) => {
    return {
      id,
      name,
      stock: stock || 10,
      isNew: isNew || true
    }
  }

  const prod1 = createPorduct(1, 'hat')
  const prod2 = createPorduct(1, 'hat', 0, false)

  console.log("🚀 prod1:", prod1)
  console.log("🚀 prod2:", prod2)
```
El inconveniente con el operador or `||` es que evalua los valores `falsy`:
- `false`
- `0`
- `""`
- `null`
- `undefined`
- `NaN` 

En el ejemplo anterior necesitamos respetar los valores `0` y `false` que corresponden a los valores de los parámetros. 
<br>

![Or Operation](./imgs/04-optionals-or-op.png)

Para solucionar ese problema existe el nullish-coalescing `??` que evaluará solo cuando sea `null` o `undefined`.
<br>

Ejemplo con nullish-coalesing operator (`??`)
```js
const createPorduct = (
    id: number, 
    name: string, 
    stock?: number, 
    isNew?: boolean 
  ) => {
    return {
      id,
      name,
      stock: stock ?? 10,
      isNew: isNew ?? true
    }
  }

  const prod1 = createPorduct(1, 'hat')
  const prod2 = createPorduct(1, 'hat', 0, false)

  console.log("🚀 prod1:", prod1)
  console.log("🚀 prod2:", prod2)
```
![Or Operation](./imgs/04-optionals-nullish.png)

Utilizando `??` obtenemos los valores que requerimos asignar solo cuando no recibimos los parámetros.

**Ventajas**
1. Forma sencilla de validar si y solo si el valor es undefined o null, y respeta los valores `0`, `false` y vació `""`.

### Parámetros por defecto
Al momento de declarar la función y especificar sus parámetros en lugar de definir un parametro opcional podemos definirle su valor por defecto, así independientemente si le pasamos o no el argumento la función le asigna un valor.

**`Definición`**
Los parametros por defecto van al final.
```js
const createPorduct = (
    id: number, 
    name: string, 
    stock: number = 10, 
    isNew: boolean =true
  ) => {
    id,
    name,
    stock,
    isNew
  }
```
**`Implementación`**
```js
const prod1 = createPorduct(1, 'hat')
const prod2 = createPorduct(2, 'hat', 0, false)
const prod3 = createPorduct(3, 'hat', 25)

console.log("🚀 prod1:", prod1)
console.log("🚀 prod2:", prod2)
console.log("🚀 prod3:", prod3)
```

**Ventajas**
1. Mayor legibilidad de código.
2. Menos líneas de código.

### Parámetros Rest
Es una funcionalidad de JavaScript que nos permite representar una cantiad indefinida de parametros en un array. La forma de definirnos en la función es mediante el spread operators (`...`).
**`Definición en JavaScript`**
```js
const myFunction = (...args) => console.log(args)
```
**`Implementación en JavaScript`**
```js
myFunction(1,2,3,"Hello", false, { "key": "value" })
// Resultado: [1,2,3,"Hello", false, { "key": "value" }]
```

Al ser una funcionalidad de JavaScript también podemos hacer uso de ella en TypeScript pero con la ventaja de aplicar un tipo de dato especifico a los argumentos.

**`Definición en TypeScript`**
```js
const myFunction = (...args: string[]) => console.log(args)
```
**`Implementación en TypeScript`**
```js
myFunction(1,2,3,"Hello", false, { "key": "value" }) //❌ error

myFunction("Este", "Es", "Un", "Ejemplo", "De", "Parametros", "Rest")
// Resultado: ["Este", "Es", "Un", "Ejemplo", "De", "Parámetros", "Rest"]
```
Al asignarle un tipo de dato a los parámetros rest con TS podemos aplicar las funciones nativas de cada tipo. <br>
Por ejemplo:

```js
const otherFunction = (...args: string[]) => {
    const lowerArr = args.map((item: string) => (item.toLowerCase()))
    console.log("🚀 lowerArr:", lowerArr.join(' '))
  }

  otherFunction("Este", "Es", "Un", "Ejemplo", "De", "Parametros", "Rest")
  // Resultado: 🚀 lowerArr: este es un ejemplo de parametros rest
```
**Ventajas**
1. Seguimos teniendo la fexibilidad de JavaScript para manejar parámetros indefinidos, pero aplicando los super poderes del tipado con TypeScript.

### Sobrecarga de funciones
La sobrecarga de funciones es cuando definimos más de una función con el mismo nombre pero con diferente numero de parámetros, o en el caso de TypeScript cuando regres diferetnes tipos de datos (union type).

> :writing_hand: **NOTA** Solo podemos implementar sobrecarga de funciones con la notación tradicional: `function(params){ ... }`

**`Definición (Sobrebarga en retorno de tipos de datos)`**
```js
function parseStr(input: string | string[]): string | string[] {
    if(typeof input === "string") {
      return input.split("")
    } else {
      return input.join("")
    }
  }
```
**`Implementación`**
```js
let parsedText = parseStr("Paho") // retorna [...]
let parsedArray = parseStr(["P", "a", "h", "o"]) // retorna "..."
```
El inconveniente que tenemos con la sobrecarga definida en la función `parseStr`, es que TypeScript no infiere el tipo de dato retornado, sabe que va a regresar uno u otro, pero no exactamente cuál obtuvo de retorno.  <br>
Para corroborar el tipo de dato que regresó a función podemos aplicar una validación de tipos:
```js
if(typeof parsedText === 'string') {
  console.log("🚀", parsedText.toUpperCase())
} else if (Array.isArray(parsedText)){
  const test = parsedText.map(item => (item + "-word"))
  console.log("🚀 test:", test)
}
```
El código funciona pero no es lo más viable, para ello podemos implementar la sofrecarga de la siguiente manera:
```js
function parseStrV2(input: string): string[]
function parseStrV2(input: string[]): string
function parseStrV2(input: unknown): unknown {
  if(typeof input === "string") {
    return input.split("")
  } else if (Array.isArray(input)) {
    return input.join("")
  }
}
let parsedArrayV2 = parseStrV2(["P", "a", "h", "o"])
console.log("🚀 parsedArrayV2", parsedArrayV2)
```
Lo que ocurre con esta forma de sobrecargar funciones, es que estamos separando cada una de las posibles entradas y respuestas (en cuanto a tipado), de esta manera TypeScript interpreta que si recibe un `string` entonces regresará un array de strings (`string[]`). La expresión `function parseStrV2(input: unknown): unknown ` es el éltimo posible caso de la sobre carga y se toma como un default.

### Interfaces
Son una de las características más utilizadas en proyectos basados en TypeScript, ya que describen la estructura de los objetos o como debería verse un obeto. <br> 
Es similar al `type` (cuando creamos alias) con la diferencia de que una `interface` puede extenderce (heredarse).

**`Definición`**
```js
type Size = "S" | "M" | "L" | "XL"

// definición
interface Product {
  name: string,
  price: number,
  createAt: Date,
  size: Size,
  stock?: number,
  addProduct: function
}
```
**`Implementación`**
La forma de implementar una interface es igual a la de un alias/type. Puede usarse para tipar un objeto, array, parametros y retorno de funciones,
```js
// objeto
const product: Product = {
  name: 'hat',
  price: 30,
  createAt: new Date(),
  size: "M",
  addProduct: () => console.log(this.name)
}
// array

// función
const addProducts = (data: Product): Product[] => {
  // array
  const products: Product[] = []
  products.push(data)
  return products
}
```

## Utility types
Utilidades especiale que porporciona TypeScript para hacer código reutilizable. 

### DTOs
No es un utility type, es más bien un concepto/práctica utilizado en programación para definir los datos con los que vamos a trabajar. DTO por sus iniciales de "_Data Transfer Object_" usualmente son utilizados para mapear datos de Bases de Datos, y como es el caso cuando trabajamos con BBDD al hacer un `INSERT` hay datos que no es necesario mandarlos explicitamente, como por ejemplo los `id's`, la propia BBDD los genera o el `createdAt` que se puede declarar como un default. 
```js
{
  id: '123456',
  name: 'Hat',
  price: 50,
  createdAt: '2023-06-09'
}
```
Así que podriamos omitr esos datos que son autogenrados, sin embargo esto no quiere decir que los datos no esten o no pertenezcan al objeto, sino que al momento de crearlos no son requeridos.
```js
{
  name: 'Hat',
  price: 50,
}
```

### Omit
`Omit` si es un utility type, y como su nombre lo dice, nos permite omitir propiedades, datos, campos que no necesitamos mandar para una acción en especifico. En el ejemplo descrito en el apartado de DTO serian `id` y `createAt`.

**`Definición`**
Con type:
```js
type CreateProductDTO = Omit<Product, 'id', 'createdAt' >
```
Con interface:
```js
interface CreateProductDTO extends Omit<Product, 'id', 'createdAt' > {
  // Cuerpo de con los objetos adicionales que tendría la interface DTO
}
```

### Pick
El utility type `Pick` es lo contrartio a `Omit`, ya que le decimos las propiedades que queremos tener en el objeto DTO.

**`Definición`**
Con type:
```js
type CreateProductDTO = Pick<Product, 'id', 'createdAt' >
```
Con interface:
```js
interface CreateProductDTO extends Pick<Product, 'name', 'price' > {
  // Cuerpo de con los objetos adicionales que tendría la interface DTO
}
```

> :writing_hand: **Nota**: Es una buena práctica separar los DTOs en archivos distintos a las Interfaces.

### Partial
Utilidad que nos permite crear `types` o `interfaces` a partir de otra y convertir su atributos en opcionales. 

**`Definición`**
Con type
```js
type UpdateProductDTO = Partial<Product>
```
Con enterface
```js
interface UpdateProductDTO extends Partial<Product> { /*...*/ }
```

> :writing_hand: **NOTA** También podemos utilizar Partial a partir de un DTO, ya que los DTOs también son interfaces

Con enterface
```js
interface UpdateProductDTO extends Partial<CreateProductDTO> { /*...*/ }
```

### Required
Es el contrario de Partial, con esta utilidad hacemos que todas las propiedades de una interfaz previa sean requeridas.
**`Definición`**
Con type
```js
type UpdateProductDTO = Required<Product>
```
Con enterface
```js
interface UpdateProductDTO extends Required<Product> { /*...*/ }
```

> :writing_hand: **NOTA** También podemos utilizar Required a partir de un DTO, ya que los DTOs también son interfaces

Con enterface
```js
interface UpdateProductDTO extends Required<CreateProductDTO> { /*...*/ }
```

### Readonly
Aplica de forma general la propiedad readonly a todos los atributos del `type` o `interface` que tomemos como base.

**`Definición`**
Con type
```js
type FindProductsDTO = Readonly<Product>
```
Con enterface
```js
interface FindProductsDTO extends Readonly<Product> { /*...*/ }
```
Si bien en el ejemplo se aplica el utility type `Readonly` a la interface `Product`, esto ocasionaria un inconveniente ya que TypeScript nos pediria que en la definición de un objeto tupado como `FindProductsDTO` le mandemos TODAS las propiedades definidad en la interface original. <br>
Para resolver ese problema (claro dependiendo del caso) podemos combilar `Readonly` y `Partial` para hacer más flexible a `FindProductsDTO`
```js
interface FindProductsDTO extends Readonly<Partial <Product> > { /*...*/ }
```
### ReadonlyArray
Este utility type evita la mutación de un array. Ideal para prevenir cambios arbitrarios a un array durante el desarrollo. 
**`Definición`**
Con variables
```js
const array: ReadonlyArray<number> = [1, 2, 3]
array.push(4) //❌ error
```
Con types
```js
type Product = {
  name: string,
  description: string,
  image: string,
  color: string,
  price: number,
  tags: ReadonlyArray<string>[]
  // .....
}
```
Extendiendo de una interface
```js
interface FinfProductDTO extends Readonly<Partial <Omit <Product, 'tags'> > >  {

  tags: ReadonlyArray<string>[]
  // .....
}
```
En el ejmplo que extiende de una `interface` encontramos el siguiente anidamiento `Readonly<Partial <Omit <Product, 'tags'> > >`, el cual ssignifica:
> De `Product` vamos a omitir la propiedad `tag`, el resto de propiedades pertenecientes  `Product` seran opcionales (`partial`) y a su ves seran de solo lectura (`Readonly`).

### Record
Este utility type nos permite crear un alias para objetos, donde  tanto los `keys` como los `values` sean de un tipo especifico.
**`Definición`**
```js
type FinfProduct = Record<string, string>

const find: FinfProduct = { "title": "This is a product" } // ✅
const findOther: FinfProduct = { "price": 500 } // ❌  el value es de tipo number
```
La ventaja de `Record` es que especificar el tipo de dato que debe tener la `key` de un objeto, esto es sumamente útil cuando creamos objetos dinamicos (no necesariamente lleva una `key` con un nombre especifico). Incluso podemos tipar la `key` con un type definido previavente definido en desarrollo.

**`Definición`**
```js
// Objeto a con keys partir de valor de un id.
type Id = `#${string}-${string}`

type ProductsId = Record<Id, number>

const prod: ProductsId = { "#abc-def": 1 } // ✅
const otherProd: ProductsId = { "title": 500 } // ❌ el key "title" no cumple con la especificación del alias Id
```

> ✍️ **`NOTA`** `Record es un apunte adicional que no se incluyó en el curso.

## Tipado por indice
Es una forma de acceder al tipo de dato de un atributo especifico de un `type`  o `interface`. <br>
Del interface `Product`
```js
// Prododuct
interface Product {
  name: string,
  description: string,
  image: string,
  color: string,
  price: number,
  // .....
}
```
Para acceder al tipo de dato de `name` lo hacemos así: `Product['name']` lo que obtendremos es un tipo `string`. <br>
**`Implementación`**
```js
const getProductByName = (name: Product['name']): Product => { 
  // ...
}
```
Acceder de esta forma al tipado de lso atributos de una `interface` es sumamente útil para asegurar el tipado de una variable, parámetro o atributo, de esta manera evitamos inconvenientes si en un futuro el tipado de una `interface` cambia.

