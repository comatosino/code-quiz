import { useState } from "react";
import { useToast } from "@chakra-ui/react";

import { useTimer } from "../useTimer";
import { legacySlice, useAppDispatch } from "../../../../store";
import { correct, incorrect } from "./feedback";

import questions from "./questions.json";

const { actions } = legacySlice;

export const useQuiz = () => {
  const dispatch = useAppDispatch();
  const timer = useTimer();
  const toast = useToast();

  const [index, setIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const currQuestion = questions[index];

  const timeUp = gameStarted && timer.time <= 0;
  const isGameOver = timeUp || index >= questions.length;

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
    dispatch(actions.setLastGameScore(score));
  };

  const reset = () => {
    stop();
    setIndex(0);
  };

  if (isGameOver) {
    setLastGameScore(timer.time);
  }

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
