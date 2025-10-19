import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import stripe from '@vbusatta/adonis-stripe/services/main'

export default class Subscription extends BaseModel {
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
  static async assignStripeId(subscription: Subscription) {
    const sub = await stripe.api.plans.create({
      nickname: subscription.name,
      amount: subscription.priceCents,
      currency: 'eur',
      interval: 'month',
      product: {
        name: subscription.name,
      },
    })

    subscription.stripeId = sub.id

    console.log('Created Stripe Plan with ID:', sub.id)
  }
}
