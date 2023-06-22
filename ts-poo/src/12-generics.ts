(() => {
  function functionName<Type>(value: Type) {
    return value
  }
  const numValue = functionName<number>(12)
  const strValue = functionName<string>("12")
  const arrValue = functionName<number[]>([12, 1, 2])

  console.log("🚀 generics:", { numValue, strValue, arrValue })
})()
