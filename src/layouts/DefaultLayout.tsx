import { Outlet } from "react-router-dom";
import { Stack, SimpleGrid } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { CONFIG } from "../config";

interface LayoutProps {
  children?: string | JSX.Element | JSX.Element[]; // | (() => JSX.Element);
}

export const DefaultLayout: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <Stack h="100vh" spacing={5}>
      <Header />
      {CONFIG.USE_SIDEBAR ? (
        <SimpleGrid columns={2} gridTemplateColumns={`${20}% ${80}%`} flexGrow={1}>
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
