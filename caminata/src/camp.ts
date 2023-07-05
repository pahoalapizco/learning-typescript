//* El campo es el lugar por donde el "borracho" realiza la caminata
import { Coordinate } from "./coordinate";
import { Drunkard } from "./drunkard";

export class Camp {
  private drunkardCords: any = {}
  constructor() {}

  add(drunkard: Drunkard, coord: Coordinate) {
    if(drunkard.drunkardID !== null) {
      this.drunkardCords[drunkard.drunkardID] = coord
    }
  }

  // Mueve al "borrocho" por el campo
  move(drunkard: Drunkard) {
    const [deltaX, deltaY] = drunkard.walk()

    if(drunkard.drunkardID !== null) {
      const currentCoord: Coordinate = this.drunkardCords[drunkard.drunkardID] 
      const newCord = currentCoord.move(deltaX, deltaY)
      this.drunkardCords[drunkard.drunkardID]  = newCord
    }
  }
}