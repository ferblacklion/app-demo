export type Questions = {
  question: string;
  answers: Answer[];
};
export type Answer = {
  title: string;
  text: string;
  bgColor: string;
  img: string;
  result: string;
};
export type QuestionProps = {
  questions: Questions[];
  onComplete: React.Dispatch<React.SetStateAction<boolean>>;
};

export type BoxAnswerProps = Pick<
  Answer,
  'bgColor' | 'img' | 'text' | 'title'
> & {
  onSelect?: () => void;
  isSelected: boolean | null;
  variant: string;
};

export type InitialState = {
  showBackButton: boolean;
  indexAnswerSelected: number | null;
  currentIndexQuestion: number;
  step: 'SHOW_ANSWER' | 'SHOW_QUESTION';
  answerSelected: Answer | null;
};
