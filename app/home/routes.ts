/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

const HomeController = () => import('#home/controllers/home_controller')

router.get('/', [HomeController]).as('home.show')
router.get('/contact', [HomeController, 'contact']).as('home.contact')
router.post('/contact', [HomeController, 'submitContact']).as('home.submitContact')
