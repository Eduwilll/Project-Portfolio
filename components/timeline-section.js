import { Box, Heading, Text, VStack, HStack, Badge, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Section from './section'

const MotionBox = motion(Box)

const experiences = [
  {
    period: '2023 - Presente',
    title: 'Estagiário de Desenvolvimento',
    company: 'Sottelli',
    description: 'Desenvolvimento de sistemas e aplicações empresariais, trabalhando com tecnologias modernas.',
    tags: ['Java', 'Salesforce', 'Cloud', 'APIs']
  },
  {
    period: '2020 - Presente',
    title: 'Análise e Desenvolvimento de Sistemas',
    company: 'FATEC Campinas',
    description: 'Graduação em tecnologia focada em desenvolvimento de software e sistemas.',
    tags: ['Java', 'Python', 'SQL', 'Algoritmos']
  },
  {
    period: '2015 - 2020',
    title: 'Assistente Administrativo',
    company: 'CJ Lan House',
    description: 'Gestão administrativa, atendimento ao cliente e manutenção de sistemas.',
    tags: ['Gestão', 'Atendimento', 'TI']
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
