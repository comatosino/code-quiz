import {
  Stack,
  Flex,
  Heading,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik, FieldProps } from "formik";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface IGameOverProps {
  score: number;
}

interface IFormValues {
  initials: string;
}

interface IHighScore {
  initials: string;
  score: number;
}

export const GameOver: React.FC<IGameOverProps> = ({ score }): JSX.Element => {
  const [highScores, setHighScores] = useLocalStorage<IHighScore[]>("quiz-classic-high-scores", []);

  const handleSubmit = ({ initials }: IFormValues) => {
    const newScores = [...highScores];
    const newEntry: IHighScore = { initials, score };

    let i = 0;
    let curr;
    do {
      curr = newScores[i];
      if (!curr) {
        newScores.push(newEntry);
        break;
      }
      if (score > curr?.score) {
        newScores.splice(i, 0, newEntry);
        break;
      }
      i++;
    } while (curr);
    setHighScores(newScores);
  };

  return (
    <Stack id="game" w="full" h="full">
      <Flex h={100} mx={5} alignItems="center">
        <Heading as="h1" size="4xl">
          Game Over!
        </Heading>
      </Flex>

      <Stack flexGrow={1} mx={10} pl="32px">
        <Formik initialValues={{ initials: "" }} onSubmit={handleSubmit}>
          {({ values, handleReset }) => (
            <Form style={{ width: "100%" }}>
              <InputGroup alignSelf="center">
                <InputLeftAddon children={`Your Score: ${score}`} />
                <Field name="initials">
                  {({ field }: FieldProps<string, IFormValues>) => (
                    <Input
                      {...field}
                      onChange={(e) => {
                        const event = { ...e };
                        event.target.value = event.target.value.toUpperCase();
                        field.onChange(event);
                      }}
                      type="text"
                      maxLength={3}
                      placeholder="...save your initials?"
                    />
                  )}
                </Field>
                <InputRightAddon
                  p={0}
                  children={
                    <>
                      {values.initials && (
                        <Button type="button" onClick={handleReset}>
                          Clear
                        </Button>
                      )}
                      <Button type="submit">Save</Button>
                    </>
                  }
                ></InputRightAddon>
              </InputGroup>
            </Form>
          )}
        </Formik>

        <Box flexGrow={1}>
          <Text fontSize={28}>High Scores</Text>
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
    </Stack>
  );
};
