import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { useAppDispatch } from '../../../../store';
import { useGetLastScore } from '../useGetLastScore';
import { setLastGameScore } from '../../slice';
import { useTimer } from '../../../../hooks';
import { correct, incorrect } from '../../helpers/feedback';

import questions from './questions.json';

export const useQuiz = () => {
  const dispatch = useAppDispatch();
  const timer = useTimer();
  const toast = useToast();
  const { last_score } = useGetLastScore();
  const [index, setIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const timeUp = gameStarted && timer.time <= 0;
  const isGameOver = timeUp || index >= questions.length;

  useEffect(() => {
    if (isGameOver) {
      setLastScore(timer.time);
    }
  }, [isGameOver]);

  const currQuestion = questions[index];

  const start = (t: number) => {
    timer.countdown(t);
    setGameStarted(true);
  };

  const stop = () => {
    timer.stop();
    setGameStarted(false);
  };

  const checkAnswer = (choice: string, answer: string) => {
    if (choice === answer) {
      toast(correct);
      nextQuestion();
    } else {
      toast(incorrect);
      timer.decrement(10);
    }
  };

  const nextQuestion = () => {
    setIndex((i) => i + 1);
  };

  const setLastScore = (score: number) => {
    if (!last_score) {
      dispatch(setLastGameScore(score));
    }
  };

  const reset = () => {
    stop();
    setIndex(0);
  };

  return {
    start,
    stop,
    reset,
    nextQuestion,
    currQuestion,
    checkAnswer,
    setLastScore,
    isGameOver,
    timeRemaining: timer.time,
  };
};
