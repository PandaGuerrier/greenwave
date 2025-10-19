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

const WebhookController = () => import('#marketing/controllers/webhook_controller')

router.group(() => {
  router.post('/webhook', [WebhookController]).middleware(middleware.verifyStripeWebhook())
}).prefix('/stripe')
