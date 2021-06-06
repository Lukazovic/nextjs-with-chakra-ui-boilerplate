import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>NextJS with Chakra-ui Boilerplate</title>
        <link rel="shortcut icon" href="/img/chakra-logo.png" />
        <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="NextJS with Chakra-ui Boilerplate" />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
