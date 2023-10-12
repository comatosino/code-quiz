import { Box, RadioGroup, HStack, Radio } from '@chakra-ui/react';

import { useAppSelector, useAppDispatch } from '../../../../store';
import { setParams } from '../../slice/quizSlice';

export const DifficultySelect: React.FC = (): JSX.Element => {
  const params = useAppSelector((state) => state.quiz.params);
  const dispatch = useAppDispatch();

  const handleChange = (value: 'easy' | 'meduium' | 'hard' | 'any') => {
    if (value === 'any') {
      const update = { ...params };
      delete update.difficulty;
      dispatch(setParams(update));
    } else {
      dispatch(setParams({ ...params, difficulty: value }));
    }
  };

  return (
    <Box>
      <label>Question difficulty:</label>
      <RadioGroup onChange={handleChange} value={params.difficulty || 'any'}>
        <HStack spacing={5}>
          <Radio value='easy'>easy</Radio>
          <Radio value='medium'>medium</Radio>
          <Radio value='hard'>hard</Radio>
          <Radio value='any'>any</Radio>
        </HStack>
      </RadioGroup>
    </Box>
  );
};
