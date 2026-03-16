import { Box, Heading, Text, VStack, HStack, Badge, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Section from './section'

const MotionBox = motion(Box)

const experiences = [
  {
    period: '2024 - Presente',
    title: 'Desenvolvedor Full Stack',
    company: 'Freelancer',
    description: 'Desenvolvimento de aplicações web e mobile, criação de dashboards e automações.',
    tags: ['React', 'Next.js', 'Node.js', 'Python']
  },
  {
    period: '2023 - 2024',
    title: 'Desenvolvedor Frontend',
    company: 'Projetos Pessoais',
    description: 'Foco em interfaces modernas e experiência do usuário com React e TypeScript.',
    tags: ['TypeScript', 'React', 'Chakra UI']
  },
  {
    period: '2022 - 2023',
    title: 'Início na Programação',
    company: 'Autodidata',
    description: 'Estudos intensivos em desenvolvimento web, algoritmos e estruturas de dados.',
    tags: ['JavaScript', 'HTML/CSS', 'Git']
  }
]

const TimelineItem = ({ experience, index, isLast }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    viewport={{ once: true }}
    position="relative"
    pl={8}
    pb={isLast ? 0 : 8}
  >
    {/* Timeline line */}
    {!isLast && (
      <Box
        position="absolute"
        left="11px"
        top="24px"
        bottom={0}
        w="2px"
        bg="whiteAlpha.200"
      />
    )}
    
    {/* Timeline dot */}
    <Box
      position="absolute"
      left={0}
      top="6px"
      w="24px"
      h="24px"
      borderRadius="full"
      bg="teal.500"
      border="4px solid"
      borderColor="gray.800"
      zIndex={1}
    />

    <Box>
      <Text fontSize="sm" color="teal.300" fontWeight="medium" mb={1}>
        {experience.period}
      </Text>
      <Heading as="h4" fontSize="lg" mb={1}>
        {experience.title}
      </Heading>
      <Text fontSize="sm" color="whiteAlpha.700" mb={2}>
        {experience.company}
      </Text>
      <Text fontSize="sm" color="whiteAlpha.600" mb={3}>
        {experience.description}
      </Text>
      <Flex gap={2} flexWrap="wrap">
        {experience.tags.map((tag) => (
          <Badge
            key={tag}
            bg="whiteAlpha.100"
            color="whiteAlpha.800"
            fontSize="xs"
            px={2}
            py={1}
            borderRadius="md"
          >
            {tag}
          </Badge>
        ))}
      </Flex>
    </Box>
  </MotionBox>
)

const TimelineSection = () => {
  return (
    <Section delay={0.3}>
      <Box py={6}>
        <Heading as="h3" variant="section-title" fontSize={20} mb={6}>
          Experiência
        </Heading>
        <VStack align="stretch" spacing={0}>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              experience={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </VStack>
      </Box>
    </Section>
  )
}

export default TimelineSection
