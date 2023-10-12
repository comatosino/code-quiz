import { Box, Center, Container, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { ColorModeToggle } from './ColorModeToggle';

export const Header: React.FC = (): JSX.Element => {
  return (
    <Box as='header' bgColor='brand.500'>
      <Container maxW='container.xl'>
        <Flex w='full' h='10vh' px={5} alignItems='center' justifyContent='space-between'>
          <HStack>
            <Center w={24} h={24} borderRadius='full' bgColor='#ddd'>
              <Image mr={1} w='90%' src={`${import.meta.env.BASE_URL}/logo.svg`} />
            </Center>
            <Box>
              <Text fontSize='4xl'>Quizality</Text>
              <Text ml={10} fontSize='xl'>
                a trivia game
              </Text>
            </Box>
          </HStack>
          <ColorModeToggle size='lg' />
        </Flex>
      </Container>
    </Box>
  );
};
