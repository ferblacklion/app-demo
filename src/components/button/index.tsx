import React from 'react';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  justify-content: center;
  align-items: center;
  padding: 12px 15px 10px;
  gap: 10px;
  background: #222222;
  border-radius: 2.55px;
  font-family: 'Roboto Condensed';
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  border: 0;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: #ffffff;
    color: #222222;
  }
`;
export function Button({
  children,
  onClick,
}: React.PropsWithChildren & React.HTMLProps<HTMLButtonElement>) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}
