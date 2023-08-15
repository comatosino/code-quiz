import { Center, Text } from "@chakra-ui/react";

export const _404: React.FC = (): JSX.Element => {
  document.title = "404 - page not found";
  return (
    <>
      <Center flexGrow={1}>
        <Text fontSize={32}>404 | Page not found</Text>
      </Center>
    </>
  );
};
