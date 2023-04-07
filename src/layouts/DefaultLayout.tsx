import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CONFIG } from "../config";

interface LayoutProps {
  children: string | JSX.Element | JSX.Element[]; // | (() => JSX.Element);
}

export const DefaultLayout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <Flex h="100vh" flexDir="column">
      <Header />
      {CONFIG.USE_SIDEBAR ? (
        <SimpleGrid columns={2} gridTemplateColumns={`${20}% ${80}%`} flexGrow={1}>
          <Sidebar />
          <Main children={children} />
        </SimpleGrid>
      ) : (
        <Main children={children} />
      )}
      <Footer />
    </Flex>
  );
};

const Main: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <Flex flexGrow={1} borderRadius="3xl" mx={5} bg="whiteAlpha.100">
      {children}
    </Flex>
  );
};
