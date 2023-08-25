interface IQuestion {
  prompt: string;
  choices: string[];
  answer: string;
}

interface IScore {
  initials: string;
  score: number;
}

type CheckAnswerHandler = (
  choice: string,
  answer: string,
) => React.MouseEventHandler<HTMLButtonElement>;

interface OtdbResponse {
  response_code: number;
  results: OtdbResults;
}

type OtdbResults = OtdbQuestion[];

interface OtdbQuestion {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
