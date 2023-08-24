import { Center, Container, Text } from "@chakra-ui/react";

const year = new Date().getFullYear();

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer>
      <Center w="full" h="10vh">
        <Container maxW="container.xl" display="flex" justifyContent="center">
          <a>
            <Text>Robert Adams © {year}</Text>
          </a>
        </Container>
      </Center>
    </footer>
  );
};
