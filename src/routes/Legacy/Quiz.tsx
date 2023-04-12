import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Stack, HStack, Text, Button } from "@chakra-ui/react";

import { useQuiz } from "./hooks";

const START_TIME = 999;

export const Quiz: React.FC = (): JSX.Element => {
  const quiz = useQuiz();

  useEffect(() => {
    quiz.start(START_TIME);
  }, []);

  const handleCheckAnswer = (choice: string, answer: string) => () => {
    quiz.checkAnswer(choice, answer);
  };

  if (quiz.isGameOver) {
    return <Navigate to="/legacy/gameover" replace />;
  }

  if (!quiz.currQuestion) {
    throw new Error("error loading question");
  }
  const { prompt, choices, answer } = quiz.currQuestion;

  return (
    <Stack id="game" w="full" h="full">
      <HStack>
        <Text as="h2" alignSelf="flex-end" p={5} fontSize={18}>
          time remaining: {quiz.timeRemaining}
        </Text>
      </HStack>

      <Text as="h3" fontSize={20} px={10}>
        {prompt}
      </Text>

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
