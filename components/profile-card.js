import React from "react";
import { Box, VStack, HStack, Text, Button, Avatar } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function ProfileCard() {

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      bg="white"
      boxShadow="md"
    >
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <Avatar size="md" name="John Doe" src="/placeholder.svg" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold" fontSize="xl">
              John Doe
            </Text>
            <Text color="gray.500">@johndoe</Text>
          </VStack>
        </HStack>

        <Text fontSize="sm">
          Full-stack developer passionate about creating elegant solutions to complex problems.
        </Text>

        <HStack spacing={6} justify="center">
          <VStack spacing={0}>
            <Text fontWeight="bold">1.2k</Text>
            <Text fontSize="sm" color="gray.500">
              followers
            </Text>
          </VStack>
          <VStack spacing={0}>
            <Text fontWeight="bold">234</Text>
            <Text fontSize="sm" color="gray.500">
              following
            </Text>
          </VStack>
          <VStack spacing={0}>
            <Text fontWeight="bold">56</Text>
            <Text fontSize="sm" color="gray.500">
              repositories
            </Text>
          </VStack>
        </HStack>

        <HStack spacing={4}>
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="outline" size="sm" width="full">
            GitHub Profile
          </Button>
          <Button leftIcon={<FaGlobe />} colorScheme="gray" variant="outline" size="sm" width="full">
            Website
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
