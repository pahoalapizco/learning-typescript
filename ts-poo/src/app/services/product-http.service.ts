// External libreries
import { faker } from '@faker-js/faker'
import axios from "axios";

import { Product, ProductService } from "@models/index";
import { CreateProductDTO, UpdateProductDTO, FindProductDTO } from '@dtos/index';


export class ProductHttpService implements ProductService {
  private api: string = "https://api.escuelajs.co/api/v1/products"

  /* Methods */
  async add(newProduct: CreateProductDTO): Promise<void>  {
    const { data } = await axios({
      method: 'post',
      url: this.api,
      data: {
        ...newProduct
      }
    });
  }

  async update(id: Product['id'], changed: UpdateProductDTO): Promise<Product | undefined>  {
    const { data } = await axios<Product | undefined>({
      method: 'put',
      url: `${this.api}/${id}`,
      data: {
        ...changed
      }
    });
    return data
  }

  /* get data */
  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(`${this.api}?limit=0&offset=0`)
    return data
  }


  async findById(id: Product['id']): Promise<Product | undefined> {
    try {
      const { data } = await axios.get<Product>(`${this.api}/${id}`)
      return data
    } catch (err) {
      console.error("Error: ", err)
    }
  }

}
