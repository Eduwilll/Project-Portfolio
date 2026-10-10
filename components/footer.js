import { Box, Text, Flex, Link, Icon, Divider, VStack } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box as="footer" mt={12} mb={8}>
      <Divider borderColor="divider-subtle" mb={8} />
      <VStack spacing={4}>
        <Flex gap={6} justify="center">
          <Link 
            href="https://github.com/Eduwilll" 
            isExternal
            color="text-faint"
            _hover={{ color: 'accent-teal', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Icon as={IoLogoGithub} boxSize={6} />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/eduardo-fabricio-a00a301a9/" 
            isExternal
            color="text-faint"
            _hover={{ color: 'accent-teal', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Icon as={IoLogoLinkedin} boxSize={6} />
          </Link>
          <Link 
            href="mailto:contato@eduardofabricio.com" 
            color="text-faint"
            _hover={{ color: 'accent-teal', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Icon as={IoMail} boxSize={6} />
          </Link>
        </Flex>
        <Text fontSize="sm" color="text-faint" textAlign="center">
          &copy; {new Date().getFullYear()} Eduardo Fabricio. Todos os direitos reservados.
        </Text>
        <Text fontSize="xs" color="text-faint">
          Construído com Next.js, Chakra UI e Three.js
        </Text>
      </VStack>
    </Box>
  )
}

export default Footer
