import { Flex, Heading } from "@chakra-ui/react";

interface IPageHeadingProps {
  [key: string]: string | number | JSX.Element;
  children: string;
}

export const PageHeading: React.FC<IPageHeadingProps> = (props): JSX.Element => {
  return (
    <Flex {...props} w="full" h={100} mx={5} alignItems="center">
      <Heading as="h1" size="lg">
        {props.children}
      </Heading>
    </Flex>
  );
};
