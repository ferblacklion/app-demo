import { QualityBoxWrapper } from './style';
import { Quality } from './types';

export function QualityBox({
  title,
  text,
  img,
  variant,
  className,
}: Quality & React.HTMLProps<HTMLDivElement> & { variant?: string }) {
  return (
    <QualityBoxWrapper
      className={`quality-box-wrapper ${className ?? ''}`}
      variant={variant}
    >
      <h3 className="quality-box-wrapper__title">{title}</h3>
      <div className="quality-box-wrapper__text">
        {img ? (
          <img className="quality-box-wrapper__img" src={img} alt="Image" />
        ) : null}
        <p className="quality-box-wrapper__inner-text">{text}</p>
      </div>
    </QualityBoxWrapper>
  );
}
