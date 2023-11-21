export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type User = {
  id: string
  email: string
  name: string
  isEmailVerified: boolean
  avatar: string
  created: string
  updated: string
}
export type SignUpResponse = {
  html: string
  name: string
  password: string
  email: string
  subject: string
  sendConfirmationEmail: boolean
}

export type SignUpArgs = {
  html?: string
  name?: string
  password: string
  email: string
  subject?: string
  sendConfirmationEmail?: boolean
}
