import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  public async handle({ inertia }: HttpContext) {
    return inertia.render('dashboard/dashboard')
  }

  public async showRapport({ inertia }: HttpContext) {
    return inertia.render('dashboard/rapport')
  }
}
