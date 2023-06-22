// External libreries
import axios from "axios";
import { Product, Category } from "@models/index"

// Aquí podemos tener todo lo generico que podemos hacer con un request HTTP.
export class BaseHttpService<T>{

  constructor(private api: string) {}

  /* get data */
  // dejamos que TS infiera el retorno
  async getAll() {
    const { data } = await axios.get<T[]>(`${this.api}`)
    return data
  }

  async update<ID, DTO>(id: ID, changed: DTO): Promise<T>  {
    const { data } = await axios<T>({
      method: 'put',
      url: `${this.api}/${id}`,
      data: {
        ...changed
      }
    });
    return data
  }
}

