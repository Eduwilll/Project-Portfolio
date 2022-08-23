import NextLink from 'next/link'
import {
    Container,
    Box,
    Button,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Tooltip
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article';
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio';
import Devicon from '../components/devicon-lengs';

const Home = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a student at Fatec Campinas in Brazil and I am studying Systems Analysis and Development
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Eduardo Fabricio Goza
                        </Heading>
                        <p>Developer and Cybersecurity Enthusiast</p>
                    </Box>

                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center">

                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius='50%'
                            src="/images/MyImage.jpg"
                            alt="Profile Image" />
                    </Box>
                </Box>
                <Section dalay={0.1}>
                    <Heading as="h2" variant="section-title">
                        Experience with
                    </Heading>
                    <Devicon />
                </Section>


                <Section dalay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Eduardo is a Systems Analysis and Development student at Fatec - Campinas and a cybersecurity enthusiast based in São Paulo - Brazil. Recently he has focused on studying React Native, Cisco CNNA and Java. Future works and projects will be posted on this site! Current {''} <NextLink href="/works"><Link>work</Link></NextLink>.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1997</BioYear>
                        Born in Sumaré/SP, Brazil.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        joined FATEC-campinas to study Systems Analysis and Development
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Rock Music, Movies, Series, Animes, Games and Programing
                    </Paragraph>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Social Links
                    </Heading>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="left">

                        <Link href='https://www.linkedin.com/in/eduardo-fabricio-goza-669b641b4/' target="_blank">
                            <Tooltip label="Linkedin" >
                                <Image
                                    borderColor="whiteAlpha.800"
                                    borderWidth={2}
                                    borderStyle="none"
                                    maxWidth="50px"
                                    display="inline-block"
                                    borderRadius='none'
                                    src="/images/icons/linkedin/linkedin-original.svg"
                                    alt="Profile Image"
                                    data-tooltip="some more information"
                                />
                            </Tooltip>
                        </Link>

                        <Link href="https://github.com/Eduwilll" target="_blank">
                            <Tooltip label="GitHub" >
                                <Image
                                    borderColor="whiteAlpha.800"
                                    borderWidth={2}
                                    borderStyle="none"
                                    maxWidth="50px"
                                    display="inline-block"
                                    borderRadius='none'
                                    src="/images/icons/github/github-original.svg"
                                    alt="Profile Image"
                                    data-tooltip="some more information"
                                />
                            </Tooltip>
                        </Link>

                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home