import { Badge, Flex, useColorModeValue } from '@chakra-ui/react';

const interestList = [
    'Rock Music',
    'Movies & Series',
    'Animes',
    'Games',
    'Cycling',
    'Programming',
    'Cybersecurity',
    'Cloud Computing',
    'Mobile Development'
];

const Interests = () => {
    const badgeBg = useColorModeValue('white', 'whiteAlpha.100')
    const badgeColor = useColorModeValue('gray.800', 'gray.100')
    const badgeBorder = useColorModeValue('gray.200', 'whiteAlpha.200')

    return (
        <Flex gap={3} flexWrap="wrap">
            {interestList.map((interest) => (
                <Badge
                    key={interest}
                    bg={badgeBg}
                    color={badgeColor}
                    border="1px solid"
                    borderColor={badgeBorder}
                    px={3}
                    py={2}
                    borderRadius="md"
                >
                    {interest}
                </Badge>
            ))}
        </Flex>
    )
};

export default Interests;
