import { Meta } from '@storybook/react'

import { TabContent, Tabs } from '@/shared/ui'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    tabs: [
      { value: 'Switcher1', title: 'Switcher1' },
      { value: 'Switcher2', title: 'Switcher2' },
      { value: 'Switcher3', title: 'Switcher3' },
      { value: 'Switcher4', title: 'Switcher4' },
      { value: 'Switcher5', title: 'Switcher5' },
    ],
    defaultValue: 'Switcher1',
    children: (
      <>
        <TabContent value="Switcher1">Switcher1</TabContent>
        <TabContent value="Switcher2">Switcher2</TabContent>
        <TabContent value="Switcher3">Switcher3</TabContent>
        <TabContent value="Switcher4">Switcher4</TabContent>
        <TabContent value="Switcher5">Switcher5</TabContent>
      </>
    ),
  },
} as Meta<typeof Tabs>

export const Primary = {}

export const PrimaryWithDisabled = {
  args: {
    tabs: [
      { value: 'Switcher1', title: 'Switcher1' },
      { value: 'Switcher2', title: 'Switcher2' },
      { value: 'Switcher3', title: 'Switcher3' },
      { value: 'Switcher4', title: 'Switcher4' },
      { value: 'Switcher5', title: 'Switcher5', disabled: true },
    ],
  },
}

export const FullWidth = {
  args: {
    fullWidth: true,
  },
}
