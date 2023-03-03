import { StepNumber } from '../../components/step-number';
import { SimpleLayout } from '../../layouts/simple-layout';
import { QuestionWrapper, BoxesWrapper } from './style';
import { useCallback, useEffect, useReducer, useRef } from 'react';
import { InitialState, QuestionProps } from './types';
import { CSSTransition } from 'react-transition-group';
import { questionReducer, QUESTION_ACTIONS } from '../../reducers/question';
import { Footer } from './footer';
import { BoxAnswer } from './box-answer';
import { ResultContainer } from './result-container';

export const initialState: InitialState = {
  showBackButton: false,
  indexAnswerSelected: null,
  currentIndexQuestion: 0,
  step: 'SHOW_QUESTION',
  answerSelected: null,
};

export function Question({ questions, onComplete }: QuestionProps) {
  const [state, dispatch] = useReducer(questionReducer, initialState);
  const nodeRef = useRef(null);

  const { answers } = questions[state.currentIndexQuestion];

  const onSelectItem = useCallback(
    (i: number) => {
      const answerSelected = questions[state.currentIndexQuestion].answers[i];
      dispatch({
        type: QUESTION_ACTIONS.SET_ANSWER_SELECTED,
        payload: answerSelected,
      });
      dispatch({
        type: QUESTION_ACTIONS.SET_INDEX_ANSWER_SELECTED,
        payload: i,
      });
    },
    [state.currentIndexQuestion, questions],
  );

  const onResult = useCallback(() => {
    onComplete(true);
  }, [onComplete]);

  const onContinue = async () => {
    dispatch({ type: QUESTION_ACTIONS.SHOW_ANSWER });
    await new Promise((res) => setTimeout(res, 3000));
    dispatch({
      type: QUESTION_ACTIONS.SET_INDEX_ANSWER_SELECTED,
      payload: null,
    });
    dispatch({
      type: QUESTION_ACTIONS.INCREASE_CURRENT_INDEX_QUESTION,
    });
    dispatch({ type: QUESTION_ACTIONS.SHOW_QUESTION });
  };

  const onBack = async () => {
    dispatch({
      type: QUESTION_ACTIONS.SET_INDEX_ANSWER_SELECTED,
      payload: null,
    });
    dispatch({
      type: QUESTION_ACTIONS.DECREASE_CURRENT_INDEX_QUESTION,
    });
    dispatch({ type: QUESTION_ACTIONS.SHOW_QUESTION });
  };

  useEffect(() => {
    if (state.currentIndexQuestion > 0) {
      dispatch({ type: QUESTION_ACTIONS.SHOW_BACK_BUTTON });
    } else {
      dispatch({ type: QUESTION_ACTIONS.HIDE_BACK_BUTTON });
    }
  }, [state.currentIndexQuestion]);
  const transformItem = state.currentIndexQuestion === 1;
  return (
    <SimpleLayout>
      <CSSTransition
        in={state.step === 'SHOW_QUESTION'}
        timeout={500}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <QuestionWrapper>
          <StepNumber
            steps={questions.length}
            activeIndex={state.currentIndexQuestion}
          />
          <h2>{questions[state.currentIndexQuestion].question}</h2>
          <BoxesWrapper makeTransform={transformItem}>
            {answers.map((answer, i) => (
              <BoxAnswer
                className={`box-answer__item-${i}${
                  transformItem ? '--transform' : ''
                }`}
                key={answer.title}
                title={answer.title}
                text={answer.text}
                img={answer.img}
                bgColor={answer.bgColor}
                onSelect={() => onSelectItem(i)}
                isSelected={
                  state.indexAnswerSelected !== null
                    ? i === state.indexAnswerSelected
                    : null
                }
                variant={state.currentIndexQuestion === 1 ? 'small' : ''}
              />
            ))}
          </BoxesWrapper>
          <Footer
            showBackButton={state.showBackButton}
            showContinueButton={state.indexAnswerSelected !== null}
            onContinue={
              state.currentIndexQuestion + 1 === questions.length
                ? onResult
                : onContinue
            }
            onBack={onBack}
          />
        </QuestionWrapper>
      </CSSTransition>

      <CSSTransition
        in={state.step === 'SHOW_ANSWER'}
        timeout={500}
        classNames="step"
        unmountOnExit
        nodeRef={nodeRef}
      >
        {state.answerSelected ? (
          <ResultContainer {...state.answerSelected} />
        ) : (
          <div />
        )}
      </CSSTransition>
    </SimpleLayout>
  );
}
