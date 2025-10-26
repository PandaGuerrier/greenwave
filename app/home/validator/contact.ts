import vine from '@vinejs/vine'

export const createContactFormValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3).maxLength(100),
    email: vine.string().email(),
    message: vine.string().minLength(10).maxLength(1000),
  })
)
