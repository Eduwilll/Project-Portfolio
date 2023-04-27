import * as React from "react";
import { Wrap } from '@chakra-ui/react'
import {
    Image,
    Box,
    Tooltip,
} from "@chakra-ui/react";
const Devicon = () => {
    return (
        <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
            spacing={6}>

            <Wrap spacing='15px' align='center' justify='center'>

                <Tooltip label="C" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/c/c-plain.svg"
                        alt="Profile Image"
                    />
                </Tooltip>
                <Tooltip label="C++" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/cplusplus/cplusplus-plain.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="Git" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/git/git-plain.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="HTML5" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/html5/html5-plain.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="Java" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/java/java-plain.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="Python" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/python/python-plain.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="JavaScripty" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/javascript/javascript-plain.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="Node JS" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/nodejs/nodejs-plain.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="Next JS" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/nextjs/nextjs-original.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="PHP" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/php/php-plain.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="TypeScript" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/typescript/typescript-plain.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="Linux" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='full'
                        src="/images/icons/linux/linux-original.svg"
                        alt="Profile Image" />
                </Tooltip>
                <Tooltip label="Windows" placement='top'>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="none"
                        maxWidth="50px"
                        display="inline-block"
                        borderRadius='none'
                        src="/images/icons/windows8/windows8-original.svg"
                        alt="Profile Image" />
                </Tooltip>
            </Wrap>
        </Box>
    )
};

export default Devicon;