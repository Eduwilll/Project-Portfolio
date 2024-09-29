import React, { useEffect, useState } from 'react';
import { Box, VStack, HStack, Text, Button, Avatar, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function GitHubUsers({ usernames }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getUsers(names) {
    let jobs = names.map(name =>
      fetch(`https://api.github.com/users/${name}`)
        .then(response => response.status === 200 ? response.json() : null)
        .catch(() => null)
    );
    return Promise.all(jobs);
  }

  useEffect(() => {
    async function fetchUsers() {
      const fetchedUsers = await getUsers(usernames);
      setUsers(fetchedUsers.filter(user => user !== null));
      setLoading(false);
    }
    fetchUsers();
  }, [usernames]);

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <Wrap spacing={6} justify="center">
      {users.map((user, index) => (
        <WrapItem key={user.id || index}>
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
                <Avatar size="md" name={user.name} src={user.avatar_url} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold" fontSize="xl">
                    {user.name || 'N/A'}
                  </Text>
                  <Text color="gray.500">@{user.login}</Text>
                </VStack>
              </HStack>

              <Text fontSize="sm">
                {user.bio || 'No bio available'}
              </Text>

              <HStack spacing={6} justify="center">
                <VStack spacing={0}>
                  <Text fontWeight="bold">{user.followers}</Text>
                  <Text fontSize="sm" color="gray.500">
                    followers
                  </Text>
                </VStack>
                <VStack spacing={0}>
                  <Text fontWeight="bold">{user.following}</Text>
                  <Text fontSize="sm" color="gray.500">
                    following
                  </Text>
                </VStack>
                <VStack spacing={0}>
                  <Text fontWeight="bold">{user.public_repos}</Text>
                  <Text fontSize="sm" color="gray.500">
                    repositories
                  </Text>
                </VStack>
              </HStack>

              <HStack spacing={4}>
                <Button 
                  as="a" 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  leftIcon={<FaGithub />} 
                  colorScheme="gray" 
                  variant="outline" 
                  size="sm" 
                  width="full"
                >
                  GitHub Profile
                </Button>
                {user.blog && (
                  <Button 
                    as="a" 
                    href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    leftIcon={<FaGlobe />} 
                    colorScheme="gray" 
                    variant="outline" 
                    size="sm" 
                    width="full"
                  >
                    Website
                  </Button>
                )}
              </HStack>
            </VStack>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
}