import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { theme as chakraTheme } from '@chakra-ui/react'

import { withChakraUi } from './custom-decorators/withChakraUi'
import { withColorModeSwitch } from './custom-decorators/withColorModeSwitch'

export const parameters = {
  backgrounds: {
    default: 'dark',
    layout: 'fullscreen',
    values: [
      {
        name: 'light',
        value: chakraTheme.colors.gray['50']
      },
      {
        name: 'dark',
        value: chakraTheme.colors.gray['900']
      }
    ]
  }
}

addDecorator(withNextRouter())

export const decorators = [withColorModeSwitch] // REMOVE if your application don't use color mode switch
// export const decorators = [withChakraUi] // USE this one if your application don't use color mode switch
