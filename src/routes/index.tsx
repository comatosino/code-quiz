import { Center, Text } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

export { _404 } from "./_404";
export { Legacy } from "./Legacy";
export { Settings } from "./Settings";

export const Home: React.FC = (): JSX.Element => {
  document.title = "Quizality";
  return (
    <Center flexGrow={1} flexDir="column">
      <QuestionOutlineIcon fontSize={128} />
      <Text textAlign="center" fontSize={48}>
        Quizality
      </Text>
    </Center>
  );
};
