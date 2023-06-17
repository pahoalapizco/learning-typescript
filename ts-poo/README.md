# Programacción Orientada a Objetos con TypeScript

> :pushpin: Los tipos avanzads con TypeScrip se encuentran en el folder [tipos-avanzados](../tipos-avanzados/README.md)

## Class
A partir de ECMAScript6 JavaScript da soporte a las clases de objeto, sin embargo con TypeScript podemos llevas esas clases a un siguiente nivel, tipando las propiedades de lca clase, los metodos, sobrecargando metodos, etc.

**`Definición`**
Para definir una clase lo hacemos con la palabra recerbada `class`, por convención el nombre de las clases debe escribirse con `PascalCase`
```js
class MyDate {
  // Propiedades de la clase
  year: number 
  month: number
  day: number 

  // método de las clases que inicializan las propiedades cuando se crea una instancia de la clase.
  constructor(year: number, month: number, day: number ) {
    this.year = year
    this.month = month
    this.day = day
  }
}
```

**`Implementación`**
Para crear la instancia de una clase se utiliza la palabra recervada `new` seguida del nombre de la clase y sus `()`
```js
const date = new MyDate(2023, 5, 14)
console.log("🚀 date:", date)
```
Al crear el objeto `data` el tipado inferido de TypeScript define esa variable como de tipo `MyDate` (clase).

## Métodos
Funciones que agrean comportamiento a los objetos. Puedes o no recibir parámetros, pueden o no retornar algo.

**`Definición`**
Los metodos de una clase no necesitan llevar la palabra recerbada `function` al inicio de su definición.
```js
class MyDate {
  /* atributos */
  // ... 

  /* Constructor */
  // ... 

  /* Métodos */
  printDate(): string {
    return `${this.day}/${this.month}/${this.year}`
  }

  add(amount: number, type: "days" | "months" | "years"): string {
    if(type === "days") {
      this.day += amount
    }
    if(type === "months") {
      this.month += amount
    }
    if(type === "years") {
      this.year += amount
    }

    return `${this.day}/${this.month}/${this.year}`
  }
}
```
> :warning: **NOTA**: El método `add()` del ejemplo no es la forma correcta de agregar dias, meses o años a una fecha.

## Tipos de accesos
Los tipos de accesos en POO se refieren a la accecibilidad (valga la redundancia) que tenemos sobre elementos de una clase, ya sean **propiedades** ó **métodos***. Existen 2 tipos:

### Acceso público
Es el acceso por default de cualquier lenguaje de programación que soporte POO, TypeScript no es la excepción.

Un acceso es publico cuando podemos hacer uso de las **propiedades** ó **métodos** tanto desde dentro de la clase como desde su instancia (objeto).
Cuando es:
- **Propiedad**: Podemos leerla y modificarla 
- **Método**: Podemos ejecutarla.

Podemos definir un elemento como público agregando la palabra recerbada `public` antes del nombre de dicho elemento.

**`Definición`**
```js
class MyClass {
  /* Propiedades */
  propertyOne: string // TS infiere la propiedad como public.
  public propertyTwo: number 

  /* Constructor */
  // ... 

  /* Métodos */
  methodOne() { /* code here */ } // TS infiere el método como public.
  public methodTwo() { /* code here */ }
}
```

### Acceso privado
El acceso privado nos permite proteger a los **métodos** o **propiedades** de una clase. Esto quiere decir que no podemos hacer uso de sus elementos privados desde la instancia de la clase, sin embargo si es posible acceder a ellos desde dentro de la clase.

La forma de de definir un  **método** o **propiedad** es con la palabra recervada `private`.

**`Definición`**
```js
class MyClass {
  /* Propiedades */
  propertieOne: string // TS infiere la propiedad como public.
  public propertieTwo: number 
  private propertyThree: boolean

  /* Constructor */
  // ... 

  /* Métodos */
  methodOne() { /* code here */ } // TS infiere el método como public.
  public methodTwo() { /* code here */ }
  private methodThree() { /* code here */ }
}
```
**`Implementación`**
```js
const myObjClass = new MyClass()
myObjClass.propertieOne = "Hello from an object instance" // ✅
myObjClass.methodTwo() // ✅

myObjClass.propertyThree = false // ❌
myObjClass.methodThree() // ❌
```

