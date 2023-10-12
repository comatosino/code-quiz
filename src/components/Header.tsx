import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { ColorModeToggle } from './ColorModeToggle';

export const Header: React.FC = (): JSX.Element => {
  return (
    <Box as='header' bgColor='brand.500'>
      <Container maxW='container.xl'>
        <Flex w='full' h='10vh' px={5} alignItems='center' justifyContent='space-between'>
          <Box>
            <Text fontSize='4xl'>Quizality</Text>
            <Text ml={10} fontSize='xl'>
              a trivia game
            </Text>
          </Box>
          <ColorModeToggle size='lg' />
        </Flex>
      </Container>
    </Box>
  );
};
