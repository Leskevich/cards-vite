import { Meta, StoryObj } from '@storybook/react'

import { MenuHeader } from '@/components/drop-down-menu/menu-header/menu-header.tsx'

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
