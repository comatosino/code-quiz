import { useEffect, useRef, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../../store';
import { useGetQuestionsQuery, setLastScore } from '../slice';
import { correct, incorrect } from '../helpers/feedback';
import { decodeHtml, shuffle } from '../../../utils';

export const useQuiz = () => {
  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) => state.quiz);
  const { data, error, isFetching } = useGetQuestionsQuery(quiz.params, {
    refetchOnMountOrArgChange: true,
  });

  const score = useRef(0);
  const [index, setIndex] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const [gameover, setGameover] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (inProgress && data && index >= data.results.length) {
      const result = {
        numCorrect: score.current,
        numQuestions: data?.results.length || 0,
        percentage: score.current / data.results.length,
      };
      dispatch(setLastScore(result));
      setGameover(true);
    }
  }, [index]);

  let currQuestion, correctAnswer: string;
  const otbdQuestion = data?.results[index];

  if (otbdQuestion) {
    const question = decodeHtml(otbdQuestion.question);

    // correct and incorrect answers arrive html encoded on different props
    // add all decoded strings to a new array and shuffle it
    correctAnswer = decodeHtml(otbdQuestion.correct_answer);
    const allAnswers = otbdQuestion.incorrect_answers.map((text) => decodeHtml(text));
    allAnswers.push(correctAnswer);
    const choices = shuffle(allAnswers);

    currQuestion = {
      question,
      choices,
      category: otbdQuestion.category,
      difficulty: otbdQuestion.difficulty,
    } as IQuizQuestion;
  }

  const startQuiz = () => {
    setInProgress(true);
  };

  const checkAnswer = (choice: string) => {
    if (choice === correctAnswer) {
      score.current++;
      toast(correct);
    } else {
      toast(incorrect);
    }
    setIndex((prev) => prev + 1);
  };

  const noQs = data?.results.length === 0;

  return { error, isFetching, inProgress, startQuiz, currQuestion, checkAnswer, gameover, noQs };
};
