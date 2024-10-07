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
  
  const ChatbotDashboard = () => (
    <Layout title="Chatbot Dashboard">
      <Container>
        <Title>
          Chatbot Dashboard <Badge>2024</Badge>
        </Title>
        <Center my={6}>
          <Image src="https://i.imgur.com/4IC7Hrt.jpeg" alt="Chatbot dashboard screenshot" />
        </Center>
        <P>
          This project is a Chatbot developed for automating customer service for a snack store via WhatsApp. It uses various technologies to provide a user-friendly web interface and efficient integration with WhatsApp.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Developed with Flask and Flask-SQLAlchemy</ListItem>
          <ListItem>Database manipulation using SQLAlchemy</ListItem>
          <ListItem>WhatsApp integration for automated messaging</ListItem>
          <ListItem>Web-based interface for chatbot management</ListItem>
        </UnorderedList>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flask, SQLAlchemy, Jinja2</span>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/Eduwilll/LLA-Coxitas-Dashboard" target="_blank">
              GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2024/10/07</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Project Highlights</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://github.com/Eduwilll/LLA-Coxitas-Dashboard" target="_blank">
              <Badge mr={2}>coming soon</Badge>
                WhatsApp integration for automated messaging{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Eduwilll/LLA-Coxitas-Dashboard" target="_blank">
              <Badge mr={2}>coming soon</Badge>
                Web-based interface for easy chatbot management{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="https://i.imgur.com/4IC7Hrt.jpeg" alt="Chatbot Home Page" />
          <WorkImage src="https://i.imgur.com/sEXh0oh.jpeg" alt="Chatbot Admin Page" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default ChatbotDashboard
  