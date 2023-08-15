import {
  Center,
  Text,
  Flex,
  OrderedList,
  ListItem,
  Button,
  Box,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { PageHeading } from "../../components";
import { useHighScores } from "./hooks";

export const Scores: React.FC = (): JSX.Element => {
  const { high_scores, clearHighScores } = useHighScores();

  document.title = "Quizality | Legacy high scores";

  return (
    <>
      <PageHeading>High Scores - Legacy</PageHeading>
      <Flex>
        <VStack alignItems="flex-start" spacing={5} mx={5}>
          <Button as={RouterLink} to="/legacy">
            Back
          </Button>
          {high_scores.length > 0 && (
            <Button type="button" onClick={() => clearHighScores()}>
              Clear High Scores
            </Button>
          )}
        </VStack>
        <Center flexDir="column" width="full">
          {high_scores.length > 0 ? (
            <Stack>
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
            </Stack>
          ) : (
            <Box>
              <Text>No scores to display!</Text>
            </Box>
          )}
        </Center>
      </Flex>
    </>
  );
};
