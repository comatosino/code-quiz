import { Link as RouterLink } from "react-router-dom";
import { Flex, Stack, Center, Link, Button } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

import { DebugMenu } from "../DebugMenu";
import { ColorModeToggle } from "../ColorModeToggle";
import { CONFIG } from "../../config";

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <Flex pos="relative" flexDir="column" bg="whiteAlpha.100" borderRadius="xl">
      <ColorModeToggle size="lg" pos="absolute" top={1} left={1} />

      <Center id="logo-box" w="full" h={100} flexDirection="column">
        <Link as={RouterLink} to="/">
          <QuestionOutlineIcon fontSize={50} />
        </Link>
      </Center>

      <Stack spacing={5} px={5}>
        <Button as={RouterLink} to="/legacy">
          Legacy
        </Button>

        <Button as={RouterLink} to="/settings">
          Settings
        </Button>
      </Stack>

      {CONFIG.USE_DEBUG_MODE && <DebugMenu />}
    </Flex>
  );
};
