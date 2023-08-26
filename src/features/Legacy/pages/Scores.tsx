import {
  Text,
  Flex,
  OrderedList,
  ListItem,
  Button,
  Box,
  Stack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { useHighScores } from "../hooks";

export const Scores: React.FC = (): JSX.Element => {
  const { high_scores, clearHighScores } = useHighScores();

  document.title = "Quizality | Legacy | High Scores";

  return (
    <Stack m="auto" justifyContent="center" alignItems="center" spacing={5}>
      <Heading>High Scores - Legacy</Heading>

      <HStack w="full" justifyContent="space-between">
        <Button as={RouterLink} to="/legacy">
          Back
        </Button>
        {high_scores.length > 0 && (
          <Button type="button" onClick={() => clearHighScores()}>
            Clear High Scores
          </Button>
        )}
      </HStack>
      <Box h={360}>
        {high_scores.length > 0 ? (
          <OrderedList>
            {high_scores.map((entry, idx) => {
              return (
                <ListItem key={idx}>
                  <Flex w={100} justifyContent="space-between" my={2} px={2} borderRadius={5}>
                    <Text>{entry.initials}</Text>
                    <Text>{entry.score}</Text>
                  </Flex>
                </ListItem>
              );
            })}
          </OrderedList>
        ) : (
          <Text>No scores to display!</Text>
        )}
      </Box>
    </Stack>
  );
};
