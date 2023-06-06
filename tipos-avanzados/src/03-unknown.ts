 (() => {

  // Definición
  let unknownVar: unknown

  // Asignación
  unknownVar = "Hello" // string
  unknownVar = true // bollean
  unknownVar = 123 // number
  unknownVar = {} // object

  console.log("🚀 unknownVar:", unknownVar)

  //Accionar funcionalidad de un string
  // unknownVar.toLowerCase() // error
  if(typeof unknownVar === "string"){
    unknownVar.toLowerCase() // error
  }

  // Asignacion de una variable uknown a una variable tipada
  let isBool: boolean
  // isBool= unknownVar // error
  // Verificacion de tipos
  if(typeof unknownVar === "boolean"){
    isBool= unknownVar // error
  }
 })()
