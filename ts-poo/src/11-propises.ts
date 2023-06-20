(async () => {
  type TWithdrawals = {
    amount: number,
    actualAmount: number
  }

  const withdrawals = (amount: number) => {
    let actualAmount: number = 1000
    return new Promise((resolve, reject) => {
      if(actualAmount >= amount) {
        actualAmount -= amount
        resolve({ amount, actualAmount })
      } else {
        reject(`Sorry! you don't have enouhh money, actual acount $${actualAmount}`)
      }
    })
  }

  withdrawals(1500)
    .then(data => console.log(`🚀 data: ${data}`, data))
    .catch(err => console.log(`%c🚀 err: ${err}`, `color: red`))


  const promiseFunc = async (): Promise<string> => {
    return new Promise((resolve) => {
      resolve(`Hello from promise resolve`)
    })
  }

  const data = await promiseFunc()
  console.log("🚀 data:", data.toUpperCase())

})()
