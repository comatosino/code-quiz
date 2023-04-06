import { useEffect, useState } from "react";
import { Text, Button, Stack } from "@chakra-ui/react";

import questions from "./questions.json";
import { useTimer } from "../../hooks/useTimer";
import { CheckAnswerHandler } from "../../@types";

export const Game: React.FC = (): JSX.Element => {
  const timer = useTimer();
  const [qIdx, setIdx] = useState(0);

  const isGameOver = qIdx >= questions.length || timer.time <= 0;

  useEffect(() => {
    timer.countdown(30);
    return () => {
      timer.stop();
    };
  }, []);

  const handleCheckAnswer: CheckAnswerHandler = (choice, answer) => (_e) => {
    if (choice === answer) {
      setIdx((prev) => prev + 1);
    } else {
      timer.decrement(10);
    }
  };

  if (isGameOver) {
    timer.stop();
    return <GameOver score={qIdx * timer.time} />;
  }

  const { prompt, choices, answer } = questions[qIdx];
  return (
    <>
      <Text>time: {timer.time}</Text>
      <Text as="h1">{prompt}</Text>
      <Stack w="80%" margin="auto">
        {choices.map((choice, i) => (
          <Button key={i} onClick={handleCheckAnswer(choice, answer)}>
            {choice}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export const GameOver: React.FC<{ score: number }> = ({ score }): JSX.Element => {
  return (
    <>
      <Text>game over!</Text>
      <Text>score: {score}</Text>
    </>
  );
};
