import NextLink from 'next/link'
import {
    Container,
    Box,
    Button,
    Heading,
    Image,
    useColorModeValue,
    Link
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio';
const Home = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
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
                        borderRadius="full"
                        src="/images/eduardo.jpg"
                        alt="Profile Image" />
                </Box>
            </Box>
            <Section dalay ={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Labore sint reprehenderit quis mollit. Veniam ea nulla laborum laborum laborum nulla proident ullamco id in officia aliquip velit. Commodo excepteur adipisicing in eiusmod ex in laborum laborum amet occaecat in eu irure. Excepteur pariatur nulla adipisicing sit ad irure irure cupidatat mollit.<br></br>
                Occaecat occaecat ipsum sit aliqua adipisicing veniam dolore et culpa commodo est elit consequat adipisicing. Aute cillum do minim commodo dolore. Incididunt anim ullamco labore anim mollit voluptate velit id aliquip sint fugiat ullamco consectetur. Aliqua irure est elit Lorem sunt nisi ipsum est mollit dolore. Deserunt aute consectetur pariatur officia laborum dolore labore et ex cupidatat non velit do ad.. Current product called{''} <NextLink href= "/works/work"><Link>work</Link></NextLink>.
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
                Rock Music, Movies, Series, Animes, Programing
            </Paragraph>
            </Section>
        </Container>
    )
}

export default Home