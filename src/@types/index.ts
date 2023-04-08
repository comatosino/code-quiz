export enum PAGE {
  HOME,
  QUIZ,
  SCORES,
}

export interface IQuestion {
  prompt: string;
  choices: string[];
  answer: string;
}

export type CheckAnswerHandler = (
  choice: string,
  answer: string,
) => React.MouseEventHandler<HTMLButtonElement>;

export interface IHighScore {
  initials: string;
  score: number;
}
