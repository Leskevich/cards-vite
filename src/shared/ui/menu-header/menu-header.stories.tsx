import { Meta, StoryObj } from '@storybook/react'

import { MenuHeader } from '@/shared/ui'

const meta = {
  title: 'Layout/MenuHeader',
  component: MenuHeader,
} satisfies Meta<typeof MenuHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'lsdldslfdlsfsf@',
    name: 'sdfsdfs',
  },
}
