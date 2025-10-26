import type { HttpContext } from '@adonisjs/core/http'
import { completeFullNameValidator } from '#auth/validators'
import { afterAuthRedirectRoute } from '#config/auth'
import { VerifyInformationUser } from '#common/utils/verifiy_information_user'

export default class CompleteProfilesController {
  async showFullName({ inertia }: HttpContext) {
    return inertia.render('auth/full_name')
  }

  async handleFullName({ request, response, auth }: HttpContext) {
    console.log('handleFullName')
    const { firstName, lastName } = await request.validateUsing(completeFullNameValidator)

    const user = auth.user!

    user.fullName = `${firstName} ${lastName}`

    await user.save()

    const verifyUser = VerifyInformationUser.verify(user)

    if (verifyUser.redirect) {
      return response.redirect().toRoute(verifyUser.route)
    }

    return response.redirect().toRoute(afterAuthRedirectRoute)
  }
}
