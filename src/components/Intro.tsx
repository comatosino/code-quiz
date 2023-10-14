import { useEffect, useState } from 'react';
import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';
import { useAnimate, stagger } from 'framer-motion';

export const Intro: React.FC = (): JSX.Element => {
  const [booped, setBooped] = useState(false);
  const [boopEl, animateBoop] = useAnimate();
  const [bubbles, animateThought] = useAnimate();

  useEffect(() => {
    animateThought(
      '.bubble',
      { scale: [0, 1] },
      { type: 'spring', delay: stagger(0.25, { startDelay: 0.15, from: 2 }) },
    );
  }, []);

  useEffect(() => {
    animateBoop(boopEl.current, { rotate: booped ? 15 : 0 }, { type: 'spring', damping: 5 });

    if (!booped) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setBooped(false);
    }, 250);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [booped]);

  const triggerBoop = () => {
    setBooped(true);
  };

  return (
    <Stack ref={bubbles} w={175} alignItems='center' spacing={3}>
      <Center className='bubble' w={32} h={32} borderRadius='full' bgColor='#ddd'>
        <Image
          onMouseOver={triggerBoop}
          ref={boopEl}
          mr={2}
          w='75%'
          src={`${import.meta.env.BASE_URL}/logo.svg`}
        />
      </Center>
      <Box className='bubble' h={10} w={10} ml={10} borderRadius='full' bgColor='#ddd' />
      <Box className='bubble' h={15} w={15} ml={5} borderRadius='full' bgColor='#ddd' />
      <Text textAlign='center' fontSize={48}>
        🤔
      </Text>
    </Stack>
  );
};
