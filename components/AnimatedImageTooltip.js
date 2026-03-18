import React from 'react';
import { Box, Wrap, WrapItem, Tooltip } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import Image from 'next/image';

const growAndElevateKeyframes = keyframes`
  0% { transform: scale(1) translateY(0); }
  100% { transform: scale(1.1) translateY(-5px); }
`;

const growAndElevateAnimation = `${growAndElevateKeyframes} 0.3s ease-out forwards`;

const AnimatedIconTooltip = ({ src, alt, tooltipText }) => (
  <Tooltip label={tooltipText} placement='top'>
    <Box
      position="relative"
      width="50px"
      height="50px"
      transition="all 0.3s"
      _hover={{ 
        animation: growAndElevateAnimation,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="50px"
        style={{ objectFit: 'contain' }}
        onError={() => console.error(`Failed to load image: ${src}`)}
      />
    </Box>
  </Tooltip>
);

const AnimatedImageGrid = ({ icons }) => (
  <Box
    flexShrink={0}
    mt={{ base: 4, md: 0 }}
    ml={{ md: 6 }}
    align="center"
  >
    <Wrap spacing='15px' align='center' justify='center'>
      {icons.map((icon, index) => (
        <WrapItem key={index}>
          <AnimatedIconTooltip
            src={icon.src}
            alt={icon.alt}
            tooltipText={icon.tooltip}
          />
        </WrapItem>
      ))}
    </Wrap>
  </Box>
);

export default AnimatedImageGrid;