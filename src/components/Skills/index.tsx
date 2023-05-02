import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const mostlyUseSkillImages = [
  'react',
  'redux',
  'next',
  'styledcomponents',
  'tailwind',
  'git',
  'github',
  'html',
  'css',
  'js',
  'ts',
];

const hadUsedSkillImages = ['nodejs', 'nestjs', 'postgres', 'mongo'];

const Skills = () => {
  const { t } = useTranslation('common');

  return (
    <Flex py={32} id='skills' as='section' bgColor='primary.500'>
      <Container as={Stack} align='center' maxW='7xl' spacing={8}>
        <Stack align='center' spacing={4}>
          <Heading>{t('skills.mostly-use')}</Heading>
          <Flex align='center' justify='center' gap={4} flexWrap='wrap'>
            {mostlyUseSkillImages.map((skillImage, index) => (
              <Image
                key={skillImage}
                style={{
                  animationName: 'up-down',
                  animationDuration: '1s',
                  animationIterationCount: 'infinite',
                  animationDelay: `${index * 0.2}s`,
                  animationTimingFunction: 'ease',
                }}
                src={`https://skillicons.dev/icons?i=${skillImage}`}
                width={40}
                height={40}
                alt='skills'
              />
            ))}
          </Flex>
        </Stack>
        <Stack align='center' spacing={4}>
          <Heading>{t('skills.had-used')}</Heading>
          <Flex align='center' justify='center' gap={4} flexWrap='wrap'>
            {hadUsedSkillImages.map((skillImage, index) => (
              <Image
                style={{
                  animationName: 'up-down',
                  animationDuration: '1s',
                  animationIterationCount: 'infinite',
                  animationDelay: `${index * 0.2}s`,
                  animationTimingFunction: 'ease',
                }}
                key={skillImage}
                src={`https://skillicons.dev/icons?i=${skillImage}`}
                width={40}
                height={40}
                alt='skills'
              />
            ))}
          </Flex>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Skills;
