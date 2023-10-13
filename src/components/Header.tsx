import { useEffect } from 'react';
import { Box, Center, Container, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { useAnimate, stagger } from 'framer-motion';

import { ColorModeToggle } from './ColorModeToggle';

export const Header: React.FC = (): JSX.Element => {
  const [logo, animateLogo] = useAnimate();
  const [text, animateText] = useAnimate();
  const [toggle, animateToggle] = useAnimate();

  useEffect(() => {
    animateText(
      '.header-text',
      { opacity: [0, 1], x: [50, 0] },
      { delay: stagger(0.15), duration: 0.5 },
    );
  }, []);

  useEffect(() => {
    animateToggle(toggle.current, { opacity: [0, 1], y: [-25, 0] }, { type: 'spring' });
  }, []);

  const handleImageLoaded = () => {
    animateLogo(logo.current, { rotate: [-270, 0], x: [-250, 0], opacity: 1 }, { duration: 1 });
  };

  return (
    <Box as='header' borderBottomWidth={5} borderColor='brand.500'>
      <Container maxW='container.xl'>
        <Flex w='full' h='10vh' px={5} alignItems='center' justifyContent='space-between'>
          <HStack>
            <Center ref={logo} w={24} h={24} opacity={0} borderRadius='full' bgColor='#ddd'>
              <Image
                mr={1}
                w='90%'
                src={`${import.meta.env.BASE_URL}/logo.svg`}
                onLoad={handleImageLoaded}
              />
            </Center>
            <Box ref={text}>
              <Text className='header-text' as='h1' fontSize='4xl'>
                Quizality
              </Text>
              <Text className='header-text' ml={10} fontSize='xl'>
                a trivia game
              </Text>
            </Box>
          </HStack>
          <Box ref={toggle} opacity={0}>
            <ColorModeToggle size='lg' />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
