import User from '#users/models/user'

interface Redirection {
  redirect: boolean
  message: string
  route: string
}

export class VerifyInformationUser {
  static verify(user: User): Redirection {
    if (!user.fullName) {
      return {
        redirect: true,
        message: 'Please complete your profile',
        route: 'profile.complete.fullname',
      }
    }

    return {
      redirect: false,
      message: '',
      route: '',
    }
  }
}
