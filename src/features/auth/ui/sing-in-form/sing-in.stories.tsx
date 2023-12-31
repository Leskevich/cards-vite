import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/features/auth'

const meta = {
  title: 'Auth/Sign in',
  component: SignInForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}
