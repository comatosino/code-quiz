import { useNavigate, Link } from 'react-router-dom';
import { Center, Stack, Heading, Button } from '@chakra-ui/react';

import { useAppDispatch } from '../../../store';
import { defaultQuiz } from '../slice';

export const New: React.FC = () => {
  const dispatch = useAppDispatch();
  const nagivate = useNavigate();

  const handleQuickStart = () => {
    dispatch(defaultQuiz());
    nagivate('/quiz/play');
  };

  document.title = 'Quizality | New';

  return (
    <Center w='full' h='full'>
      <Stack spacing={5}>
        <Heading>New Quiz</Heading>

        <Button onClick={handleQuickStart}>Quick Start</Button>

        <Button as={Link} to='/quiz/config'>
          Create Quiz
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
