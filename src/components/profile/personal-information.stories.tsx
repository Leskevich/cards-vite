import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './'

const meta = {
  title: 'Auth/PersonalInformation',
  component: PersonalInformation,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'leskevich',
    logOut: () => {},
  },
}
