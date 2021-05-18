import { Story, Meta } from '@storybook/react/types-6-0'

import DarkModeSwitch from '.'

export default {
  title: 'DarkModeSwitch',
  component: DarkModeSwitch
} as Meta

export const Default: Story = (args) => <DarkModeSwitch {...args} />
