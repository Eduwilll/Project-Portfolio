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
  
  const Ecommerce = () => (
    <Layout title="Electronic Components E-commerce">
      <Container>
        <Title>
          Electronic Components E-commerce <Badge>2021</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/ecommerce/ecommerce-thumb.png" alt="E-commerce thumbnail" />
        </Center>
        <P>
          A comprehensive e-commerce platform for selling electronic components, developed as a project
          for the Database Laboratory course.
        </P>
        <P>
          The system includes user registration functionality, product browsing,
          shopping cart, PayPal checkout, and a complete admin dashboard.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Developed in PHP with MySQL</ListItem>
          <ListItem>Full CRUD implementation</ListItem>
          <ListItem>PayPal integration for payments</ListItem>
          <ListItem>Admin dashboard for e-commerce management</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, MySQL, HTML, CSS, JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/Eduwilll/PHP-E_commerce">
              GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2023/06/15</span>
          </ListItem>
          <ListItem>
            <Meta>Documentation</Meta>
            <Link href="https://github.com/Eduwilll/PHP-E_commerce/blob/master/README.MD">
              Read on GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Project Highlights</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://github.com/Eduwilll/PHP-E_commerce" target="_blank">
              <Badge mr={2}>NEW</Badge>
                PayPal integration for secure payments{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Eduwilll/PHP-E_commerce" target="_blank">
              <Badge mr={2}>FEATURE</Badge>
                Complete admin dashboard for e-commerce management{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/ecommerce/ecommerce-screenshot1.png" alt="Home page" />
          <WorkImage src="/images/works/ecommerce/ecommerce-screenshot2.jpeg" alt="Shopping cart" />
        </SimpleGrid>
        <WorkImage src="/images/works/ecommerce/ecommerce-screenshot3.jpeg" alt="User Login" />
        <WorkImage src="/images/works/ecommerce/ecommerce-screenshot5.jpeg" alt="Admin dashboard" />
        <WorkImage src="/images/works/ecommerce/ecommerce-screenshot6.jpeg" alt="Admin dashboard" />
      </Container>
    </Layout>
  )
  
  export default Ecommerce