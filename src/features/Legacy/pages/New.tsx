import { Link } from 'react-router-dom';
import { Center, Stack, Button, Heading } from '@chakra-ui/react';

export const New: React.FC = (): JSX.Element => {
  document.title = 'Quizality | Legacy';

  return (
    <Center w='full' h='full'>
      <Stack spacing={5}>
        <Heading>Old Quiz</Heading>
        <Button as={Link} to='/legacy/play'>
          Start Quiz
        </Button>
        <Button as={Link} to='/legacy/scores'>
          View High Scores
        </Button>
        <Stack pt={10}>
          <Button as={Link} to='/'>
            Back
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};
