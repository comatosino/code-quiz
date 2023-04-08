import { Text, Stack, Heading, HStack, PinInput, PinInputField } from "@chakra-ui/react";

export const GameOver: React.FC = (): JSX.Element => {
  return (
    <Stack id="game" w="full" h="full" justifyContent="center" alignItems="center">
      <Heading fontSize={48}>Game Over</Heading>

      <Text fontSize={22}>Your score: 000</Text>

      <Text fontSize={22}>Add Initials?</Text>
      <HStack>
        <PinInput type="alphanumeric">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </Stack>
  );
};
