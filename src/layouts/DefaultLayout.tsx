import { Outlet } from "react-router-dom";
import { Stack, SimpleGrid, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import { Footer, Header, Sidebar } from "../components";
import { CONFIG } from "../config";

interface LayoutProps {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

export const DefaultLayout: React.FC<LayoutProps> = (): JSX.Element => {
  const [is300px, is480px, is768px, is1024px] = useMediaQuery([
    "(min-width: 300px)",
    "(min-width: 480px)",
    "(min-width: 768px)",
    "(min-width: 1024px)",
  ]);

  return (
    <Container maxW="container.xl">
      <Stack h="100vh" spacing={5}>
        <Header />
        {CONFIG.USE_SIDEBAR ? (
          <SimpleGrid
            as={Container}
            gridTemplateColumns={`${20}% ${80}%`}
            columns={2}
            flexGrow={1}
            alignSelf="center"
            maxW="100%"
          >
            <Sidebar />
            <Main />
          </SimpleGrid>
        ) : (
          <Main />
        )}
        <Footer />
      </Stack>
    </Container>
  );
};

const Main: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <Flex flexDir="column" mx={5} bg="whiteAlpha.100" borderRadius="xl">
      <Outlet />
    </Flex>
  );
};
