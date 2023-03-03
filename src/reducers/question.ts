import { initialState } from '../pages/question';
import { InitialState, Answer } from '../pages/question/types';

type SetIndexAnswerSelected = typeof QUESTION_ACTIONS.SET_INDEX_ANSWER_SELECTED;
type ShowBackButton = typeof QUESTION_ACTIONS.SHOW_BACK_BUTTON;
type HideBackButton = typeof QUESTION_ACTIONS.HIDE_BACK_BUTTON;
type IncreaseCurrentIndexQuestion =
  typeof QUESTION_ACTIONS.INCREASE_CURRENT_INDEX_QUESTION;
type DecreaseCurrentIndexQuestion =
  typeof QUESTION_ACTIONS.DECREASE_CURRENT_INDEX_QUESTION;
type ShowAnswer = typeof QUESTION_ACTIONS.SHOW_ANSWER;
type ShowQuestion = typeof QUESTION_ACTIONS.SHOW_QUESTION;
type SetAnswerSelected = typeof QUESTION_ACTIONS.SET_ANSWER_SELECTED;
type SetIndexAnswerSelectedAction = {
  type: SetIndexAnswerSelected;
  payload: number | null;
};

type SetAnswerSelectedAction = {
  type: SetAnswerSelected;
  payload: Answer;
};
type IGeneralAction = {
  type:
    | ShowBackButton
    | HideBackButton
    | IncreaseCurrentIndexQuestion
    | DecreaseCurrentIndexQuestion
    | ShowAnswer
    | ShowQuestion;
  payload?: number | null;
};
export enum QUESTION_ACTIONS {
  'SHOW_BACK_BUTTON' = 'SHOW_BACK_BUTTON',
  'HIDE_BACK_BUTTON' = 'HIDE_BACK_BUTTON',
  'SET_INDEX_ANSWER_SELECTED' = 'SET_INDEX_ANSWER_SELECTED',
  'INCREASE_CURRENT_INDEX_QUESTION' = 'INCREASE_CURRENT_INDEX_QUESTION',
  'DECREASE_CURRENT_INDEX_QUESTION' = 'DECREASE_CURRENT_INDEX_QUESTION',
  'SHOW_ANSWER' = 'SHOW_ANSWER',
  'SHOW_QUESTION' = 'SHOW_QUESTION',
  'SET_ANSWER_SELECTED' = 'SET_ANSWER_SELECTED',
}

export function questionReducer(
  state: InitialState = initialState,
  action:
    | IGeneralAction
    | SetIndexAnswerSelectedAction
    | SetAnswerSelectedAction,
): InitialState {
  switch (action.type) {
    case QUESTION_ACTIONS['SHOW_BACK_BUTTON']:
      return { ...state, showBackButton: true };

    case QUESTION_ACTIONS['HIDE_BACK_BUTTON']:
      return { ...state, showBackButton: false };

    case QUESTION_ACTIONS['SET_INDEX_ANSWER_SELECTED']:
      return {
        ...state,
        indexAnswerSelected: action.payload !== null ? action.payload : null,
      };
    case QUESTION_ACTIONS['INCREASE_CURRENT_INDEX_QUESTION']:
      return { ...state, currentIndexQuestion: state.currentIndexQuestion + 1 };

    case QUESTION_ACTIONS['DECREASE_CURRENT_INDEX_QUESTION']:
      return { ...state, currentIndexQuestion: state.currentIndexQuestion - 1 };

    case QUESTION_ACTIONS['SHOW_ANSWER']:
      return { ...state, step: 'SHOW_ANSWER' };

    case QUESTION_ACTIONS['SHOW_QUESTION']:
      return { ...state, step: 'SHOW_QUESTION' };

    case QUESTION_ACTIONS['SET_ANSWER_SELECTED']:
      return {
        ...state,
        answerSelected: action.payload ? action.payload : null,
      };

    default:
      return state;
  }
}
