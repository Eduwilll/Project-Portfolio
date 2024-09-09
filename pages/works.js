import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import thumbComingSoon from '../public/images/works/thumbComingSoon.jpg'
import thumbEcommerce from '../public/images/works/ecommerce/ecommerce-thumb.png';
import thumbCryptography from '../public/images/works/cryptography/cryptography-thumb.png';
import thumbMedlife  from "../public/images/works/medlife/medlife-thumb.png";
import thumbChabot  from "../public/images/works/chatbotLLAS/chabot-thumb.jpeg";
const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="medlife"
                        title="Medlife"
                        thumbnail={thumbMedlife}
                    >
                        Coming-Soon
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="chatbotLLAS" title="Chatbot for LLAS Coxitas S/A" thumbnail={thumbChabot}>
                    Projeto Chatbot para automação de atentimento ao cliente de uma Loja de Salgado para whatsapps.
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem
                        id="cryptography"
                        title="Cryptography Project"
                        thumbnail={thumbCryptography}
                    >
                        Exploring
                        various cryptographic technologies and providing a user-friendly interface for
                        encryption and checksum generation.
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
