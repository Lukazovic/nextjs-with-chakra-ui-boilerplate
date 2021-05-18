import { render, RenderResult } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'

export const customRender = (children: React.ReactNode): RenderResult =>
  render(
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  )

export * from '@testing-library/react'
export { customRender as render }
