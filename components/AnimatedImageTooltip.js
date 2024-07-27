import React from 'react';
import { Box, Wrap, WrapItem, Tooltip, keyframes } from '@chakra-ui/react';
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
        layout="fill"
        objectFit="contain"
        onError={() => console.error(`Failed to load image: ${src}`)}
        bordercolor="whiteAlpha.800"
        borderwidth={2}
        borderstyle="none"
        maxwidth="50px"
        display="inline-block"
        borderradius='full'
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