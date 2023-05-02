import {
  Box,
  Container,
  Flex,
  useDisclosure,
  IconButton,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { BiMenu } from 'react-icons/bi';
import { useScrollPosition } from '@/hooks';
import MobileDrawer from './MobileDrawer';
import ChangeLang from './ChangeLang';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  const bgColor = useColorModeValue('white', '#1A202C');
  const boxShadow = useColorModeValue(
    'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    'rgba(228, 228, 228, 0.2) 0px 2px 8px 0px',
  );

  return (
    <>
      <Box
        zIndex={10}
        as='header'
        bgColor={isScrolled ? bgColor : 'primary.500'}
        position='sticky'
        top={0}
        w='full'
        boxShadow={boxShadow}
      >
        <Container
          transition='padding 100ms ease'
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
          <Flex
            as='nav'
            align='center'
            gap={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {navLinks.map((navLink) => (
              <Link href={navLink.href} key={navLink.href}>
                <Button
                  fontWeight='semibold'
                  minW={24}
                  size='sm'
                  variant='ghost'
                  colorScheme={isScrolled ? 'primary' : 'whiteAlpha'}
                  color={isScrolled ? 'primary.500' : 'white'}
                >
                  {t(navLink.label)}
                </Button>
              </Link>
            ))}
          </Flex>

          <Flex gap={2}>
            <ChangeLang />
            <IconButton
              color={isScrolled ? 'secondary.500' : 'white'}
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
