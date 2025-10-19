import { BaseSeeder } from '@adonisjs/lucid/seeders'

import User from '#users/models/user'
import Roles from '#users/enums/role'
import Subscription from '#marketing/models/subscription'

export default class UserSeeder extends BaseSeeder {
  async run() {
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'admin@repo.com',
        fullName: 'Administrador',
        password: '123',
        roleId: Roles.ADMIN,
      },
    ])

    await Subscription.create({
      name: 'Basic Plan',
      description: 'Basic subscription plan',
      priceCents: 500, // 5.00 EUR
    })
  }

}
