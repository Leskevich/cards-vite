import { Meta, StoryObj } from '@storybook/react'

import { Label } from '@/components/ui/label/label.tsx'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const DefLabel: Story = {
  args: {
    label: 'label',
  },
}
export const LabelInput: Story = {
  args: {
    label: 'label',
    children: <input />,
  },
}
