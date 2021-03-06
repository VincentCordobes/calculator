// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { Calculate, Clear, PressDigit, PressOperator, PressComma, CallMonkeys, ToggleHistory } from './Calculator/actions';

export type Digit =
  | 9 | 8 | 7 | 6 | 5 
  | 4 | 3 | 2 | 1 | 0;

export type Operator = 
  | '+' | '-' | '*' | '/';

export type Comma = '.';

export type State = {
  +currentCompute: string,
  +result: number | null,
  +previousComputes: string[],
  +showHistory: boolean,
};

export type Action =
  | Calculate
  | Clear
  | PressDigit
  | PressOperator
  | PressComma
  | CallMonkeys 
  | ToggleHistory

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;