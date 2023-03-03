import styled from 'styled-components';

export const AnchorStyled = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.03em;
  cursor: pointer;
  &::after {
    position: absolute;
    content: '';
    height: 1px;
    bottom: -3px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: #222222;
  }
`;
