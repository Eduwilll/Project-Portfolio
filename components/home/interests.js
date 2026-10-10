import { Badge, Flex } from '@chakra-ui/react';

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
    return (
        <Flex gap={3} flexWrap="wrap">
            {interestList.map((interest) => (
                <Badge
                    key={interest}
                    bg="card-subtle"
                    color="badge-text"
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
