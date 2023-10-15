import type { UseToastOptions } from '@chakra-ui/react';

export enum FEEDBACK {
  CORRECT,
  INCORRECT,
}

export const correct: UseToastOptions = {
  title: 'Correct!',
  status: 'success',
  duration: 500,
  variant: 'subtle',
};

export const incorrect: UseToastOptions = {
  title: 'Incorrect ',
  status: 'error',
  duration: 500,
  variant: 'subtle',
};

export const getToastConfig = (type: FEEDBACK) => {
  switch (type) {
    case FEEDBACK.CORRECT:
      return correct;

    case FEEDBACK.INCORRECT:
      return incorrect;
  }
};
