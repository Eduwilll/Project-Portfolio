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
  
  const Chatbot = () => (
    <Layout title="Chatbot for LLAS Coxitas S/A">
      <Container>
        <Title>
          Chatbot for LLAS Coxitas S/A <Badge>2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/chatbotLLAS/IES300_INTERFACE_01.png" alt="Chatbot thumbnail" />
        </Center>
        <P>
          A comprehensive chatbot solution developed for LLAS Coxitas S/A, a family-owned snack shop,
          to automate customer service via WhatsApp and Telegram.
        </P>
        <P>
          The chatbot optimizes customer service by providing 24/7 automated responses to frequently
          asked questions, menu information, payment methods, delivery fees, and other services.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Developed using Flask framework</ListItem>
          <ListItem>MongoDB for data storage</ListItem>
          <ListItem>Twilio API integration for WhatsApp messaging</ListItem>
          <ListItem>PyCEP Correios for ZIP code lookup and delivery fee calculation</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>WhatsApp, Telegram</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Flask, MongoDB, Twilio API</span>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/seu-usuario/chatbot-loja-salgados">
              GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2023/06/15</span>
          </ListItem>
          <ListItem>
            <Meta>Documentation</Meta>
            <Link href="https://github.com/seu-usuario/chatbot-loja-salgados/README.md">
              Read on GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Project Highlights</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://github.com/seu-usuario/chatbot-loja-salgados" target="_blank">
              <Badge mr={2}>FEATURE</Badge>
                24/7 automated customer service{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/seu-usuario/chatbot-loja-salgados" target="_blank">
              <Badge mr={2}>FEATURE</Badge>
                Integration with WhatsApp and Telegram{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/chatbotLLAS/IES300_INTERFACE_02.png" alt="Chatbot interface" />
          <WorkImage src="/images/works/chatbotLLAS/IES300_INTERFACE_03.png" alt="Conversation flow" />
        </SimpleGrid>
        <WorkImage src="/images/works/chatbotLLAS/IES300_INTERFACE_04.png" alt="Menu display" />
        <WorkImage src="/images/works/chatbotLLAS/IES300_INTERFACE_05.png" alt="Delivery fee calculation" />
      </Container>
    </Layout>
  )
  
  export default Chatbot