import { Outlet } from "react-router-dom";
import { Stack, SimpleGrid, Container } from "@chakra-ui/react";
import { Footer, Header, Sidebar } from "../components";
import { CONFIG } from "../config";

interface LayoutProps {
  children?: string | JSX.Element | JSX.Element[]; // | (() => JSX.Element);
}

export const DefaultLayout: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <Stack h="100vh" spacing={5}>
      <Header />
      {CONFIG.USE_SIDEBAR ? (
        <SimpleGrid
          as={Container}
          maxW="container.xl"
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
    <Stack mx={5} bg="whiteAlpha.100" borderRadius="3xl">
      <Outlet />
    </Stack>
  );
};
