(() => {
  // Enum
  enum ROLES {
    ADMIN = 'admin',
    SELLER = 'vendedor',
    CUSTOMER = 'cliente'
  }

  // Alias que asigna un enum como tipo de dato
  type User = {
    name: string,
    username: string,
    rol: ROLES
  }

  // Implementación
  const user: User = {
    name: 'Paola',
    username: 'pahoalapizco',
    // rol: 'cliente' // error
    rol: ROLES.CUSTOMER
  }
  console.log("🚀 user:", user)
})()
