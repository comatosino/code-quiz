import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Box, Center, Button, Stack, Divider, Text } from '@chakra-ui/react';

import { useQuiz } from '../hooks';
import { useTimer } from '../../../hooks';

export const Play: React.FC = (): JSX.Element => {
  const {
    error,
    isFetching,
    inProgress,
    gameover,
    index,
    question,
    no_data,
    startQuiz,
    nextQuestion,
    checkAnswer,
  } = useQuiz();

  const timer = useTimer();

  useEffect(() => {
    if (inProgress) {
      timer.countdown(10);
    }
  }, [inProgress, index]);

  useEffect(() => {
    if (inProgress && timer.time === 0) {
      nextQuestion();
    }
  }, [timer.time]);

  document.title = 'Quizality | Quiz';

  if (error) {
    return (
      <Center>
        <Stack alignItems='center'>
          <Text fontSize={48}>😵‍💫</Text>
          <Text px={5}>something went wrong</Text>
          <Button as={Link} to='/quiz'>
            go back
          </Button>
        </Stack>
      </Center>
    );
  }

  if (inProgress && no_data) {
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
        <Text w={130} as='h2' alignSelf='end' display='flex' justifyContent='space-between'>
          time remaining:
          <Text as='span' fontWeight={700}>
            {timer.time}
          </Text>
        </Text>

        <Text as='h2' pb={10} fontSize={20} fontWeight={700}>
          {question.text}
        </Text>

        <Stack spacing={5}>
          {question.choices.map((choice, i) => (
            <Box key={i}>
              <Button textAlign='left' onClick={() => checkAnswer(choice)} variant='unstyled'>
                {choice}
              </Button>
              <Divider />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Center>
  );
};
