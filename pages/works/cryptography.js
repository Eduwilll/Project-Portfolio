import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  const Cryptography = () => (
    <Layout title="Cryptography Project">
      <Container>
        <Title>
          Cryptography Project <Badge>2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/cryptography/cryptography-thumb.png" alt="Cryptography project thumbnail" />
        </Center>
        <P>
          A project developed as a requirement for the Information Security course, exploring
          various cryptographic technologies and providing a user-friendly interface for 
          encryption and checksum generation.
        </P>
        <P>
          This application implements encryption functionalities and checksum generation using
          Base64 technology for text encryption and various algorithms for checksum calculation,
          such as MD5, SHA-1, and SHA-256.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Secure hash and message digest algorithms</ListItem>
          <ListItem>Encryption techniques</ListItem>
          <ListItem>Tkinter (Graphical User Interface)</ListItem>
          <ListItem>Base64 encoding for text encryption</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows, macOS, Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Tkinter, Cryptography libraries</span>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/Eduwilll/criptografia-SI">
              GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2023/09/28</span>
          </ListItem>
          <ListItem>
            <Meta>Documentation</Meta>
            <Link href="https://github.com/Eduwilll/criptografia-SI">
              Read on GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Project Highlights</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://github.com/Eduwilll/criptografia-SI" target="_blank">
              <Badge mr={2}>FEATURE</Badge>
                Base64 encryption for text{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Eduwilll/criptografia-SI" target="_blank">
              <Badge mr={2}>FEATURE</Badge>
                Multiple checksum algorithms (MD5, SHA-1, SHA-256){' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/cryptography/cryptography-thumb.png" alt="Main interface" />
          <WorkImage src="/images/works/cryptography/cryptography-screenshot2.png" alt="Encryption process" />
        </SimpleGrid>
        <WorkImage src="/images/works/cryptography/preview.gif" alt="GIF" />
        
 
      </Container>
    </Layout>
  )
  
  export default Cryptography