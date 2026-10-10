import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/ui/section'
import { GridItem } from '../components/ui/grid-item'

import thumbComingSoon from '../public/images/works/thumbComingSoon.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Coming Soon"
            thumbnail={thumbComingSoon}
            href="/"
          />
          <GridItem
            title="Coming Soon"
            thumbnail={thumbComingSoon}
            href="/"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
