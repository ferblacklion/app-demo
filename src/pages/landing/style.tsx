import styled from 'styled-components';
import { ButtonStyled } from '../../components/button';
import getMQ from '../../utils/media-queries';

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${getMQ('lg')} {
    flex-direction: row;
    .landing__image-wrapper {
      order: 1;
    }
    .landing__text-wrapper {
      order: 0;
    }
  }
`;
export const ImageWrapper = styled.div`
  background-image: url('/coffee.jpg');
  height: 144px;
  width: 100%;
  background-size: cover;
  ${getMQ('md')} {
    height: 325px;
  }
  ${getMQ('lg')} {
    min-width: 809px;
    height: 625px;
  }
`;
export const TextWrapper = styled.div`
  padding: 33px 24px;
  color: #222222;

  h2 {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 34px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.03em;
    margin-bottom: 20px;
  }

  ${getMQ('lg')} {
    padding: 148px 0 0 120px;
    width: 100%;

    h2 {
      width: 486px;
      height: 104px;
      font-weight: 400;
      font-size: 48px;
      line-height: 110%;
      letter-spacing: 0.06em;
    }
    p {
      width: 384px;
      font-weight: 400;
      font-size: 14.5px;
      line-height: 150%;
    }
  }
  ${ButtonStyled} {
    margin-top: 36px;
  }
`;
