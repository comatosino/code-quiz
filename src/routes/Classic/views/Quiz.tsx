import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Stack, Text, Button } from "@chakra-ui/react";

import questions from "../questions.json";
import { useTimer } from "../../../hooks";

const START_TIME = 999999;

export const Quiz: React.FC = (): JSX.Element => {
  const [gameStarted, setGameStarted] = useState(false);
  const [qIdx, setIdx] = useState(0);
  const timer = useTimer();

  const timeUp = gameStarted && timer.time <= 0;
  const isGameOver = timeUp || qIdx >= questions.length;

  useEffect(() => {
    timer.countdown(START_TIME);
    setGameStarted(true);
    return () => {
      timer.stop();
    };
  }, []);

  if (isGameOver) {
    // TODO: save high score to classic slice
    return <Navigate to="/classic/gameover" replace={true} />;
  }

  const handleCheckAnswer: CheckAnswerHandler = (choice, answer) => () => {
    if (choice === answer) {
      setIdx((prev) => prev + 1);
    } else {
      timer.decrement(10);
    }
  };

  const { prompt, choices, answer } = questions[qIdx];

  return (
    <Stack id="game" w="full" h="full">
      <Text as="h2" alignSelf="flex-end" p={5} fontSize={18}>
        Time remaining: {timer.time || START_TIME}
      </Text>

      <Stack spacing={5} px={10}>
        <Text as="h3" fontSize={24} fontWeight={700}>
          Question {qIdx + 1}
        </Text>

        <Text as="h3" fontSize={20}>
          {prompt}
        </Text>
      </Stack>

      <Stack alignItems="start" spacing={10} px={12} py={10} flexGrow={1}>
        {choices.map((choice, i) => (
          <Button key={i} onClick={handleCheckAnswer(choice, answer)} variant="unstyled">
            {choice}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};
