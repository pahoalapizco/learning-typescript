(() => {
  class MyDate {
    // método de las clases que inicializan las propiedades cuando se crea una instancia de la clase.
    constructor(
      private _year: number = 2023,
      private _month: number = 1,
      private _day: number = 1,

    ) { }

    /* Getters */
    get year() {
      return this._year
    }
    get month(): number {
      return this._month
    }
    get day(): number {
      return this._day
    }
    /* Setters */
    set year(value: number){
      this._year = value
    }
    set month(value: number){
      if(this.month >= 1 && this.month <= 12) {
        this._month = value
      } else {
        throw new Error("Month is out range.")
      }
    }
    set day(value: number){
      const months30: number[] = [4, 6, 9, 11]
      if(value >= 1 && value <= 31) {
        if(this.month === 2) {
          if(value === 29 && !this.isLeaYear){
            throw new Error("Isn't leap year")
          } else if(value > 29) {
            throw new Error("Day out of range")
          }
          this._day = value

        } else {
          if(value === 31 && months30.includes(this.month)) {
            throw new Error("Day out of range")
          } else {
            this._day = value
          }
        }
      } else {
        throw new Error("Day out of range")
      }
    }

    get isLeaYear(): boolean {
      if(this.year % 400 === 0) return true
      if(this.year % 100 === 0) return false
      return this.year % 4 === 0;
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
  const date = new MyDate(2022, 2, 30)
  date.year = 2021
  date.month = 7
  date.day = 31

  console.log("🚀 day:", date.day)
  console.log("🚀 month:", date.month)
  console.log("🚀 year:", date.year)
})()
