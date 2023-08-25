import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

import { useAppDispatch } from "../../../../store";
import { legacySlice } from "../../../../store/legacy";
import { correct, incorrect } from "./feedback";

import questions from "./questions.json";
import { useTimer } from "../../../../hooks/useTimer";
import { useGetLastScore } from "../useGetLastScore";

const { actions } = legacySlice;

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
      setLastGameScore(timer.time);
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

  const setLastGameScore = (score: number) => {
    if (!last_score) {
      dispatch(actions.setLastGameScore(score));
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
    setLastGameScore,
    isGameOver,
    timeRemaining: timer.time,
  };
};
