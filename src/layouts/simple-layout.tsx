import styled from 'styled-components';
import { Header } from '../components/header';
export const SimpleLayoutWrapper = styled.div`
  .step-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  .step-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all ease 0.3s;
  }
  .step-exit {
    position: absolute;
    left: 20px;
    right: 20px;
    opacity: 1;
    transform: scale(1);
  }
  .step-exit-active {
    opacity: 0;
    transform: scale(0.5);
    transition: all ease 0.3s;
  }
`;
export function SimpleLayout({ children }: React.PropsWithChildren) {
  return (
    <SimpleLayoutWrapper>
      <Header />
      {children}
    </SimpleLayoutWrapper>
  );
}
