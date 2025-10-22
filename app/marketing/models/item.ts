import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import stripe from '@vbusatta/adonis-stripe/services/main'
import env from '#start/env'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare stripeId: string

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare priceCents: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static async assignStripeId(item: Item) {
    const stripeProduct = await stripe.api.products.create({
      name: item.name,
      description: item.description,
      default_price_data: {
        currency: 'eur',
        unit_amount: item.priceCents,
      },
      url: env.get('APP_URL') + '/items/' + item.id,
      shippable: false,
    })
    item.stripeId = stripeProduct.id

    console.log('Created Stripe Plan with ID:', stripeProduct.id)
  }
}
