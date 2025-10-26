/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import SubscriptionsController from '#marketing/controllers/subscriptions_controller'

const WebhookController = () => import('#marketing/controllers/webhook_controller')

router.group(() => {
  router.post('/webhook', [WebhookController]).middleware(middleware.verifyStripeWebhook())

  router.get('/sub/:id', [SubscriptionsController, 'apply']).middleware(middleware.auth())

  router.on('/failure').renderInertia('marketing/failure')
}).prefix('/stripe')
