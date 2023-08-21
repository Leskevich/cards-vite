import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './'

import def from '@/assets/icons/defolt-ava.jpg'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: def,
    size: '94px',
  },
}
