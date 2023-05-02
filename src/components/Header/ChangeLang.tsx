import * as React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { IoLanguage } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { langs } from '@/utils/constants';

interface ChangeLangProps {
  isScrolled: boolean;
}

const ChangeLang: React.FC<ChangeLangProps> = ({ isScrolled }) => {
  const router = useRouter();

  return (
    <>
      <Menu>
        <MenuButton
          color={isScrolled ? 'secondary.500' : 'white'}
          rounded='full'
          as={IconButton}
          colorScheme={isScrolled ? 'secondary' : 'whiteAlpha'}
          aria-label='language'
          icon={<Box as={IoLanguage} fontSize={{ base: 16, sm: 20 }} />}
          size='sm'
          variant='ghost'
        />
        <MenuList minW={'fit-content'} p={1}>
          {Object.keys(langs).map((key) => {
            if (key === router.locale) return <React.Fragment key={key} />;

            const { Flag, label } = langs[key as keyof typeof langs];

            return (
              <MenuItem
                key={key}
                onClick={() => {
                  router.push({ pathname: router.pathname }, router.asPath, {
                    locale: key,
                    scroll: false,
                  });
                }}
                borderRadius={4}
              >
                <Flex align={'center'} gap={2}>
                  <Box as={Flag} w={6} borderRadius={4} />
                  {label}
                </Flex>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default ChangeLang;
