import { Center, Text } from "@chakra-ui/react";
import { PageHeading } from "../../components";

export const _404: React.FC = (): JSX.Element => {
  document.title = "Quiz Game - 404";
  return (
    <>
      <PageHeading>404 Not Found</PageHeading>
      <Center flexGrow={1}>
        <Text fontSize={32}>This page doesn't exist!</Text>
      </Center>
    </>
  );
};
