import stripe from '@vbusatta/adonis-stripe/services/main'
import PaymentService from '#marketing/services/payment_service'
import User from '#users/models/user'


console.log('Stripe event listener initialized')

stripe.api.on('response', async (event) => {
  console.log('Stripe event received:', event)
})

stripe.onEvent('checkout.session.completed', async (event) => {
  console.log('Subscription created event received:', event)
  const session = event.data.object as any

  const userId = session.metadata.userId
  const user = await User.find(userId)

  if (!user) {
    return;
  }

  if (session.mode === 'subscription') {
    const subscriptionId = session.metadata.subscriptionId
    console.log(`User ${userId} subscribed to subscription ${subscriptionId}`)
    await PaymentService.receiveSubscription(subscriptionId, user)
  } else if (session.mode === 'payment') {
    const itemId = session.metadata.itemId
    console.log(`User ${userId} purchased item ${itemId}`)

    await PaymentService.receiveItem(itemId, user)
  }
})
