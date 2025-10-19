import stripe from '@vbusatta/adonis-stripe/services/main'
import { inject } from '@adonisjs/core'
import User from '#users/models/user'
import Subscription from '#marketing/models/subscription'

interface CheckoutProps {
  subscriptionId: number
  success_url: string
  cancel_url: string
  user: User
}

@inject()
export default class PaymentService {
  constructor() {
    console.log('PaymentService initialized')
  }

  async createCheckoutSession({ user, subscriptionId, success_url, cancel_url}: CheckoutProps) {
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
}
