interface IQuestion {
  text: string;
  correct: string;
  choices: string[];
}

interface IScore {
  initials: string;
  score: number;
}

type CheckAnswerHandler = (
  choice: string,
  answer: string,
) => React.MouseEventHandler<HTMLButtonElement>;

/**
 * Main Quiz
 */

interface IQuizState {
  params: IQuizParams;
  lastQuizScore: IQuizLastScore | null;
}

interface IQuizLastScore {
  numCorrect: number;
  numQuestions: number;
  percentage: number;
}

interface IQuizParams {
  amount: number;
  category?: string;
  difficulty?: 'easy' | 'meduium' | 'hard';
  type?: 'multiple' | 'boolean';
}

interface IQuizQuestion {
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  choices: string[];
}

/**
 * Open Trivia DB types
 */
interface OtdbResponse {
  response_code: number;
  results: OtdbResults;
}

type OtdbResults = OtdbQuestion[];

interface OtdbQuestion {
  category: string;
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
