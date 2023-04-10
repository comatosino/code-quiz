import { Outlet } from "react-router-dom";
import { Stack, SimpleGrid, Container, Flex } from "@chakra-ui/react";
import { Footer, Header, Sidebar } from "../components";
import { CONFIG } from "../config";

interface LayoutProps {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

export const DefaultLayout: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <Stack h="100vh" spacing={5}>
      <Header />
      {CONFIG.USE_SIDEBAR ? (
        <SimpleGrid
          as={Container}
          maxW="container.lg"
          gridTemplateColumns={`${20}% ${80}%`}
          columns={2}
          flexGrow={1}
          alignSelf="center"
        >
          <Sidebar />
          <Main />
        </SimpleGrid>
      ) : (
        <Main />
      )}
      <Footer />
    </Stack>
  );
};

const Main: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <Flex flexDir="column" mx={5} bg="whiteAlpha.100" borderRadius="xl">
      <Outlet />
    </Flex>
  );
};
