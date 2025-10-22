import stripe from '@vbusatta/adonis-stripe/services/main'
import { inject } from '@adonisjs/core'
import User from '#users/models/user'
import Subscription from '#marketing/models/subscription'
import Item from '#marketing/models/item'

interface CheckoutProps {
  subscriptionId: number
  success_url: string
  cancel_url: string
  user: User
}

interface CheckoutSessionProps {
  itemId: number
  success_url: string
  cancel_url: string
  user: User
}

@inject()
export default class PaymentService {
  constructor() {
    console.log('PaymentService initialized')
  }

  async createSubscriptionSession({ user, subscriptionId, success_url, cancel_url}: CheckoutProps) {
    const subscription = await Subscription.findOrFail(subscriptionId)

    return stripe.api.checkout.sessions.create({
      customer_email: user.email,
      mode: 'subscription',
      line_items: [
        {
          price: subscription.stripeId,
          quantity: 1,
        },
      ],
      success_url: success_url,
      cancel_url: cancel_url,
      metadata: {
        userId: user.id.toString(),
        subscriptionId
      },
    })
  }

  async createSessionSession({ user, itemId, success_url, cancel_url}: CheckoutSessionProps) {
    const subscription = await Subscription.findOrFail(itemId)

    return stripe.api.checkout.sessions.create({
      customer_email: user.email,
      mode: 'payment',
      line_items: [
        {
          price: subscription.stripeId,
          quantity: 1,
        },
      ],
      success_url: success_url,
      cancel_url: cancel_url,
      metadata: {
        userId: user.id.toString(),
        itemId
      },
    })
  }

  static async receiveItem(itemId: string, user: User) {
    const item = await Item.find(itemId)

    if (item) {
      await user.related('items').attach([item.id])
      console.log(`User ${user.id} purchased item ${item.id}`)
    }
  }

  static async receiveSubscription(subscriptionId: string, user: User) {
    const subscription = await Subscription.find(subscriptionId)
    if (subscription) {
      user.subscriptionId = subscription.id
      await user.save()
      console.log(`User ${user.id} subscribed to subscription ${subscription.id}`)
    }
  }
}
