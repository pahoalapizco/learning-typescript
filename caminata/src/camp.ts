//* El campo es el lugar por donde el "borracho" realiza la caminata
import { Coordinate } from "./coordinate";
import { Drunkard } from "./drunkard";
import { TDrunkardCords } from "./types";

export class Camp {
  private drunkardCords: TDrunkardCords = {}
  constructor() {}

  add(drunkard: Drunkard, coord: Coordinate) {
    this.drunkardCords[drunkard.drunkardID] = coord
  }

  // Mueve al "borrocho" por el campo
  move(drunkard: Drunkard) {
    const [deltaX, deltaY] = drunkard.walk()
    const currentCoord: Coordinate = this.drunkardCords[drunkard.drunkardID] 
    const newCord = currentCoord.move(deltaX, deltaY)
    this.drunkardCords[drunkard.drunkardID]  = newCord
  }
}
