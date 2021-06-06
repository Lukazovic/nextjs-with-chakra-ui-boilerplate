import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ChakraProvider, theme as chakraTheme } from '@chakra-ui/react'

import { withColorModeSwitch } from './withColorModeSwitch'

import theme from '../src/styles/theme'

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

export const decorators = [withColorModeSwitch] // remove if your application don't use color mode switch

// If your application don't use color mode switch, you can use the code bellow
// export const decorators = [
//   (Story) => (
//     <ChakraProvider resetCSS theme={theme}>
//       <Story />
//     </ChakraProvider>
//   )
// ]
