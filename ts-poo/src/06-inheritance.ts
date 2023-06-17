export class Animal {
  /* Constructor */
  constructor(
    protected name: string = ""
  ) { }

  greeting(): string {
    return `I'm ${this.name}`
  }
}

export class Dog extends Animal{
  constructor(
    name: string = "",
    public owner: string = ""
  ) {
    super(name)
  }

  woof(times: number): void {
    for(let i = 0; i < times; i++){
      console.log("Woof!")
    }
  }
}

(() => {
  const max = new Dog("Max","Paho")
  console.log(max.greeting()) //  I'm max
  max.woof(3) // Woof! \n Woof! \nWoof!
  // console.log(max.owner) // Paho
  // console.log(max.name) // Paho
})()
