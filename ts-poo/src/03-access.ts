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

    /* Métodos */
    printDate(): string {
      const day = this.addPadding(this.day);
      const month = this.addPadding(this.month);
      return `${day}/${month}/${this.year}`
    }

    add(amount: number, type: "days" | "months" | "years"): string {
      if(type === "days") {
        this.day += amount
      }
      if(type === "months") {
        this.month += amount
      }
      if(type === "years") {
        this.year += amount
      }

      const day = this.addPadding(this.day);
      const month = this.addPadding(this.month);
      return `${day}/${month}/${this.year}`
    }

    private addPadding(value: number): string {
      return value < 10 ? `0${value}` : `${value}`
    }
  }

  // Implementación
  const date = new MyDate(2023, 5, 14)
  console.log("🚀 date:", date)
  date.add(2, 'days')
  console.log("🚀 date + 2 days:", date)

  date.printDate()
  console.log("🚀 date.printDate():", date.printDate())
})()
