import stripe from '@vbusatta/adonis-stripe/services/main'
import Subscription from '#marketing/models/subscription'
import User from '#users/models/user'


console.log('Stripe event listener initialized')

stripe.api.on('response', async (event) => {
  console.log('Stripe event received:', event)
})

stripe.onEvent('checkout.session.completed', async (event) => {
  console.log('Subscription created event received:', event)
  // @ts-ignore
  const subscription = await Subscription.find(event.data.object.metadata.subscriptionId)
  // @ts-ignore
  const user = await User.find(event.data.object.metadata.userId)
  if (subscription && user) {
    user.subscriptionId = subscription.id
    await user.save()
    console.log(`User ${user.id} subscribed to subscription ${subscription.id}`)
  }
})



