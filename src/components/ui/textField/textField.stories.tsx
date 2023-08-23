import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/TextField',

  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['search', 'password', 'text'],
      control: { type: 'radio' },
    },
    onClearClick: { type: 'boolean' },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    onClearClick: () => {},
  },
}

export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Password',
    type: 'password',
  },
}

export const Error: Story = {
  args: {
    label: 'Input with error',
    value: 'Wrong value',
    errorMessage: 'Error message',
  },
}
export const Search: Story = {
  args: {
    label: 'Input with error',
    type: 'search',
  },
}
