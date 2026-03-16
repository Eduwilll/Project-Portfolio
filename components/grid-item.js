import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} scroll={false}>
      <LinkBox 
        cursor="pointer"
        role="group"
        transition="transform 0.2s ease"
        _hover={{ transform: 'translateY(-4px)' }}
      >
        <Box 
          position="relative" 
          overflow="hidden" 
          borderRadius="12px" 
          width="100%"
          height="0"
          paddingBottom="62.5%"
          bg="gray.800"
          boxShadow="lg"
          transition="all 0.3s ease"
          _groupHover={{ 
            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Box
            position="absolute"
            inset={0}
            bg="blackAlpha.400"
            opacity={0}
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text 
              color="white" 
              fontWeight="bold" 
              fontSize="sm"
              bg="teal.500"
              px={4}
              py={2}
              borderRadius="md"
            >
              Ver Projeto
            </Text>
          </Box>
        </Box>
        <LinkOverlay href={`/works/${id}`}>
          <Text 
            mt={3} 
            fontSize={18} 
            fontWeight="semibold"
            transition="color 0.2s ease"
            _groupHover={{ color: 'teal.300' }}
          >
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} color="whiteAlpha.700" mt={1}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
