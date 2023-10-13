import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Center, Stack } from '@chakra-ui/react';

export { _404 } from './_404';
export { Legacy } from './Legacy/pages';
export { Quiz } from './Quiz/pages';

import { Intro } from '../components';
import { CONFIG } from '../config';
import { useAnimate } from 'framer-motion';

export const Home: React.FC = (): JSX.Element => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: [0, 1] });
  }, []);

  document.title = 'Quizality';

  return (
    <Center ref={scope} flexGrow={1} flexDir='column'>
      <Stack spacing={5} py={10}>
        <Intro />

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
