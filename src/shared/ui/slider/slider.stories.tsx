import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderStory: Story = {
  args: {
    minValue: 0,
    maxValue: 100,
    label: 'Slider label text',
  },
}

export const SliderWith10Step: Story = {
  args: {
    minValue: 0,
    maxValue: 100,
    label: 'Slider label text',
    step: 10,
  },
}