## Constructor
El constructor es una función que se ejecuta cuando creamos la instancia de la clase. Es usado para inicializar las propiedades de la clase.

Un de las caracteristicas que tiene la función `constructor` en TypeScript es que nos permite hacer la declaración de las propiedades directamente en sus parametros. 

**`Definición tradicional`**
```js
class MyClass {
  /* Propiedades */
  propertieOne: string // TS infiere la propiedad como public.
  propertieTwo: number 
  private propertyThree: boolean

  /* Constructor */
  constructor(propertieOne, propertieTwo, propertyThree) {
    this.propertieOne = propertieOne
    this.propertieTwo = propertieTwo
    this.propertyThree = propertyThree
  }

  /* Métodos */
  // ...
}
```

**`Definición declaración de propiedades`**
```js
class MyClass {  /* Constructor */
  constructor(
    public propertieOne: string = "",
    public propertieTwo: number = 0,
    private propertyThree: boolean = false
  ) { /*...*/ }

  /* Métodos */
  // ...
}
```
La regla que tiene la definición desde el constructor es que se les debe decir explicitamente el tipo de acceso que tendran, de lo contrario el alcance de se parametro sera local al constructor.

En el ejemplo de arriba se esta asignando un valor por defecto a cada propiedad, esto permite crear instancias de un objeto sin enviar ningun argumento, se veria así `const myObj = new MyClass()`, en caso contrario TS nos marcaria la creación del objeto como erronea.

## Getters y Setters
### Getters
Los `getters` es una forma controlada de acceder a las **propiedades** privadas de una clase. 

Un `getter` es en realidad un método que lleva el nombre de la propiedad a la que representa, con la diferencia de que al inicio se coloca la palabra recervada `get`.

**`Definición`**
```js
class MyClass {  /* Constructor */
  constructor(
    public propertieOne: string = "",
    private propertieTwo: number = 0,
    private _propertyThree: boolean = false
  ) { /*...*/ }

  /* Getters */
  get propertyThree() {
    return this._propertyThree
  }
  /* Métodos */
  // ...
}
```
Un `getter` al ser una función puede incluir logica adicional antes de hacer el return de su respectiva propiedad. Otra ventaja es que para hacer uso de un `getter` lo podemos hacer como si pueda la propiedad misma no como el llamado a un método normal. Ademas al especificar que el metodo es un `get` debemos hacer el `return` de valor y __tipo de dato__ correspondiente a la propiedad.

**`Implementación`**
```js
const myObjClass = new MyClass()
myObjClass.propertieTwo // ❌ Se declaró como privada pero no tiene su metodo getter
myObjClass.propertyThree // ✅
```

Otra particuraridad de los `getters` es que podemos crear métodos que no necesariamente representen a una propiedad privada, sino que se comporten como una propiedad pero por dentro pueda ejecutar un código y luego renornar algo.

```js
class MyClass {  /* Constructor */
  constructor(
    public propertieOne: string = "",
    private propertieTwo: number = 0,
    private _propertyThree: boolean = false
  ) { /*...*/ }

  /* Getters */
  get propertyThree() {
    return this._propertyThree
  }
  get saludo(): string {
    return `Hi! ${this._propertieOne}!`
  }
  /* Métodos */
  // ...

  const myObj = new MyClass("Paho")
  myObj.saludo() // ❌ Al ser creado con get no es necesario colocar los parentesis.
  myObj.saludo // ✅ Al ser creado con get actua como una propiedad más de la clase
}
```


> ✍️ **NOTA**: Todos los métodos que se creen como `get` deben retornar algo.

### Setters
Los `setters` es una forma controlada de modificar a las **propiedades** privadas de una clase, es lo contrario al `getter`. 

Para definir un setter se hace mediante la palabra reservada `set` seguida del nombre de la propiedad. Al crear el metodo con `set` no podemos hacer retorno de valores, ya que por definición es una función `void`, ademas debemos pasarle como argumento el valor y __tipo de dato__ que se le va asignar a su correspondiente propiedad.

