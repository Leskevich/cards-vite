import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '@/shared/ui'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    selectOptions: [],
    onValueChange: { action: 'select changes' },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'Select-box 1', label: 'box1' },
  { value: 'Select-box 2', label: 'box2' },
  { value: 'Select-box 3', label: 'box3' },
]

export const SelectStory: Story = {
  args: {
    label: 'Select-box',
    defaultValue: 'box1',
    placeholder: 'Select-box 1',
    selectOptions: options,
  },
}

export const SelectStoryWithDisabledItem: Story = {
  args: {
    placeholder: 'Выбери бокс',
    selectOptions: [
      { value: 'Select-box 1', label: 'box1' },
      { value: 'Select-box 2', label: 'box2', disabled: true },
      { value: 'Select-box 3', label: 'box3' },
    ],
  },
}

export const SelectStoryDisabled: Story = {
  args: {
    label: 'Select-box',
    defaultValue: 'Select-box 1',
    placeholder: 'Select-box 1',
    disabled: true,
    selectOptions: options,
  },
}
export const SelectStoryDefaultValue: Story = {
  args: {
    label: 'Select-box',
    defaultValue: 'box1',
    selectOptions: options,
  },
}
