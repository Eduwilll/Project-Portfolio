import React from 'react';
import { Box, Link, Tooltip, Wrap, WrapItem, Text, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { IoOpenOutline } from 'react-icons/io5';

const AnimatedSocialLink = ({ href, label, iconSrc, description }) => {
  const cardBg = useColorModeValue('white', 'whiteAlpha.100')
  const cardBorder = useColorModeValue('gray.200', 'transparent')
  const cardHoverBg = useColorModeValue('gray.50', 'whiteAlpha.200')
  const labelColor = useColorModeValue('gray.800', 'white')
  const iconColor = useColorModeValue('gray.500', 'whiteAlpha.600')

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
      <Tooltip label={description || label} placement="top" hasArrow>
        <Box
          position="relative"
          bg={cardBg}
          borderRadius="xl"
          p={4}
          transition="all 0.3s ease"
          border="1px solid"
          borderColor={cardBorder}
          _hover={{
            transform: 'translateY(-4px)',
            bg: cardHoverBg,
            borderColor: 'teal.500',
            boxShadow: '0 10px 30px -10px rgba(0, 128, 128, 0.3)'
          }}
        >
          <Flex align="center" gap={3}>
            <Box position="relative" width="32px" height="32px" flexShrink={0}>
              <Image
                src={iconSrc}
                alt={label}
                width={32}
                height={32}
                style={{ width: '32px', height: '32px' }}
              />
            </Box>
            <Box>
              <Flex align="center" gap={1}>
                <Text fontWeight="semibold" fontSize="sm" color={labelColor}>
                  {label}
                </Text>
                <Icon as={IoOpenOutline} boxSize={3} color={iconColor} />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Tooltip>
    </Link>
  )
};

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/eduardo-fabricio-goza-669b641b4/",
      label: "LinkedIn",
      iconSrc: "/images/icons/linkedin/linkedin-original.svg",
      description: "Conecte-se comigo no LinkedIn"
    },
    {
      href: "https://github.com/Eduwilll",
      label: "GitHub",
      iconSrc: "/images/icons/github/github-original.svg",
      description: "Veja meus repositorios"
    },
    {
      href: "https://www.salesforce.com/trailblazer/eduardofabriciog",
      label: "Trailhead",
      iconSrc: "/images/icons/salesforce/Trailhead_old.svg",
      description: "Meu perfil Salesforce Trailhead"
    },
  ];

  return (
    <Box mt={2}>
      <Wrap spacing={4} align='stretch'>
        {socialLinks.map((link, index) => (
          <WrapItem key={index}>
            <AnimatedSocialLink {...link} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default SocialLinks;
