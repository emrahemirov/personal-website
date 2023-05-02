import * as React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Text,
  Stack,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { navLinks } from '@/utils/constants';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader display='flex'>
          <IconButton
            ml='auto'
            rounded='full'
            size='sm'
            variant='link'
            aria-label='menu-close'
            colorScheme='secondary'
            icon={<AiOutlineCloseCircle size={24} />}
            onClick={onClose}
          />
        </DrawerHeader>

        <DrawerBody>
          <Stack align='center' spacing='32'>
            <Text
              fontWeight='bold'
              color='primary.500'
              fontSize='2xl'
              fontStyle='italic'
            >
              Emrah Emirov
            </Text>
            <Stack as='nav'>
              {navLinks.map((navLink) => (
                <Link href={navLink.href} key={navLink.href}>
                  <Button
                    fontWeight='semibold'
                    minW={24}
                    size='sm'
                    variant='ghost'
                    colorScheme={'primary'}
                  >
                    {t(navLink.label)}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Stack>
        </DrawerBody>

        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
