import { useEffect, useRef, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../../store';
import { useGetQuestionsQuery, setLastScore } from '../slice';
import { correct, incorrect } from '../helpers/feedback';
import { decodeHtml, shuffle } from '../../../utils';

export const useQuiz = () => {
  const quiz = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const score = useRef(0);
  const [index, setIndex] = useState(0);
  const [questions, set] = useState<IQuestion[]>([]);
  const [inProgress, setInProgress] = useState(false);
  const [gameover, setGameover] = useState(false);
  const toast = useToast();

  const { data, error, isFetching } = useGetQuestionsQuery(quiz.params, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (data && data.results.length) {
      const formatted: IQuestion[] = data.results.map((item) => {
        const text = decodeHtml(item.question);
        const correct = decodeHtml(item.correct_answer);
        const choices = item.incorrect_answers.map((a) => decodeHtml(a));
        choices.push(correct);
        shuffle(choices);
        return { text, correct, choices };
      });
      set(formatted);
    }
  }, [isFetching]);

  const no_data = questions.length === 0;
  const question = questions[index];

  const startQuiz = () => {
    setInProgress(true);
  };

  const nextQuestion = () => {
    if (index + 1 >= questions.length) {
      setGameover(true);
      const result = {
        numCorrect: score.current,
        numQuestions: data?.results.length || 0,
        percentage: score.current / questions.length,
      };
      dispatch(setLastScore(result));
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const checkAnswer = (choice: string | null) => {
    if (choice === questions[index].correct) {
      score.current++;
      toast(correct);
    } else {
      toast(incorrect);
    }
    nextQuestion();
  };

  return {
    error,
    isFetching,
    inProgress,
    gameover,
    index,
    question,
    no_data,
    startQuiz,
    nextQuestion,
    checkAnswer,
  };
};
