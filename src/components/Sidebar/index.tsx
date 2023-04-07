import { Stack, Button, Center } from "@chakra-ui/react";
import { CONFIG } from "../../config";
import { DebugMenu } from "../DebugMenu";

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <Stack ml={5} flexDir="column">
      <Center w="full" h={100}></Center>
      <Stack spacing={5}>
        <Button>Classic</Button>
        <Button>Modern</Button>
        <Button>Multiplayer</Button>
      </Stack>

      {CONFIG.USE_DEBUG_MODE && <DebugMenu />}
    </Stack>
  );
};
