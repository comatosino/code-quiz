import { Box, SimpleGrid } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

interface LayoutProps {
  children: string | JSX.Element | JSX.Element[]; // | (() => JSX.Element);
}

export const DefaultLayout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <Box h="100vh" display="flex" flexDir="column">
      <Header />
      <SimpleGrid columns={2} gridTemplateColumns={`${20}% ${80}%`} flexGrow={1}>
        <Sidebar />
        <Box>{children}</Box>
      </SimpleGrid>
      <Footer />
    </Box>
  );
};
