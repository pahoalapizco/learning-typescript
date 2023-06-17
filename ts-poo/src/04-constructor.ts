(() => {
  class MyDate {
    // método de las clases que inicializan las propiedades cuando se crea una instancia de la clase.
    constructor(
      public year: number = 2023,
      public month: number = 1,
      public day: number = 1
    ) { }

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
  const date = new MyDate()
  console.log("🚀 date:", date)
  // Implementación

  const date2 = new MyDate(2021)
  console.log("🚀 date2:", date2)
})()
