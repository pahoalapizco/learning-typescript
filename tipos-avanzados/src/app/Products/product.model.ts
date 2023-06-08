import { Category } from "@categories/category.model"
import { BaseModel } from "@app/base.model"
export type Size = "S" | "M" | "L" | "XL"

// Con extends le decimos a Product que va a "heredar" las propiedades de la interface BseModel
export interface Product extends BaseModel{
  name: string,
  price: number,
  size: Size,
  category: Category,
  stock?: number,
}
