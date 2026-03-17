import { Container, Heading, SimpleGrid, Divider, Text, Box, Button, Flex } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import CustomLink from '../components/CustomLink'

import thumbEcommerce from '../public/images/works/ecommerce/ecommerce-thumb.png';
import thumbCryptography from '../public/images/works/cryptography/cryptography-thumb.png';
import thumbMedlife from "../public/images/works/medlife/medlife-thumb.png";
import thumbChabot from "../public/images/works/chatbotLLAS/chabot-thumb.png";
import thumbDash from "../public/images/works/dashboardchatbot/dash-thumb.jpeg";

const Works = () => (
    <Layout title="Works">
        <Container maxW="container.lg">
            <Section>
                <Heading as="h3" fontSize={28} mb={2} variant="section-title">
                    Projects
                </Heading>
                <Text color="whiteAlpha.700" mb={8}>
                    A selection of my most recent works in web and mobile development.
                </Text>
            </Section>

            {/* Featured Current Work */}
            <Section delay={0.1}>
                <Box
                    bg="whiteAlpha.50"
                    borderRadius="xl"
                    p={6}
                    border="1px solid"
                    borderColor="teal.300"
                    position="relative"
                    overflow="hidden"
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        bg: 'linear-gradient(90deg, teal.400, blue.500)',
                    }}
                >
                    <Flex align="center" gap={4} direction={{ base: 'column', md: 'row' }}>
                        <Box flex={1}>
                            <Text
                                bg="teal.500"
                                color="white"
                                px={3}
                                py={1}
                                borderRadius="md"
                                fontSize="sm"
                                fontWeight="bold"
                                display="inline-block"
                                mb={3}
                            >
                                CURRENT PROJECT
                            </Text>
                            <Heading as="h4" fontSize="2xl" mb={2}>
                                Medlife - Healthcare Management System
                            </Heading>
                            <Text color="whiteAlpha.700" mb={4}>
                                A comprehensive healthcare management platform designed to streamline patient care, appointment scheduling, and medical record management. Built with modern web technologies and cloud infrastructure.
                            </Text>
                            <Text fontSize="sm" color="teal.300" mb={4}>
                                Technologies: React, Node.js, MongoDB, AWS, Docker
                            </Text>
                            <CustomLink href="/works/medlife">
                                <Button
                                    rightIcon={<ChevronRightIcon />}
                                    colorScheme="teal"
                                    size="md"
                                >
                                    View Details
                                </Button>
                            </CustomLink>
                        </Box>
                        <Box
                            flexShrink={0}
                            w={{ base: '100%', md: '300px' }}
                            h="200px"
                            borderRadius="lg"
                            overflow="hidden"
                            position="relative"
                        >
                            <Image
                                src={thumbMedlife}
                                alt="Medlife Healthcare Management System"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    </Flex>
                </Box>
            </Section>

            <Divider borderColor="whiteAlpha.200" my={8} />

            {/* Other Projects */}
            <Section delay={0.2}>
                <Heading as="h4" fontSize={24} mb={4} variant="section-title">
                    Other Projects
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={8} alignItems="start">
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
                            Exploring Cryptography Concepts and Implementations
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.1}>
                        <WorkGridItem
                            id="ecommerce"
                            title="E-commerce Platform"
                            thumbnail={thumbEcommerce}
                        >
                            Full-stack e-commerce solution with payment integration
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Works
