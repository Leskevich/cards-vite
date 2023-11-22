import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/shared/ui'

const meta = {
  title: 'Components/CheckBocks',

  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
  },
}
