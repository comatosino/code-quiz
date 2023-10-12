import { Link } from 'react-router-dom';
import { Button, Center, Stack, Text } from '@chakra-ui/react';

export { _404 } from './_404';
export { Legacy } from './Legacy/pages';
export { Quiz } from './Quiz/pages';
import { CONFIG } from '../config';

export const Home: React.FC = (): JSX.Element => {
  document.title = 'Quizality';
  return (
    <Center flexGrow={1} flexDir='column'>
      <Text textAlign='center' fontSize={48}>
        🤔
      </Text>

      <Stack spacing={5} py={10}>
        <Button as={Link} to='/quiz'>
          New Quiz
        </Button>

        {CONFIG.ENABLE_LEGACY && (
          <Button as={Link} to='/legacy'>
            Legacy Quiz
          </Button>
        )}
      </Stack>
    </Center>
  );
};
