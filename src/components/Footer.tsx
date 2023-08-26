import { Center, Container, Text } from "@chakra-ui/react";

const year = new Date().getFullYear();

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer>
      <Center w="full" h="10vh">
        <Container maxW="container.xl" display="flex" justifyContent="center">
          <a href="https://www.robertadams.codes/" target="_blank">
            <Text>Robert Adams © {year}</Text>
          </a>
        </Container>
      </Center>
    </footer>
  );
};
