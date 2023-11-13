import type { Meta, StoryObj } from '@storybook/react'

import { SingUpForm } from '@/features/auth'

const meta = {
  title: 'Auth/SingUpForm',
  component: SingUpForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SingUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: any) => console.info(data),
  },
}
