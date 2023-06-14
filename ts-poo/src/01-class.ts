(() => {
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

  const date = new MyDate(2023, 5, 14)
  console.log("🚀 date:", date)
})()
