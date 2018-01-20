// @flow

import type { State, Action, Operator, Digit, Comma } from '../types';
import {calculate} from './calculate';

const initialState: State = {
  currentCompute: '',
  result: null,
};

export default function calculator(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case 'PRESS_DIGIT':
      return handleKeyPress(state, action.digit);
    case 'PRESS_OPERATOR':
      return handleKeyPress(state, action.operator);
    case 'PRESS_COMMA':
      return handleKeyPress(state, '.');
    case 'CALCULATE':
      return {
        ...state,
        result: calculate(state.currentCompute),
      };
    case 'CLEAR':
      return initialState;
    case 'CALL_MONKEYS':
      return {
        currentCompute: action.operation,
        result: calculate(action.operation)
      };
    default: {
      // eslint-disable-next-line no-unused-vars
      const typeCheck: 'type' & 'check' = action;
      return state;
    }
  }
}

function handleKeyPress(
  state: State, 
  key: Operator | Digit | Comma
): State {
  if (state.result !== null) {
    return {
      ...initialState,
      currentCompute: '' + key
    };
  } else {
    return {
      ...state,
      currentCompute: state.currentCompute + key,
    };
  }
}