import { Flex, Heading, Img } from '@chakra-ui/react'

export type HeroProps = {
  title?: string
}

const Hero = ({ title = 'NextJS with Chakra-ui Boilerplate' }: HeroProps) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Img src="/img/chakra-logo.png" alt="Chakra-ui Logo" mr={4} />
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)

export default Hero
