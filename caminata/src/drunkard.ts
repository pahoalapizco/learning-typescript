import { IMoves, TDrunkardId, TMoves } from "./types";

export class Drunkard {
  private moves: IMoves = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  }
  private _drunkardID: TDrunkardId

  constructor(
    public name: string
  ){
    this._drunkardID = crypto.randomUUID()
  }

  public get drunkardID() {
    return this._drunkardID
  }

  walk(): TMoves[] {
    const choice: number = Math.floor(Math.random() * Object.keys(this.moves).length)
    if(choice === 0) return this.moves.up
    else if(choice === 1) return this.moves.down
    else if(choice === 2) return this.moves.left

    return this.moves.right
  }
}