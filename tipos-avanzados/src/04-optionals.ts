(() => {
  const createPorductWithOrOp = (
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

  // const prod1 = createPorductWithOrOp(1, 'hat')
  // const prod2 = createPorductWithOrOp(1, 'hat', 0, false)

  // console.log("🚀 prod1:", prod1)
  // console.log("🚀 prod2:", prod2)


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

  const prod3 = createPorduct(1, 'hat')
  const prod4 = createPorduct(1, 'hat', 0, false)

  console.log("🚀 prod3:", prod3)
  console.log("🚀 prod4:", prod4)
})()
