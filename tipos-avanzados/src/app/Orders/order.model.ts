import { User } from "@users/user.model"
import { Product } from "@products/product.model"
import { BaseModel } from "@app/base.model"

export interface Order extends BaseModel{
  products: Product[],
  user: User,
}
