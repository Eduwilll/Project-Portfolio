import { Box, Heading, SimpleGrid, Text, Progress, VStack, HStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Section from './section'

const MotionBox = motion(Box)

const skills = [
  { name: 'JavaScript', level: 90, color: 'yellow.400' },
  { name: 'TypeScript', level: 85, color: 'blue.400' },
  { name: 'React / Next.js', level: 90, color: 'cyan.400' },
  { name: 'Node.js', level: 80, color: 'green.400' },
  { name: 'Python', level: 75, color: 'blue.300' },
  { name: 'Java', level: 70, color: 'red.400' },
  { name: 'Cloud (AWS)', level: 75, color: 'purple.400' },
  { name: 'SQL / Databases', level: 80, color: 'orange.400' },
]

const SkillBar = ({ name, level, color, delay }) => (
  <MotionBox
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <HStack justify="space-between" mb={1}>
      <Text fontSize="sm" fontWeight="medium">{name}</Text>
      <Text fontSize="sm" color="whiteAlpha.600">{level}%</Text>
    </HStack>
    <Box
      position="relative"
      h="8px"
      bg="whiteAlpha.100"
      borderRadius="full"
      overflow="hidden"
    >
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        h="100%"
        bg={color}
        borderRadius="full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: delay + 0.2 }}
        viewport={{ once: true }}
      />
    </Box>
  </MotionBox>
)

const SkillsSection = () => {
  return (
    <Section delay={0.2}>
      <Box py={6}>
        <Heading as="h3" variant="section-title" fontSize={20} mb={6}>
          Skills
        </Heading>
        <SimpleGrid columns={[1, 2]} gap={6}>
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={skill.color}
              delay={index * 0.1}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Section>
  )
}

export default SkillsSection
