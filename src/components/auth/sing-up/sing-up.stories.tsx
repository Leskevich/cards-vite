import type { Meta, StoryObj } from '@storybook/react'

import { SingUp } from './'

const meta = {
  title: 'Auth/SingUp',
  component: SingUp,
  tags: ['autodocs'],
} satisfies Meta<typeof SingUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: any) => console.info(data),
  },
}
