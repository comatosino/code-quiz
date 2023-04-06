import { Center, Text } from "@chakra-ui/react";

interface ISidebarProps {
  [key: string]: any;
}

export const Sidebar: React.FC<ISidebarProps> = (props): JSX.Element => {
  return (
    <Center>
      <Text>Sidebar</Text>
    </Center>
  );
};
