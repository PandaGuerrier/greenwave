import type { HttpContext } from '@adonisjs/core/http'
import PaymentService from '#marketing/services/payment_service'
import { inject } from '@adonisjs/core/container'

@inject()
export default class SubscriptionsController {
  constructor(protected payment: PaymentService) {}

  async apply({ response, params, auth, }: HttpContext) {
    const user = auth.use('web').user!

    const session = await this.payment.createSubscriptionSession({
      subscriptionId: params.id,
      user: user,
      cancel_url: "http://localhost:3333/stripe/failure",
      success_url: "http://localhost:3333/dashboard"
    })

    return response.redirect(session.url!)
  }
}
