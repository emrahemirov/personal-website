import { extras } from '@/utils/constants';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Legend = () => {
  const { t } = useTranslation('common');

  return (
    <Flex alignSelf='center' wrap='wrap' justify='center' gap={4}>
      {Object.values(extras).map(({ Icon, color, bgColor, label }, index) => (
        <Flex align='center' key={index} color={color} gap={2}>
          <Box p={2} as={Icon} rounded='full' size={32} bgColor={bgColor} />
          <Text fontSize={{ base: 'xs', sm: 'md' }}>{t(label)}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Legend;
