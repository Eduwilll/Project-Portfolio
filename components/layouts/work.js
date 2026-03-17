import { Container } from '@chakra-ui/react'
import Layout from './article'

const WorkLayout = ({ children, title }) => (
  <Layout title={title}>
    <Container maxW="container.lg">
      {children}
    </Container>
  </Layout>
)

export default WorkLayout
