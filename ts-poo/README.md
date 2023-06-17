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
  propertyOne: string; // TS infiere la propiedad como public.
  public propertyTwo: number; 

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
  propertieOne: string; // TS infiere la propiedad como public.
  public propertieTwo: number; 
  private propertyThree: boolean;

  /* Métodos */
  methodOne() { /* code here */ } // TS infiere el método como public.
  public methodTwo() { /* code here */ }
  private methodThree() { /* code here */ }
}
```
**`Implementación`**
```js
const myObjClass = new MyClass();
myObjClass.propertieOne = "Hello from an object instance" // ✅
myObjClass.methodTwo() // ✅

myObjClass.propertyThree = false; // ❌
myObjClass.methodThree(); // ❌
```
