import { quizSlice } from './quizSlice';

export { quizSlice } from './quizSlice';
export const { defaultQuiz, setParams, setLastScore } = quizSlice.actions;

export { quizApi, useGetQuestionsQuery } from './quizApi';
