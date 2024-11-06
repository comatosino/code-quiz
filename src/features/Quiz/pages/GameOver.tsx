import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, Center, Heading, Stack, Text } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../../store';
import { setLastScore } from '../slice';

export const GameOver: React.FC = (): JSX.Element => {
  const score = useAppSelector((state) => state.quiz.lastQuizScore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setLastScore(null));
    };
  });

  if (!score) {
    return <Navigate to='/quiz' />;
  }

  document.title = 'Quizality | Game Over';

  return (
    <Center w='full'>
      <Stack spacing={5}>
        <Heading>Game Over</Heading>
        <Text>Your score: {`${score.numCorrect} / ${score.numQuestions}`}</Text>
        <Button as={Link} to='/quiz/play'>
          Play again?
        </Button>
        <Button as={Link} to='/quiz'>
          Go back
        </Button>
      </Stack>
    </Center>
  );
};
