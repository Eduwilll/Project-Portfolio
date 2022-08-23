import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComingSoon from '../public/images/works/thumbComingSoon.jpg'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="comingSoon" title="Coming-Soon" thumbnail={thumbComingSoon}>
                        Coming-Soon
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="comingSoon"
                        title="Coming-Soon"
                        thumbnail={thumbComingSoon}
                    >
                        Coming-Soon
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem
                        id="comingSoon"
                        title="Coming-Soon"
                        thumbnail={thumbComingSoon}
                    >
                        Coming-Soon
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="comingSoon" thumbnail={thumbComingSoon} title="Coming-Soon">
                        Coming-Soon
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Divider />
        </Container>
    </Layout>
)

export default Works