**`Definición`**
```js
class MyClass {  /* Constructor */
  constructor(
    private propertieOne: string = "",
    private propertieTwo: number = 0,
    private _propertyThree: boolean = false
  ) { /*...*/ }

  /* Getters */
  get propertieTwo() {
    return this._propertieTwo
  }
  get propertyThree() {
    return this._propertyThree
  }

  /* setters */
  set propertieTwo(value) {
    if(value <= 1000) {
      this._propertieTwo = value
    } else {
      throw new Error('Value is out of range')
    }
  }
  set propertyThree(value) {
    this._propertyThree = value
  }
  /* Métodos */
  // ...
}
```
Al utilizar los métodos `setters` para asignar valores a las propiedades de la clase, podemos implementar validaciones para evitar posibles malas prácticas.

**`Implementación`**
```js
const myObjClass = new MyClass()
myObjClass.propertieOne = "Hola" // ❌ Se declaró como privada pero no tiene su metodo setter para asignarle valor.

myObjClass.propertieTwo = 10 // ✅
myObjClass.propertieTwo = 1001 // ❌ Obtendremos un error, el valor esta fuera del rango establecido en el setter.
```


>  ⚠️ **NOTA**: Por buenas prácticas el nombre de las propiedades de las clases privadas deben iniciar con un guión bajo (`_`) para 1. Distinguir que la variable es privada, 2. Evitar que choque la declaración del getter y setter con el nombre de la propiedad.

## Herencia
La herencia es un mecanismo de la programación orientada objetos que nos permite extender o derivar las propiedades y metodos de una clase a otra.

Para crear clases heredadas lo hacemos con la palabra recerbada `extends` seguida del nombre de la clase padre.

**`Definición`**
```js
// Clase padre
class Animal {  
  /* Constructor */
  constructor(
    public name: string = ""
  ) { }

  greeting(): string {
    return `I'm ${this.name}`
  }
}

// Clase Hijo
class Dog extends Animal{ }
```
Simplemente con indicarle a la clase `Dog` que extiende de `Animal` la clase hijo puede acceder a las propiedades y métodos de su padre/

**`Implementación`**
```js
const max = new Dog("max")
console.log(max.greeting()) //  I'm max
```
Las clases hijo ademsa de contar con las funcionalidades del padre, también puede tener su propio comportamiento (métodos)

**`Definición: métodos`**
```js
// Clase Hijo
class Dog extends Animal{
  woof(times: number): void {
    for(let i = 0; i < times; i++){
      console.log("Woof!")
    }
  }
}
```
**`Implementación`**
```js
const max = new Dog("max")
console.log(max.greeting()) //  I'm max
max.woof(3) // Woof! \n Woof! \nWoof!

const animal = new Animal("Max")
animal.woof(1) //❌ Obtendremos un error porque la clase animal no posee la función woof.
```
Otra caracteristica de las clases heredadas es que también pueden tener sus propias propiedades.

Cuando la clase hijo tiene definido un constructor en el cual recibe como atributo la propiedad heredada del padre, debemos utilizar la función `super()` para indicarle que parametros son de la clase superior.
**`Definición: propiedades (❌ error)`**
```js
class Dog extends Veicle {
  // ❌ name es una propiedad heredada de Animal, 
  // si la declaramos como public automaticamente podemos acceder a ella con this
  // omitiendo su origen desde aniaml
  constructor(
    public name: string = "",
    public owner: string = ""
  ){
    super(name)
    this.name = name // ❌ 
  }
  /* Métodos */
  // .
}..
```
Para evitar el error del código de arriba, a la propiedad heredada debemos quitarle el tipo acceso, de esa forma TypeScript determina que no pertenece a las propiedades internas de la clase.
**`Definición: propiedades (✅)`**
```js
class Dog extends Veicle{
  constructor(
    name: string = "",
    public owner: string = ""
  ){    
    super(name)
  }
  /* Métodos */
  // ...
}
```

**`Implementación`**
```js
const max = new Dog("Max","Paho")
console.log(max.greeting()) //  I'm max
max.woof(3) // Woof! \n Woof! \nWoof!
console.log(max.owner) // Paho
```
