// @flow

import type { State, Action, Operator, Digit, Comma } from '../types';
import {calculate} from './calculate';

const initialState: State = {
  currentCompute: '',
  result: null,
  previousComputes: [],
  showHistory: false,
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

    case 'CALCULATE': {
      const { previousComputes, currentCompute } = state;
      return {
        ...state,
        previousComputes: appendIfValid(previousComputes, currentCompute),
        result: calculate(currentCompute),
      };
    }

    case 'CLEAR':
      return {
        ...state,
        currentCompute: '',
        result: null,
      };

    case 'CALL_MONKEYS':
      const { operation } = action;
      return {
        ...state,
        currentCompute: operation,
        previousComputes: appendIfValid(state.previousComputes, operation),
        result: calculate(operation)
      };

    case 'TOGGLE_HISTORY':
      return {
        ...state,
        showHistory: !state.showHistory,
      };

    default: {
      // eslint-disable-next-line no-unused-vars
      const typeCheck: 'type' & 'check' = action;
      return state;
    }
  }
}

function appendIfValid(
  previousComputes: string[], 
  operation: string
): string[] {
  return !isNaN(calculate(operation))
    ? [...previousComputes, operation]
    : previousComputes;
}

function handleKeyPress(
  state: State, 
  key: Operator | Digit | Comma
): State {
  if (state.result !== null) {
    return {
      ...state,
      result: null,
      currentCompute: '' + key
    };
  } else {
    return {
      ...state,
      currentCompute: state.currentCompute + key,
    };
  }
}