import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Stack, Text, Button, Center, Divider } from "@chakra-ui/react";
import { useQuiz } from "./hooks";

const START_TIME = 60;

export const Play: React.FC = (): JSX.Element => {
  const quiz = useQuiz();

  useEffect(() => {
    quiz.start(START_TIME);
  }, []);

  const handleCheckAnswer = (choice: string, answer: string) => () => {
    quiz.checkAnswer(choice, answer);
  };

  if (quiz.isGameOver) {
    return <Navigate to="/quiz-legacy/gameover" replace />;
  }

  if (!quiz.currQuestion) {
    throw new Error("error loading question");
  }

  const { prompt, choices, answer } = quiz.currQuestion;

  document.title = "Quizality | Legacy | Quiz";

  return (
    <Center w="full">
      <Stack id="game" w={640} margin="auto">
        <Text as="h2" alignSelf="flex-end">
          {"time remaining: "}
          <Text as="span" fontWeight="bold">
            {quiz.timeRemaining}
          </Text>
        </Text>

        <Text fontSize="xl">{prompt}</Text>

        <Divider />

        <Stack alignItems="start">
          {choices.map((choice, i) => (
            <>
              <Button key={i} onClick={handleCheckAnswer(choice, answer)} variant="unstyled">
                {choice}
              </Button>
              <Divider />
            </>
          ))}
        </Stack>
      </Stack>
    </Center>
  );
};
