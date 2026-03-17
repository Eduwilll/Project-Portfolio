import {
    Container,
    Box,
    Button,
    Heading,
    Image,
    Text,
    Flex,
    Badge,
    Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article';
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio';
import Devicon from '../components/devicon-lengs';
import SocialLinks from '../components/SocialLinks';
import IntroBox from '../components/introBox';
import CustomLink from '../components/CustomLink';
import SkillsSection from '../components/skills-section';
import TimelineSection from '../components/timeline-section';

const Home = () => (
    <Layout>
        <Container maxW="container.md">

            <IntroBox />

            {/* Hero Section */}
            <Box display={{ md: 'flex' }} alignItems="center" mb={8}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" fontSize={{ base: '3xl', md: '4xl' }}>
                        Eduardo Fabricio
                    </Heading>
                    <Text
                        fontSize="lg"
                        color="teal.300"
                        fontWeight="medium"
                        mt={1}
                    >
                        Full Stack Developer
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.700" mt={2}>
                        Cybersecurity Enthusiast | Cloud Computing | Mobile Development
                    </Text>
                    <Flex gap={2} mt={3} flexWrap="wrap">
                        <Badge colorScheme="teal" variant="subtle" px={2} py={1}>React</Badge>
                        <Badge colorScheme="blue" variant="subtle" px={2} py={1}>TypeScript</Badge>
                        <Badge colorScheme="green" variant="subtle" px={2} py={1}>Node.js</Badge>
                        <Badge colorScheme="purple" variant="subtle" px={2} py={1}>AWS</Badge>
                    </Flex>
                </Box>

                <Box
                    flexShrink={0}
                    mt={{ base: 6, md: 0 }}
                    ml={{ md: 8 }}
                    align="center"
                >
                    <Box
                        position="relative"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: '-4px',
                            left: '-4px',
                            right: '-4px',
                            bottom: '-4px',
                            borderRadius: 'full',
                            bg: 'linear-gradient(135deg, teal.400, blue.500)',
                            zIndex: -1,
                        }}
                    >
                        <Image
                            borderColor="gray.800"
                            borderWidth={4}
                            borderStyle="solid"
                            borderRadius='full'
                            boxSize="140px"
                            objectFit="cover"
                            src="/images/MyImage.webp"
                            alt="Eduardo Fabricio"
                        />
                    </Box>
                </Box>
            </Box>

            {/* About Section */}
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Paragraph>
                    Systems Analysis and Development graduate from Fatec - Campinas (2025) and cybersecurity enthusiast based in Sao Paulo, Brazil. Currently working as a Freelancer focused on Web Development and Process Automation. AWS Cloud Foundation certified and exploring DevOps. Check out my <CustomLink href={'/works/medlife'}>current work</CustomLink>.
                </Paragraph>

                <Box align="center" my={6}>
                    <CustomLink href="/works">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                            size="lg"
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            transition="all 0.2s"
                        >
                            View Portfolio
                        </Button>
                    </CustomLink>
                </Box>
            </Section>

            {/* Tech Stack */}
            <Section delay={0.15}>
                <Heading as="h3" variant="section-title">
                    Tech Stack
                </Heading>
                <Devicon />
            </Section>

            <Divider borderColor="whiteAlpha.200" my={6} />

            {/* Skills Section */}
            <SkillsSection />

            <Divider borderColor="whiteAlpha.200" my={6} />

            {/* Timeline Section */}
            <TimelineSection />

            <Divider borderColor="whiteAlpha.200" my={6} />

            {/* Bio Section */}
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born in Sumaré/SP, Brazil.
                </BioSection>
                <BioSection>
                    <BioYear>2015</BioYear>
                    Administrative Assistant at CJ Lan House
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Started Systems Analysis and Development at FATEC-Campinas
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Systems Development Intern at Sottelli (until 2024)
                </BioSection>
                <BioSection>
                    <BioYear>2025</BioYear>
                    Graduated from FATEC-Campinas with a degree in Systems Analysis and Development
                </BioSection>
                <BioSection>
                    <BioYear>2024</BioYear>
                    Obtained AWS Cloud Foundation certification and started exploring DevOps. Began freelancing in Web Development and Process Automation.
                </BioSection>
            </Section>

            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    Interests
                </Heading>
                <Flex gap={3} flexWrap="wrap">
                    <Badge bg="whiteAlpha.100" color="whiteAlpha.800" px={3} py={2} borderRadius="md">
                        Rock Music
                    </Badge>
                    <Badge bg="whiteAlpha.100" color="whiteAlpha.800" px={3} py={2} borderRadius="md">
                        Movies & Series
                    </Badge>
                    <Badge bg="whiteAlpha.100" color="whiteAlpha.800" px={3} py={2} borderRadius="md">
                        Animes
                    </Badge>
                    <Badge bg="whiteAlpha.100" color="whiteAlpha.800" px={3} py={2} borderRadius="md">
                        Games
                    </Badge>
                    <Badge bg="whiteAlpha.100" color="whiteAlpha.800" px={3} py={2} borderRadius="md">
                        Programming
                    </Badge>
                </Flex>
            </Section>

            <Divider borderColor="whiteAlpha.200" my={6} />

            <Section delay={0.6}>
                <Heading as="h3" variant="section-title">
                    Social Links
                </Heading>
                <SocialLinks />
            </Section>
        </Container>
    </Layout>
)

export default Home
