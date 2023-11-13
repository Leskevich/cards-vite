import type { Meta, StoryObj } from '@storybook/react'

import { NewPasswordForm } from '@/features/auth'

const meta = {
  title: 'Auth/NewPassword',
  component: NewPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof NewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: any) => console.info(data),
  },
}
