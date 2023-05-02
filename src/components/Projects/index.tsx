import { projects } from '@/utils/constants';
import {
  Box,
  Center,
  Container,
  Heading,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Carousel from 'nuka-carousel';
import { useTranslation } from 'next-i18next';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Legend from './Legend';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const { t } = useTranslation('common');
  const slidesToShow = useBreakpointValue(
    {
      base: 1,
      md: 2,
      lg: 3,
    },
    {
      fallback: 'md',
    },
  );

  return (
    <Box
      py={20}
      id='projects'
      as='section'
      bg='linear-gradient(180deg, rgba(135,48,223,1) 0%, rgba(136, 48, 223, 0.6) 40%, rgba(0,0,0,0) 100%)'
    >
      <Stack as={Container} maxW='7xl' spacing={8}>
        <Heading textAlign='center'>{t('projects.heading')}</Heading>
        <Carousel
          autoplayInterval={4000}
          pauseOnHover
          autoplay
          wrapAround={true}
          slidesToShow={slidesToShow}
          defaultControlsConfig={{
            pagingDotsStyle: { display: 'none' },
            prevButtonStyle: {
              backgroundColor: 'rgba(5, 177, 126, 0.6)',
              borderRadius: '50%',
            },
            nextButtonStyle: {
              backgroundColor: 'rgba(5, 177, 126, 0.6)',
              borderRadius: '50%',
            },
            prevButtonText: <BsChevronLeft size={32} />,
            nextButtonText: <BsChevronRight size={32} />,
          }}
        >
          {projects.map((project, index) => (
            <Center py={8} key={index}>
              <ProjectItem project={project} />
            </Center>
          ))}
        </Carousel>
        <Legend />
      </Stack>
    </Box>
  );
};

export default Projects;
