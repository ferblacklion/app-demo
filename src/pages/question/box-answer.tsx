import { BoxAnswerWrapper, ImageWrapper } from './style';
import { BoxAnswerProps } from './types';

export function BoxAnswer({
  title,
  text,
  bgColor,
  img,
  onSelect,
  isSelected,
  variant,
  className,
}: BoxAnswerProps & React.HTMLProps<HTMLDivElement>) {
  return (
    <BoxAnswerWrapper
      bgColor={bgColor}
      onClick={() => {
        onSelect?.();
      }}
      isSelected={isSelected}
      variant={variant}
      className={className}
    >
      <div>
        <ImageWrapper src={img} alt={title} />
      </div>
      <span dangerouslySetInnerHTML={{ __html: title }} />
      {variant === 'small' ? null : <p>{text}</p>}
    </BoxAnswerWrapper>
  );
}
