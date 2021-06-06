import { ChakraProvider, Flex, Switch, useColorMode } from '@chakra-ui/react'

import theme from '../../src/theme'

const customTheme = {
  ...theme,
  styles: {
    ...theme.styles,
    global: {
      ...theme.styles.global,
      '.sb-show-main.sb-main-padded': {
        padding: '0',
      }
    }
  }

}

const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }

  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingTop="3em"
      minHeight="100vh"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      aria-label="toggle color mode"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}

export const withColorModeSwitch = (Story) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <Container>
      <ThemeSwitch />

      <Story />
    </Container>
  </ChakraProvider>
)
