import { Center, Text, Flex, OrderedList, ListItem, Button, Box, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { PageHeading } from "../../components";
import { useHighScores } from "./hooks";

export const Scores: React.FC = (): JSX.Element => {
  const { high_scores, clearHighScores } = useHighScores();

  return (
    <>
      <PageHeading>High Scores - Legacy</PageHeading>
      <Button as={RouterLink} to="/legacy" alignSelf="flex-start" mx={5}>
        Back
      </Button>
      <Center mx={10} px="32px" flexDir="column">
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
            <Button type="button" onClick={() => clearHighScores()}>
              Clear High Scores
            </Button>
          </Stack>
        ) : (
          <Box>
            <Text>No scores to display!</Text>
          </Box>
        )}
      </Center>
    </>
  );
};
