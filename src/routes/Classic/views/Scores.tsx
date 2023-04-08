import { Stack, Box, Text, Flex } from "@chakra-ui/react";
import { PageHeading } from "../../../components";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { IHighScore } from "../../../@types";

export const Scores: React.FC = (): JSX.Element => {
  const [highScores] = useLocalStorage<IHighScore[]>("quiz-classic-high-scores", []);

  return (
    <>
      <PageHeading>High Scores - Classic</PageHeading>
      <Stack flexGrow={1} mx={10} px="32px">
        <Box flexGrow={1}>
          {highScores.map((entry, idx) => {
            return (
              <Flex key={idx} w={100} justifyContent="space-between" my={2} px={2} borderRadius={5}>
                <Text>{idx + 1}.</Text>
                <Text>{entry.initials}</Text>
                <Text>{entry.score}</Text>
              </Flex>
            );
          })}
        </Box>
      </Stack>
    </>
  );
};
