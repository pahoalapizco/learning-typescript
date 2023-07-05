//* Establece  las coordenadas del "borracho" en el plano (campo)

export class Coordinate {
  constructor(
    private x: number,
    private y: number
  ) {}

  // Mueve al "borracho" en el plano (campo)
  move(deltaX: number, deltaY: number): Coordinate {
    return new Coordinate(this.x + deltaX, this.y + deltaY)
  }

  distance(coord: Coordinate): number {
    const diffX = Math.pow((this.x - coord.x), 2)
    const diffY = Math.pow((this.y - coord.y), 2)

    const diff = Math.sqrt(diffX - diffY)

    return diff
  }
}