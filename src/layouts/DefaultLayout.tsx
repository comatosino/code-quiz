import { Outlet } from "react-router-dom";
import { Stack, Container, Flex } from "@chakra-ui/react";
import { Footer, Header } from "../components";

interface LayoutProps {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

export const DefaultLayout: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Stack h="100vh" spacing={5}>
        <Header />
        <Main />
        <Footer />
      </Stack>
    </Container>
  );
};

const Main: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <Flex flexGrow={1} m={5} borderRadius="xl">
      <Outlet />
    </Flex>
  );
};
