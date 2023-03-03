import { TransitionWrapper } from './style';
import { Answer } from './types';

export function ResultContainer({
  bgColor,
  img,
  result,
}: Pick<Answer, 'bgColor' | 'img' | 'result'>) {
  return (
    <TransitionWrapper bgColor={bgColor}>
      <img src={img} alt="Image" />
      <p>{result}</p>
    </TransitionWrapper>
  );
}
