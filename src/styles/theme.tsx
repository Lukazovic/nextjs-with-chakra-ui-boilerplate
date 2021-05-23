import { extendTheme, withDefaultColorScheme, theme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const customTheme = extendTheme(
  {
    config: { initialColorMode: 'dark', useSystemColorMode: false },
    colors: {
      primary: theme.colors.teal
    },
    fonts,
    breakpoints,
    shadows: {
      outline: `0 0 0 3px ${theme.colors.teal['400']}`
    }
  },
  withDefaultColorScheme({ colorScheme: 'teal' })
)

export default customTheme
