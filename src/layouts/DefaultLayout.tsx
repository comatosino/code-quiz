import { Outlet } from 'react-router-dom';
import { Stack, Container, Center } from '@chakra-ui/react';
import { Footer, Header } from '../components';

interface LayoutProps {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

export const DefaultLayout: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <Stack h='100vh'>
      <Header />
      <Main />
      <Footer />
    </Stack>
  );
};

const Main: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <Center flexGrow={1} m={5} borderRadius='xl'>
      <Container maxW='container.xl'>
        <Outlet />
      </Container>
    </Center>
  );
};
