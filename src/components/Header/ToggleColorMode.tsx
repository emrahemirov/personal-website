import { IconButton, useColorMode, Box } from '@chakra-ui/react';
import * as React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

interface ToggleColorModeProps {
  isScrolled: boolean;
}

const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ isScrolled }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      size='sm'
      color={isScrolled ? 'secondary.500' : 'white'}
      onClick={toggleColorMode}
      aria-label='color mode'
      colorScheme={isScrolled ? 'secondary' : 'whiteAlpha'}
      rounded='full'
      variant='ghost'
      icon={
        colorMode === 'dark' ? (
          <Box as={BsSun} fontSize={{ base: 16, sm: 20 }} />
        ) : (
          <Box as={BsMoon} fontSize={{ base: 16, sm: 20 }} />
        )
      }
    />
  );
};

export default ToggleColorMode;
