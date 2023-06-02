(() => {
// Alias:
type UserID = string | number
let usrId: UserID = "asc123"
// usrId = {} // error

const validandoTipos = (element: UserID) => {
  if(typeof element === 'string'){
    console.log("element: ", element.charAt(0))
  }
}
validandoTipos(usrId) // abc123
// validandoTipos({ userId: usrId }) // error


// Literal Types:
let shirtSize: 'S' | 'M' | 'L' | 'XL'

shirtSize = 'S' // ok
shirtSize = 'M' // ok
shirtSize = 'L' // ok
// shirtSize = 'xl' // Error, porque xl en minuscula no existe en las posibles opciones
// shirtSize = 'jkgsd' // Error, no existe en las posibles opciones.

// Alias + Literal Types
type Sizes = 'S' | 'M' | 'L' | 'XL';


const yourSize = ( userSize: Sizes ) => {
    console.log(`Tu talla es ${userSize}`);
}

let usrSize: Sizes;
usrSize = "M";
yourSize(shirtSize) // M
yourSize("XS") // error
})()
