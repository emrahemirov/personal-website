import {
  Box,
  Container,
  Flex,
  useDisclosure,
  IconButton,
  Text,
  Button,
} from '@chakra-ui/react';
import * as React from 'react';
import { BiMenu } from 'react-icons/bi';
import { useScrollPosition } from '@/hooks';
import MobileDrawer from './MobileDrawer';
import ChangeLang from './ChangeLang';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 150;

  return (
    <>
      <Box
        bgColor={isScrolled ? 'white' : 'primary.500'}
        position='fixed'
        top={0}
        w='full'
        shadow={'md'}
      >
        <Container
          transition='padding 300ms ease'
          py={isScrolled ? 2 : 4}
          maxW='7xl'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <Text
            w='200px'
            fontWeight='bold'
            color={isScrolled ? 'primary.500' : 'white'}
            fontSize={{ base: 'lg', md: '2xl' }}
            fontStyle='italic'
          >
            Emrah Emirov
          </Text>
          <Flex align='center' gap={4} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((navLink) => (
              <Link href={navLink.href} key={navLink.href}>
                <Button
                  fontWeight='semibold'
                  minW={24}
                  size='sm'
                  variant='ghost'
                  colorScheme={isScrolled ? 'primary' : 'whiteAlpha'}
                >
                  {t(navLink.label)}
                </Button>
              </Link>
            ))}
          </Flex>

          <Flex gap={2}>
            <ChangeLang />
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              rounded='full'
              size='sm'
              variant='ghost'
              aria-label='menu-open'
              colorScheme={isScrolled ? 'secondary' : 'whiteAlpha'}
              icon={<BiMenu size={20} />}
              onClick={onOpen}
            />
          </Flex>
        </Container>
      </Box>
      <MobileDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
