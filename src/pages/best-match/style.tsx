import styled from 'styled-components';
import { AnchorStyled } from '../../components/anchor';
import { ButtonStyled } from '../../components/button';
import getMQ from '../../utils/media-queries';

const borderBottom = () => `
&::after {
  position: absolute;
  content: '';
  height: 1px;
  bottom: -3px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  border-style: dotted;
  opacity: 0.3;
  border-width: 2px;
  border-bottom:  #86837F;
}`;

const borderLeft = () => `
&::after {
  position: absolute;
  content: '';
  height:100%;
  bottom:0;
  left: 0;
  right: 0;
  width: 100%;
  border-style: dotted;
  opacity: 0.3;
  border-width: 2px;
  border-left:  #86837F;
  border-bottom:none;
  border-top:none;
}`;
const borderTopLeft = () => `
&::after {
  position: absolute;
  content: '';
  height:100%;
  bottom:0;
  left: 0;
  right: 0;
  width: 99%;
  border-style: dotted;
  opacity: 0.3;
  border-width: 2px;
  border-left:  #86837F;
  border-bottom:none;
}`;
export const ResultWrapper = styled.div`
  padding: 28px 24px;
  h2 {
    margin: 33px 0 10px 0;
    font-weight: 400;
    font-size: 26px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #222222;
    ${getMQ('lg')} {
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 110%;
      letter-spacing: 0.06em;
    }
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #222222;
    ${getMQ('lg')} {
      font-weight: 400;
      font-size: 14.5px;
      line-height: 150%;
    }
  }
  .result-wrapper__links {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    ${getMQ('lg')} {
      justify-content: center;
      ${AnchorStyled} {
        margin-right: 50px;
      }
    }
  }
`;

export const BestMatchWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  background-color: #eae4db;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${getMQ('lg')} {
    flex-direction: row;
    align-items: normal;
  }
  h2 {
    font-weight: 400;
    font-size: 23.4043px;
    line-height: 120%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #7e836d;
  }
`;

export const QualitiesWrapper = styled.div`
  flex-wrap: wrap;

  ${getMQ('lg')} {
    display: flex;

    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
  }
`;

export const ProductBoxWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${getMQ('lg')} {
    flex-basis: 384px;
  }
  .best-match-wrapper__image {
    width: 283px;
    height: 355px;
  }
  ${borderBottom()}
  ${getMQ('lg')} {
    ::after {
      content: none;
    }
    ${borderLeft()}
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  text-align: center;
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #222222;
    margin: 18px 0;
  }
  .best-match-wrapper__price {
    align-self: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #222222;
    margin-bottom: 45px;
  }
`;

export const QualityBoxWrapper = styled.div<{ variant?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 41px 24px;
  &:last-child {
    ::after {
      content: none;
    }
  }
  ${getMQ('lg')} {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    &:first-child {
      flex: 0 0 100%;
      max-width: 100%;
    }
    &:nth-child(n + 2) {
      ${borderTopLeft()}
    }
    &:last-child {
      ::after {
        border-right: none;
      }
    }
  }
  .quality-box-wrapper__title {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #222222;
    opacity: 0.7;
    margin-bottom: 12px;
  }
  .quality-box-wrapper__img {
    width: 88px;
    height: 88px;
  }
  .quality-box-wrapper__text {
    display: flex;
    ${getMQ('lg')} {
      flex-direction: column;
      align-items: center;
      padding-top: 15px;
    }
    .quality-box-wrapper__inner-text {
      margin: 20px 0;
      font-style: normal;
      font-weight: 400;
      font-size: ${({ variant }) => (variant === 'no-image' ? '16px' : '14px')};
      text-transform: ${({ variant }) =>
        variant === 'no-image' ? 'uppercase' : 'none'};
      line-height: ${({ variant }) =>
        variant === 'no-image' ? '110%' : '140%'};
      letter-spacing: 0.01em;
      color: #222222;
      text-align: left;
      margin-left: ${({ variant }) => (variant === 'no-image' ? '0' : '25px')};
      ${getMQ('lg')} {
        margin-left: 0;
        text-align: center;
      }
      :first-child {
        ${getMQ('lg')} {
          font-weight: 400;
          font-size: 20px;
          line-height: 120%;
          text-align: center;
        }
      }
    }
  }
  ${borderBottom()}
  ${getMQ('lg')} {
    ::after {
      content: none;
    }
  }
`;

export const CoffeeWrapper = styled.div<{ variant?: string }>`
  margin-top: 50px;
  h3 {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    margin-bottom: 15px;

    ${({ variant }) =>
      variant === 'big-text'
        ? `font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 130%;`
        : ''}

    ${getMQ('lg')} {
      font-weight: 400;
      font-size: 30px;
      line-height: 130%;

      text-align: center;
      letter-spacing: 0.06em;
    }
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.02em;
    ${({ variant }) =>
      variant === 'big-text'
        ? `font-weight: 400;
            font-size: 14px;
            line-height: 140%;`
        : ''}
    ${getMQ('lg')} {
      width: 737px;
      margin: 0 auto;
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.03em;
    }
  }
`;

export const CoffeeBoxWrapper = styled.div`
  width: 100%;
  max-width: 282px;
  margin-top: 55px;
  img {
    width: 282px;
    height: 351px;
  }
`;

export const CoffeeBoxTextWrapper = styled.div<{ variant?: string }>`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 16px;
  }

  h4 {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    ${({ variant }) =>
      variant === 'big-text'
        ? `font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 130%;`
        : ''}
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    ${({ variant }) =>
      variant === 'big-text'
        ? `font-weight: 400;
            font-size: 14px;
            line-height: 140%;`
        : ''}

    display: inline-flex;
    &:last-child {
      font-weight: 700;
      font-size: 18px;
      line-height: 110%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 0;
    }
  }
`;

export const CoffeesWrapper = styled.div`
  display: flex;
  gap: 24px;
  overflow-y: scroll;
  ${getMQ('lg')} {
    justify-content: center;
    overflow-y: hidden;
  }
`;

export const BannerWrapper = styled.div`
  background-color: #c47d30;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  align-self: center;
  ${getMQ('lg')} {
    flex-direction: row;
    padding: 32px;
    max-width: 1143px;
    margin: 0 auto;
  }
  .banner-wrapper__text {
    margin-left: 10px;
    ${getMQ('lg')} {
      margin-left: 50px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 130%;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      margin: 50px 0;
      ${getMQ('lg')} {
        width: 276px;
        margin-top: 0;
        margin-bottom: 30px;
      }
    }
    ${ButtonStyled} {
      align-self: flex-start;
      ${getMQ('lg')} {
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
      }
    }
  }
`;

export const BannerImageWrapper = styled.div`
  background: url('/coffee-banner.jpg');
  width: 311px;
  height: 400px;
  background-size: cover;
  background-position: 32% 75%;
  ${getMQ('lg')} {
    width: 647px;
    height: 256px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 290px;
  background-color: #222222;
  ${getMQ('lg')} {
    height: 590px;
  }
`;
