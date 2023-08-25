import { Meta, StoryObj } from '@storybook/react'

import { Button } from '..'

import { Dropdown, DropdownItemWithIcon } from '.'

import { CloseIcon } from '@/assets/icons'
import defoltAva from '@/assets/icons/defolt-ava.jpg'
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
        <DropdownItemWithIcon icon={<CloseIcon />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<CloseIcon />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<CloseIcon />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<CloseIcon />} text="Удалить" onSelect={() => {}} />
      </>
    ),
    trigger: (
      <Button variant={'tertiary'}>
        <Avatar src={defoltAva} />
      </Button>
    ),
  },
}
