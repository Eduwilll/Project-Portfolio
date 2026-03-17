import React from 'react';
import { Box, Link, Tooltip, Wrap, WrapItem, Text, Flex, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { IoOpenOutline } from 'react-icons/io5';

const AnimatedSocialLink = ({ href, label, iconSrc, description }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
    <Tooltip label={description || label} placement="top" hasArrow>
      <Box
        position="relative"
        bg="whiteAlpha.100"
        borderRadius="xl"
        p={4}
        transition="all 0.3s ease"
        border="1px solid"
        borderColor="transparent"
        _hover={{ 
          transform: 'translateY(-4px)',
          bg: 'whiteAlpha.200',
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
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Box>
            <Flex align="center" gap={1}>
              <Text fontWeight="semibold" fontSize="sm" color="white">
                {label}
              </Text>
              <Icon as={IoOpenOutline} boxSize={3} color="whiteAlpha.600" />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Tooltip>
  </Link>
);

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
