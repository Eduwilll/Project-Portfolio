import React from 'react';
import { Box, Link, Tooltip, Wrap, WrapItem, keyframes } from '@chakra-ui/react';
import Image from 'next/image';

const growAndElevateKeyframes = keyframes`
  0% { transform: scale(1) translateY(0); }
  100% { transform: scale(1.1) translateY(-5px); }
`;

const growAndElevateAnimation = `${growAndElevateKeyframes} 0.3s ease-out forwards`;

const AnimatedSocialLink = ({ href, label, iconSrc }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <Tooltip label={label}>
      <Box
        position="relative"
        width="50px"
        height="50px"
        transition="all 0.3s"
        _hover={{ 
          animation: growAndElevateAnimation,
          boxShadow: "lg"
        }}
      >
        <Image
          src={iconSrc}
          alt={label}
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </Tooltip>
  </Link>
);

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/eduardo-fabricio-goza-669b641b4/",
      label: "LinkedIn",
      iconSrc: "/images/icons/linkedin/linkedin-original.svg"
    },
    {
      href: "https://github.com/Eduwilll",
      label: "GitHub",
      iconSrc: "/images/icons/github/github-original.svg"
    },
    {
      href: "https://www.salesforce.com/trailblazer/eduardofabriciog",
      label: "Trailhead - Salesforce",
      iconSrc: "/images/icons/salesforce/Trailhead_old.svg"
    },

  ];

  return (
    <Box
      flexShrink={0}
      mt={{ base: 4, md: 0 }}
      ml={{ md: 6 }}
      align="left"
    >
      <Wrap spacing='15px' align='center' justify='left'>
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