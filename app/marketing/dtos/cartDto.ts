import { BaseModelDto } from '@adocasts.com/dto/base'
import Cart from '#marketing/models/cart'
import { OrderItem } from '#marketing/models/order'
import api from '#common/utils/api'

export default class CartDto extends BaseModelDto {
  declare id: number
  declare items: OrderItem[]

  constructor(cart: Cart) {
    super()

    this.id = cart.id
    this.items = cart.items.objects
  }

  public async addItem(productId: number, quantity: number, size: string) {
     await api.post("/cart", {

     })
  }

  public async removeItem(productId: number, quantity: number, size: string) {

  }

  public async setQuantity(productId: number, quantity: number, size: string) {

  }
}
