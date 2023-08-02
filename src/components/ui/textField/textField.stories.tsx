import { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/TextField.tsx'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['password', 'search', 'text'],
      control: { type: 'radio' },
    },
    errorMessage: { type: 'string' },
    label: { type: 'string' },
    disabled: { type: 'boolean' },
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const TextFieldSearch: Story = {
  args: {
    label: 'TextFieldSearch',
    type: 'search',
  },
}
export const TextFieldText: Story = {
  args: {
    label: 'TextFieldText',
    type: 'text',
  },
}
export const TextFieldPass: Story = {
  args: {
    label: 'TextFieldPass',
    type: 'password',
  },
}
