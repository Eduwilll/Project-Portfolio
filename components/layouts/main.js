import Head from 'next/head';
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
    ssr: false,
    loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name='description' content='Eduardo homepage'/>
                <meta name='author' content='Eduardo Fabricio' />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Eduardo Fabiricio- Homepage</title>
                <meta name="twitter:title" content="Eduardo Fabricio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://eduwill-homepage.vercel.app/images/card.jpg" />
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelDog />
                {children}
                <Footer />

            </Container>
        </Box>
    )
}
export default Main;