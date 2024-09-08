import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComingSoon from '../public/images/works/thumbComingSoon.jpg'
import thumbEcommerce from '../public/images/works/ecommerce/ecommerce-thumb.png';

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
                    <WorkGridItem id="ecommerce" thumbnail={thumbEcommerce} title="Electronic Components E-commerce">
                    E-commerce platform for selling electronic components.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Divider />
        </Container>
    </Layout>
)

export default Works
