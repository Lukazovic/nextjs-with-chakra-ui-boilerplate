import { Story, Meta } from '@storybook/react/types-6-0'

import Hero, { HeroProps } from '.'

export default {
  title: 'Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<HeroProps> = (args) => <Hero {...args} />
