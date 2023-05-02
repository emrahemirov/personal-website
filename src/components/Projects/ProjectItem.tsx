import { Project } from '@/utils/types';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <Link target='_blank' href={project.href}>
      <Stack
        _hover={{ transform: 'translateY(-20px)' }}
        transition='transform 200ms ease'
        mx={4}
        w='full'
        maxW='360px'
        p={2}
        bgColor='primary.200'
        rounded='xl'
      >
        <Box position='relative'>
          <Image
            style={{ borderRadius: 8 }}
            src={project.image}
            width={360}
            height={175}
            alt='project'
          />
          <Text
            color='secondary.700'
            roundedTopLeft='xl'
            bgColor='primary.200'
            py={1}
            px={4}
            position='absolute'
            bottom={0}
            right={0}
            textAlign='right'
            fontWeight='bold'
            fontSize='xl'
            fontStyle='italic'
          >
            {project.name}
          </Text>
        </Box>
        <Link
          target='_blank'
          style={{
            textDecoration: 'underline',
            fontSize: '14px',
          }}
          href={project.href}
        >
          {project.href}
        </Link>
        <Flex gap={4}>
          {project.extras.map(({ Icon, color, bgColor }, index) => (
            <Flex align='center' key={index} color={color} gap={2}>
              <Box p={2} as={Icon} rounded='full' size={32} bgColor={bgColor} />
            </Flex>
          ))}
        </Flex>
      </Stack>
    </Link>
  );
};

export default ProjectItem;
