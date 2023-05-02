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
import Wave from './Wave';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { emrahImg } from '@/assets/images';

const Me = () => {
  const { t } = useTranslation('common');

  return (
    <Box
      id='me'
      as='section'
      bg='linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(136, 48, 223, 0.6) 60%, rgba(135,48,223,1) 100%)'
    >
      <Container
        display='flex'
        maxW='7xl'
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
        alignItems='center'
        gap={8}
        justifyContent='space-around'
        minH='calc(100vh - 68px)'
      >
        <Stack maxW='md' spacing={4}>
          <Heading fontStyle='italic'>{t('me.heading')}</Heading>
          <Text fontWeight='semibold' fontSize={{ base: 'sm', md: 'md' }}>
            <span style={{ display: 'inline-block', width: '16px' }} />
            {t('me.description')}
          </Text>
          <Flex gap={2}>
            <Button colorScheme='secondary' size='sm'>
              {t('me.contact')}
            </Button>
            <Button colorScheme='secondary' size='sm' variant='ghost'>
              {t('me.projects')}
            </Button>
          </Flex>
        </Stack>
        <Box position='relative' fontSize={{ base: '300px', sm: '500px' }}>
          <Wave />
          <Image src={emrahImg} quality={100} fill alt='emrah' />
        </Box>
      </Container>
    </Box>
  );
};

export default Me;
