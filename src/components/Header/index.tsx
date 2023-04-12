import { Container, Flex } from "@chakra-ui/react";
import { ColorModeToggle } from "../ColorModeToggle";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <Flex w="full" h="10vh" px={5} alignItems="center">
        <ColorModeToggle size="lg" />
        <Container maxW="container.xl"></Container>
      </Flex>
    </header>
  );
};
