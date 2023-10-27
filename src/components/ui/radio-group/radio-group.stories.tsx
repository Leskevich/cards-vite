import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    items: [],
    onChange: { action: 'value changed to' },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  { value: 'react', label: 'React' },
  { value: 'redux', label: 'Redux' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
]

export const NotSelectedValue: Story = {
  args: {
    items: data,
    value: '',
  },
}

export const SelectedValue: Story = {
  args: {
    items: data,
    value: 'redux',
  },
}

export const WithErrorMessage: Story = {
  args: {
    items: data,
    value: '',
    errorMessage: 'Some error message example',
  },
}
