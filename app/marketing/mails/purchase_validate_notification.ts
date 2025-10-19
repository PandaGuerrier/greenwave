import { BaseMail } from '@adonisjs/mail'
import env from '#start/env'

import User from '#users/models/user'

export default class ValidatePurchaseNotification extends BaseMail {
  from = env.get('EMAIL_FROM')
  subject = env.get('APP_NAME') + ' - Votre achat a été validé !'

  constructor(
    private user: User,
    private order: any
  ) {
    super()
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  async prepare() {
    /**
     * Generate a signed URL with the user's email,
     * which can be used to reset the password.
     */


    this.message.to(this.user.email)
    this.message.htmlView('marketing::emails/validate_purchase', {
      user: this.user,
      order: this.order,
      appName: env.get('APP_NAME'),
    })
  }
}
