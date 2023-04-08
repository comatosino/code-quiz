import { Link as RouterLink } from "react-router-dom";
import { Stack, Center, Link, Button, Text } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

import { DebugMenu } from "../DebugMenu";
import { CONFIG } from "../../config";

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <Stack ml={5} my={5} flexDir="column">
      <Center id="logo-box" w="full" h={100} mb={10} flexDirection="column">
        <Link as={RouterLink} to="/">
          <QuestionOutlineIcon fontSize={50} />
        </Link>
        <Text fontSize={22} fontWeight={700}>
          Quiz Game
        </Text>
      </Center>

      <Stack spacing={5}>
        <Button as={RouterLink} to="/classic">
          Classic
        </Button>

        <Button as={RouterLink} to="/modern">
          Modern
        </Button>

        <Button as={RouterLink} to="/multiplayer">
          Multiplayer
        </Button>

        <Button as={RouterLink} to="/settings">
          Settings
        </Button>
      </Stack>

      {CONFIG.USE_DEBUG_MODE && <DebugMenu />}
    </Stack>
  );
};
