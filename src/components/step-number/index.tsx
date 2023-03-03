import styled from 'styled-components';

export const StepNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const StepNumberList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border: 1px solid #000;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }

    border-radius: 15px;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 11px;
    line-height: 150%;
    &.__active {
      background-color: #eeb426;
      color: #fff;
      border: none;
    }
    &.__inactive {
      background-color: #000;
      color: #fff;
      border: none;
    }
  }
`;
export function StepNumber({
  steps = 6,
  activeIndex = -1,
}: {
  steps?: number;
  activeIndex?: number;
}) {
  const stepsLen: number[] = new Array(steps).fill(0);
  return (
    <StepNumberWrapper>
      <StepNumberList>
        {stepsLen.map((_, i: number) => {
          const active = i === activeIndex ? '__active' : '';
          const isInactive = activeIndex > i ? '__inactive' : '';
          return (
            <li key={i} className={`${active} ${isInactive}`}>
              <span>{i + 1}</span>
            </li>
          );
        })}
      </StepNumberList>
    </StepNumberWrapper>
  );
}
