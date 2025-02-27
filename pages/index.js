import {
    Container,
    Box,
    Button,
    Heading,
    Image,
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
// import NameIntro from "../components/NameIntro";
const Home = () => (
    <Layout>
        <Container>

            <IntroBox />

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        {/* <NameIntro /> */}
                        Eduardo Fabricio
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
                        borderRadius='50%'
                        boxSize="120px"
                        objectFit="cover"
                        fill={true}
                        src="/images/MyImage.webp"
                        alt="Profile Image" />
                </Box>
            </Box>
            <Section dalay={0.1}>
                <Heading as="h2" variant="section-title">
                    Experience with
                </Heading>
                <Devicon />
            </Section>
            {/**
         
         *
         */}

            <Section dalay={0.2}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Eduardo is a Systems Analysis and Development student at Fatec - Campinas and a cybersecurity enthusiast based in São Paulo, Brazil. Recently, he has been focusing on developing Android applications using Java and studying AWS Cloud technologies. Future projects and updates will be shared on this site! Check out his current <CustomLink href={'/works/medlife'}>work</CustomLink>.
                </Paragraph>

                <Box align="center" my={4}>
                    <CustomLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My portfolio</Button>
                    </CustomLink>
                </Box>
            </Section>
            <Section delay={0.3}>
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
                    joined FATEC-campinas to study Systems Analysis and Development
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Systems Developer Intern at Sottelli
                </BioSection>
            </Section>

            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Rock Music, Movies, Series, Animes, Games and Programing
                </Paragraph>
            </Section>
            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    Social Links
                </Heading>
                <SocialLinks />
            </Section>
        </Container>
    </Layout>
)

export default Home