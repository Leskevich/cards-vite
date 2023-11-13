import type { Meta, StoryObj } from '@storybook/react'

import { RecoverPasswordForm } from '@/features/auth'

const meta = {
  title: 'Auth/RecoverPasswordForm',
  component: RecoverPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof RecoverPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: any) => console.info(data),
  },
}
