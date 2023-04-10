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

export interface IScore {
  initials: string;
  score: number;
}

export type CheckAnswerHandler = (
  choice: string,
  answer: string,
) => React.MouseEventHandler<HTMLButtonElement>;
