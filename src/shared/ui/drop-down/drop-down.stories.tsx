import { Meta, StoryObj } from '@storybook/react'

import { EditIcon } from '@/shared/assets'
import { Button, Dropdown, DropdownItemWithIcon } from '@/shared/ui'

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
        <DropdownItemWithIcon icon={<EditIcon />} text="Изменить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<EditIcon />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<EditIcon />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<EditIcon />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<EditIcon />} text="Удалить" onSelect={() => {}} />
      </>
    ),
    trigger: <Button>open</Button>,
  },
}
