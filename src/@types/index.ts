export enum Page {
  HOME,
  GAME,
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
