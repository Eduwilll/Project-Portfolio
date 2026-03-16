import { Container, Heading, SimpleGrid, Divider, Text, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbEcommerce from '../public/images/works/ecommerce/ecommerce-thumb.png';
import thumbCryptography from '../public/images/works/cryptography/cryptography-thumb.png';
import thumbMedlife from "../public/images/works/medlife/medlife-thumb.png";
import thumbChabot from "../public/images/works/chatbotLLAS/chabot-thumb.png";
import thumbDash from "../public/images/works/dashboardchatbot/dash-thumb.jpeg";

const Works = () => (
    <Layout title="Works">
        <Container maxW="container.md">
            <Section>
                <Heading as="h3" fontSize={28} mb={2} variant="section-title">
                    Projetos
                </Heading>
                <Text color="whiteAlpha.700" mb={8}>
                    Uma seleção dos meus trabalhos mais recentes em desenvolvimento web e mobile.
                </Text>
            </Section>
            <SimpleGrid columns={[1, 1, 2]} gap={8} alignItems="start">
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
                    <WorkGridItem id="dashboardchatbot" title="Dashboard for LLAS Coxitas S/A" thumbnail={thumbDash}>
                        Chatbot Project for Automating Customer Service for a Salgaderia on WhatsApp
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="chatbotLLAS" title="Chatbot for LLAS Coxitas S/A" thumbnail={thumbChabot}>
                        Chatbot Project for Automating Customer Service for a Salgaderia on WhatsApp
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
            <Divider my={8} borderColor="whiteAlpha.200" />
        </Container>
    </Layout>
)

export default Works
