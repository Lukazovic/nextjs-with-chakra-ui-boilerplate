import { Flex, Heading } from '@chakra-ui/react'

type HeroProps = {
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
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)

export default Hero
