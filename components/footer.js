import { Box, Text, Flex, Link, Icon, Divider, VStack } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box as="footer" mt={12} mb={8}>
      <Divider borderColor="whiteAlpha.200" mb={8} />
      <VStack spacing={4}>
        <Flex gap={6} justify="center">
          <Link 
            href="https://github.com/Eduwilll" 
            isExternal
            color="whiteAlpha.600"
            _hover={{ color: 'teal.300', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Icon as={IoLogoGithub} boxSize={6} />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/eduardo-fabricio-a00a301a9/" 
            isExternal
            color="whiteAlpha.600"
            _hover={{ color: 'teal.300', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Icon as={IoLogoLinkedin} boxSize={6} />
          </Link>
          <Link 
            href="mailto:contato@eduardofabricio.com" 
            color="whiteAlpha.600"
            _hover={{ color: 'teal.300', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Icon as={IoMail} boxSize={6} />
          </Link>
        </Flex>
        <Text fontSize="sm" color="whiteAlpha.500" textAlign="center">
          &copy; {new Date().getFullYear()} Eduardo Fabricio. Todos os direitos reservados.
        </Text>
        <Text fontSize="xs" color="whiteAlpha.400">
          Construído com Next.js, Chakra UI e Three.js
        </Text>
      </VStack>
    </Box>
  )
}

export default Footer
