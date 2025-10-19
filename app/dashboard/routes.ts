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

router.get('/dashboard', [DashboardController]).middleware([middleware.auth(), middleware.verifyProfile()]).as('dashboard.show')
