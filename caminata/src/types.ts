import { Coordinate } from "./coordinate"

export type TMoves =  -1 | 0 | 1 

export interface IMoves  {
  up: TMoves[],
  down: TMoves[],
  left: TMoves[],
  right: TMoves[],
}

export type TDrunkardId = `${string}-${string}-${string}-${string}-${string}`

export type TDrunkardCords = Record<TDrunkardId, Coordinate>
