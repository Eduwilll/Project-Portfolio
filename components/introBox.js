import { Box, useColorModeValue } from '@chakra-ui/react';

const IntroBox = () => {
  return (
    <Box 
      borderRadius="lg" 
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
      p={3} 
      mb={6} 
      align="center"
      fontWeight="medium"
      //fontSize="lg"
      //p={3} mb={6} align="center"
    >
      Hello, I&apos;m a student at Fatec Campinas in Brazil and I am studying Systems Analysis and Development
    </Box>
  );
};

export default IntroBox;