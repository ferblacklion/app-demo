import { CoffeeBoxWrapper, CoffeeBoxTextWrapper } from './style';
import { CoffeeItem } from './types';

export function CoffeeBox({
  title,
  subtitle,
  img,
  price,
  variant,
}: CoffeeItem & { variant?: string }) {
  return (
    <CoffeeBoxWrapper>
      <img src={img} alt={title} />
      <CoffeeBoxTextWrapper variant={variant}>
        <h4>{title}</h4>
        {subtitle ? <span>{subtitle}</span> : null}
        <span>{price}</span>
      </CoffeeBoxTextWrapper>
    </CoffeeBoxWrapper>
  );
}
