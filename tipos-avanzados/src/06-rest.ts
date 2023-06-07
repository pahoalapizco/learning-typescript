import { ROLES, User } from "./01-enum"
(() => {
  // JavaScript
  // const myFunction = (...args) => console.log(args)
  // myFunction(1,2,3,"Hello", false, { "key": "value" })

  // TypeScript
  const myFunction = (...args: string[]) => console.log(args)
  myFunction("Este", "Es", "Un", "Ejemplo", "De", "Parametros", "Rest")

  const otherFunction = (...args: string[]) => {
    const lowerArr = args.map((item: string) => (item.toLowerCase()))
    console.log("🚀 lowerArr:", lowerArr.join(" "))
  }
  otherFunction("Este", "Es", "Un", "Ejemplo", "De", "Parametros", "Rest")


  const multipletypes = (...args: (string | number)[]): string => {
    let text: string = args.join(" ")
    return text
  }
  console.log(multipletypes("Hola", "bienvenido", "a la", "prueba", 3))

  // Más ejemplos
  const user: User = {
    name: "Paola",
    username: "pahoalapizco",
    rol: ROLES.CUSTOMER
  }

  const chekUser = (...rol: ROLES[]): boolean => {
    if(rol.includes(user.rol)) {
      return true
    }
    return false
  }
  console.log("🚀 chekUser:", chekUser(ROLES.ADMIN, ROLES.SELLER))
  console.log("🚀 chekUser:", chekUser(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER))
})()
