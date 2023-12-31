import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/shared/ui'

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Authorized: Story = {
  args: {
    isAuth: true,
  },
}

export const NotAuthorized: Story = {
  args: {
    isAuth: false,
  },
}
