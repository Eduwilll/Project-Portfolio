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

const Work = () => (
  <Layout title="comingSoon">
    <Container>
      <Title>
        Coming Soon <Badge>2022-2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/thumbComingSoon.jpg" alt="icon" />
      </Center>
      <P>
        Project
      </P>
      <P>
        APP
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Coming soon!</ListItem>
        <ListItem>2022</ListItem>
        
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/Eduwilll">
            v1.0
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2022/08/10</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://github.com/Eduwilll">Read on GitHub</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/Eduwilll" target="_blank">
            <Badge mr={2}>NEW</Badge>
              PROJECTS{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/thumbComingSoon.jpg" alt="amembo" />
        <WorkImage src="/images/works/thumbComingSoon.jpg" alt="amembo" />
      </SimpleGrid>
      <WorkImage src="/images/works/thumbComingSoon.jpg" alt="amembo" />
      <WorkImage src="/images/works/thumbComingSoon.jpg" alt="amembo" />
    </Container>
  </Layout>
)

export default Work
