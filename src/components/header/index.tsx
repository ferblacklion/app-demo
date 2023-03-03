import styled from 'styled-components';
import getMQ from '../../utils/media-queries';
import { Burger } from '../burger';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 155px;
  background-color: #222222;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleWrapper = styled.div`
  margin-left: 38px;
  ${getMQ('lg')} {
    margin: 0 auto;
    padding-left: 73px;
  }
  h1 {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #ffffff;
    ${getMQ('lg')} {
      font-weight: 700;
      font-size: 32px;
      line-height: 150%;
    }
  }
`;
const MenuWrapper = styled.div`
  height: 32px;
  width: 32px;
  margin-right: 41px;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <h1>The Coffee Shop</h1>
      </TitleWrapper>
      <MenuWrapper>
        <Burger open={false} />
      </MenuWrapper>
    </HeaderWrapper>
  );
}
