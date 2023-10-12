import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';

export const Intro: React.FC = (): JSX.Element => {
  return (
    <Stack w={150} alignItems='center'>
      <Center w={48} h={48} borderRadius='full' bgColor='#ddd'>
        <Image mr={2} w='75%' src={`${import.meta.env.BASE_URL}/logo.svg`} />
      </Center>
      <Box h={10} w={10} ml={10} borderRadius='full' bgColor='#ddd' />
      <Box h={15} w={15} ml={5} borderRadius='full' bgColor='#ddd' />
      <Text textAlign='center' fontSize={48}>
        🤔
      </Text>
    </Stack>
  );
};
