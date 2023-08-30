import { Meta, StoryObj } from '@storybook/react'

import { Button } from '..'
import { Close } from '../../../assets/icons'
import defolt from '../../../assets/icons/defolt-ava.jpg'

import { Dropdown, DropdownItemWithIcon } from '.'

import { Avatar } from '@/components/ui/avatar'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={<Close />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Close />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Close />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Close />} text="Удалить" onSelect={() => {}} />
      </>
    ),
    trigger: (
      <Button variant={'tertiary'}>
        <Avatar src={defolt} />
      </Button>
    ),
  },
}
