import { Link, Navigate } from 'react-router-dom';
import { Box, Center, Button, Stack, Divider, Text, Flex } from '@chakra-ui/react';

import { useQuiz } from '../hooks';
import { decodeHtml } from '../../../utils';

export const Play: React.FC = () => {
  const { error, isFetching, inProgress, startQuiz, currQuestion, checkAnswer, gameover, noQs } =
    useQuiz();

  document.title = 'Quizality | Quiz';

  if (error) {
    return (
      <Center>
        <Stack alignItems='center'>
          <Text fontSize={48}>😵‍💫</Text>
          <Text pb={5}>error creating quiz</Text>
          <Button as={Link} to='/quiz'>
            go back
          </Button>
        </Stack>
      </Center>
    );
  }

  if (noQs) {
    return (
      <Center>
        <Stack alignItems='center'>
          <Text fontSize={48}>😥</Text>
          <Text pb={5}>couldn't create a quiz with those parameters</Text>
          <Button as={Link} to='/quiz/config'>
            try again?
          </Button>
        </Stack>
      </Center>
    );
  }

  if (!inProgress) {
    return (
      <Center w='full'>
        <Stack spacing={5} w={200}>
          <Button isLoading={isFetching} loadingText='Loading' onClick={startQuiz}>
            Play quiz!
          </Button>
          <Button as={Link} to='/quiz'>
            Go back
          </Button>
        </Stack>
      </Center>
    );
  }

  if (gameover) {
    return <Navigate to='/quiz/gameover' />;
  }

  return (
    <Center w='full'>
      <Stack id='game' w={640} margin='auto'>
        <Text as='h2' pb={10} fontSize={20} fontWeight={700}>
          {currQuestion?.question}
        </Text>

        <Stack spacing={5}>
          {currQuestion?.choices.map((choice, i) => (
            <Box key={i}>
              <Button textAlign='left' onClick={() => checkAnswer(choice)} variant='unstyled'>
                {decodeHtml(choice)}
              </Button>
              <Divider />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Center>
  );
};
