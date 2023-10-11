import { Box, RadioGroup, HStack, Radio } from '@chakra-ui/react';

import { useAppSelector, useAppDispatch } from '../../../../store';
import { setParams } from '../../slice';

export const TypeSelect = () => {
  const params = useAppSelector((state) => state.quiz.params);
  const dispatch = useAppDispatch();

  const handleChange = (value: 'multiple' | 'boolean' | 'any') => {
    if (value === 'any') {
      const update = { ...params };
      delete update.type;
      dispatch(setParams(update));
    } else {
      dispatch(setParams({ ...params, type: value }));
    }
  };

  return (
    <Box>
      <label>Quesion type:</label>
      <RadioGroup onChange={handleChange} value={params.type || 'any'}>
        <HStack spacing={5}>
          <Radio value='multiple'>multiple-choice</Radio>
          <Radio value='boolean'>true / false</Radio>
          <Radio value='any'>any</Radio>
        </HStack>
      </RadioGroup>
    </Box>
  );
};
