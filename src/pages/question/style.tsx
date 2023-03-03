import styled from 'styled-components';
import { ButtonStyled } from '../../components/button';
import getMQ from '../../utils/media-queries';

export const QuestionWrapper = styled.div`
  padding: 26px 24px 0 24px;
  width: 100%;
  ${getMQ('lg')} {
    padding: 40px 125px;
  }
  h2 {
    text-align: center;
    margin: 33px 0 18px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #222222;
  }
`;
const marginTopValueImageWrapper = '10px';
export const ImageWrapper = styled.img`
  width: 48px;
  height: 48px;
  margin-top: ${marginTopValueImageWrapper};
  ${getMQ('lg')} {
    margin-top: 50px;
  }
`;

export const BoxesWrapper = styled.div<{ makeTransform?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  /* transform items*/
  ${({ makeTransform }) =>
    makeTransform
      ? ` ${getMQ('xxl')} {
    position: relative;
    height: 258px;
    top: 85px;
    .box-answer__item-0--transform {
      transform: rotate(-12deg);
    }
    .box-answer__item-1--transform {
      transform: rotate(-8deg);
      top: -32px;
    }
    .box-answer__item-2--transform {
      transform: rotate(-4deg);
      top: -53px;
    }
    .box-answer__item-3--transform {
      top: -61px;
    }
    .box-answer__item-4--transform {
      transform: rotate(4deg);
      top: -53px;
    }
    .box-answer__item-5--transform {
      transform: rotate(8deg);
      top: -31px;
    }
    .box-answer__item-6--transform {
      transform: rotate(12deg);
    }
  }`
      : ``}/* transform items */
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 11px;
  ${getMQ('md')} {
    ${ButtonStyled} {
      width: 106px;
      font-weight: 700;
      font-size: 13px;
      line-height: 18px;
      margin: 38px auto 0 auto;
    }
  }
  .footer-wrapper__links {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
`;

export const TransitionWrapper = styled.div<{ bgColor?: string }>`
  background-color: ${({ bgColor }) => bgColor};
  height: 100vh;
  width: 100%;
  padding: 180px 0 0 0;
  text-align: center;
  img {
    width: 80px;
    height: 80px;
  }
  p {
    width: 327px;
    margin: 20px auto 0 auto;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #222222;
    ${getMQ('lg')} {
      width: 588px;
      font-size: 28px;
      line-height: 130%;
      letter-spacing: 0.03em;
    }
  }
`;

export const BoxAnswerWrapper = styled.div<{
  bgColor: string;
  isSelected: boolean | null;
  variant: string;
}>`
  background-color: ${({ bgColor, isSelected }) =>
    isSelected === null ? bgColor : isSelected === false ? '#E9E4DB' : bgColor};
  text-align: center;

  /* variant style */
  height: ${({ variant }) => (variant === 'small' ? '130px' : '180px')};
  flex-basis: ${({ variant }) => (variant === 'small' ? '159px' : '145px')};

  ${getMQ('lg')} {
    height: ${({ variant }) => (variant === 'small' ? '130px' : '271px')};
    flex-basis: ${({ variant }) => (variant === 'small' ? '159px' : '180px')};
  }
  ${ImageWrapper} {
    margin-top: ${({ variant }) =>
      variant === 'small' ? '28px' : marginTopValueImageWrapper};
  }
  /* variant style */
  span {
    width: 111px;
    height: 40px;
    display: inline-block;
    margin: 0 auto 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #222222;
  }
  p {
    width: 111px;
    height: 51px;
    margin: 0 auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #222222;
  }
`;
