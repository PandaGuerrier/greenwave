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

const DashboardController = () => import('#dashboard/controllers/dashboard_controller')


router.group(() => {
  router.get('/', [DashboardController]).as('dashboard.show')
  router.get('/rapport', [DashboardController, 'showRapport']).as('dashboard.show.rapport')
}).prefix('/dashboard').middleware([middleware.auth(), middleware.verifyProfile()])
