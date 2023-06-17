(() => {
  class MyDate {
    // método de las clases que inicializan las propiedades cuando se crea una instancia de la clase.
    constructor(
      private _year: number = 2023,
      private _month: number = 1,
      private _day: number = 1
    ) { }

    /* Getters */
    get year(){
      return this._year
    }
    get month(){
      return this._month
    }
    get day(){
      return this._month
    }

    /* Métodos */
    printDate(): string {
      // this.day, this.month, & this.year are calling their getter.
      const day = this.addPadding(this.day);
      const month = this.addPadding(this.month);
      return `${day}/${month}/${this.year}`
    }

    add(amount: number, type: "days" | "months" | "years"): string {
      if(type === "days") {
        this._day += amount
      }
      if(type === "months") {
        this._month += amount
      }
      if(type === "years") {
        this._year += amount
      }

      // this.day, this.month, & this.year are calling their getter.
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
  console.log("🚀 day:", date.day)
  console.log("🚀 month:", date.month)
  console.log("🚀 year:", date.year)

})()
