enum PAGE {
  HOME,
  QUIZ,
  SCORES,
}

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
