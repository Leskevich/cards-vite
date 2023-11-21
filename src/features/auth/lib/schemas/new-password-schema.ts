import { z } from 'zod'

export const newPasswordSchema = z.object({
  password: z.string().nonempty('Enter password'),
})
