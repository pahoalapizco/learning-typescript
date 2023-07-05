export type TMoves =  -1 | 0 | 1 

export interface IMoves  {
  up: TMoves[],
  down: TMoves[],
  left: TMoves[],
  right: TMoves[],
}