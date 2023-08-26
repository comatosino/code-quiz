import { Navigate } from "react-router-dom";
import { Text, Stack, Heading } from "@chakra-ui/react";

import { useGetLastScore } from "../hooks/useGetLastScore";
import { InitialsForm } from "../components/InitialsForm";

export const GameOver: React.FC = (): JSX.Element => {
  const { last_score } = useGetLastScore();

  if (last_score === null || last_score === undefined) {
    return <Navigate to="/legacy" replace />;
  }

  document.title = "Quizality | Legacy | Game Over";

  return (
    <Stack id="game" w="full" h="full" justifyContent="center" alignItems="center" spacing={5}>
      <Heading fontSize={48}>Game Over</Heading>
      <Text fontSize={22} borderRadius="md">
        {"Your score: "}
        <Text as="span" fontWeight="semibold" bg="whiteAlpha.200" borderRadius="md" padding={1}>
          {last_score}
        </Text>
      </Text>
      <Text fontSize={22}>Add Initials?</Text>
      <InitialsForm last_game_score={last_score} />
    </Stack>
  );
};
