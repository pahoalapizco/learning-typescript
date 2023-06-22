import { BaseModel } from "@models/index"

export enum AccessType {
  PRIVATE = "private",
  PUBLIC = "public"
}
export interface Category  extends BaseModel {
  name:       string
  image:      string
  access?: AccessType
}
