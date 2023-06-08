(() => {
  // * string -> strig[]: "Paho" -> ["P", "a", "h", "o"]
  // * string[] -> strig:  ["P", "a", "h", "o"] -> "Paho"
  // TODO: Ejemplos de la sobrecarga (probmela y solución)

  // Definición
  function parseStr(input: string | string[]): string | string[] {
    if(typeof input === "string") {
      return input.split("")
    } else {
      return input.join("")
    }
  }
  // Implementación
  //! cuando la función puede retornar +2 tipos de datos no contamos con la inferencia
  let parsedText = parseStr("Paho")
  let parsedArray = parseStr(["P", "a", "h", "o"])

  // Validación de tipos
  if(typeof parsedText === 'string') {
    console.log("🚀", parsedText.toUpperCase())
  } else if (Array.isArray(parsedText)){
    const test = parsedText.map(item => (item + "-word"))
    console.log("🚀 test:", test)
  }

  //! Separa cada una de las posibles entradas
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

})()
