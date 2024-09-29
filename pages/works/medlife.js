import {
  Container,
  Badge,
  // Link,
  List,
  ListItem,
  // SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import FigmaEmbed from '../../components/figmaEmbed'

const Work = () => (
  <Layout title="MEDLIFE: Prescription Medication Marketplace">
    <Container>
      <Title>
        MEDLIFE <Badge>2024</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/medlife/medlife-thumb.png" alt="MEDLIFE app thumbnail" />
      </Center>
      <Alert my={4}
        status='info'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        // height='200px'
        borderRadius='12px'
      >
        <AlertIcon />
        <AlertTitle>
          Application Development Info!
        </AlertTitle>
        This content is not complete and will be updated over time. What is available here is just a small part of the prototype currently under development.
      </Alert>
      <P>
        MEDLIFE is a mobile marketplace application developed to address specific needs that
        became prominent with the advent of COVID-19. It focuses on the online sale of
        prescription medications, aiming to provide a secure and efficient platform for users,
        with a particular emphasis on benefiting the elderly population.
      </P>
      <P>
        This project employs agile methodologies such as Solo Scrum and Extreme Programming,
        which are well-suited for mobile app development. The goal is to create a secure,
        stable, functional, and testable application that offers positive societal impact.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Secure online marketplace for prescription medications</ListItem>
        <ListItem>Developed using agile methodologies (Solo Scrum, Extreme Programming)</ListItem>
        <ListItem>Focus on user security and ease of use, especially for elderly users</ListItem>
        <ListItem>Designed to address needs highlighted by the COVID-19 pandemic</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <span>Private Repository</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2023/08/07</span>
        </ListItem>
        <ListItem>
          <Meta>Documentation</Meta>
          <span>Private Access Only</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>High-Fidelity User Interface (UI)</Center>
      </Heading>

      <FigmaEmbed embedUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fj0YlIVGjqxZwZ4F8ZijvKX%2FPrototipe-MedLife%3Fnode-id%3D15-793%26starting-point-node-id%3D15%253A793%26t%3DW3qfOoW9shm1GVXA-1" />
      <P>
        These high-fidelity prototypes were created using Figma, showcasing the app&apos;s user interface
        and key features. They demonstrate the app&apos;s focus on user-friendly design, particularly
        for elderly users, and the secure process for purchasing prescription medications.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>Secure user authentication and prescription verification</ListItem>
        <ListItem>Easy-to-use interface designed with elderly users in mind</ListItem>
        <ListItem>Secure payment processing for medication purchases</ListItem>
        <ListItem>Integration with local pharmacies for medication fulfillment</ListItem>
        <ListItem>Reminder system for medication schedules and refills</ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work