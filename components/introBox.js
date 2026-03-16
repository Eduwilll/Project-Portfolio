import { Box, useColorModeValue, Icon, Flex, Text } from '@chakra-ui/react';
import { IoSparkles } from 'react-icons/io5';

const IntroBox = () => {
  return (
    <Box 
      borderRadius="xl" 
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')} 
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
      p={4} 
      mb={8} 
      backdropFilter="blur(10px)"
    >
      <Flex align="center" justify="center" gap={2}>
        <Icon as={IoSparkles} color="teal.400" />
        <Text fontWeight="medium" fontSize="sm">
          Disponivel para novas oportunidades de trabalho
        </Text>
      </Flex>
    </Box>
  );
};

export default IntroBox;
