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


