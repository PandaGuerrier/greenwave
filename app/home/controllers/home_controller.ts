import type { HttpContext } from '@adonisjs/core/http'
import { createContactFormValidator } from '#home/validator/contact'

export default class HomeController {
  public async handle({ inertia }: HttpContext) {
    return inertia.render('home/show')
  }

  public async contact({ inertia }: HttpContext) {
    return inertia.render('home/contact')
  }

  public async submitContact({ request, response }: HttpContext) {
    const data = await request.validateUsing(createContactFormValidator)
    console.log('Contact form submitted:', data)
    return response.redirect().back()
  }
}
