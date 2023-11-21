import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
  password: z.string().nonempty('Enter password'),
  rememberMe: z.boolean().optional(),
})
