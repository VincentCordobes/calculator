// @flow
import { generateValidOperation } from './monkeys';
import type { Digit, Operator } from '../types';

export type Clear = {
  type: 'CLEAR',
}
export function clear(): Clear {
  return {
    type: 'CLEAR',
  };
}

export type Calculate = {
  type: 'CALCULATE',
}
export function calculate(): Calculate {
  return {
    type: 'CALCULATE',
  };
}

export type PressDigit = {
  type: 'PRESS_DIGIT',
  digit: Digit,
}

export function pressDigit(digit: Digit): PressDigit {
  return {
    type: 'PRESS_DIGIT',
    digit,
  };
}

export type PressOperator = {
  type: 'PRESS_OPERATOR',
  operator: Operator,
}
export function pressOperator(operator: Operator): PressOperator {
  return {
    type: 'PRESS_OPERATOR',
    operator,
  };
}

export type PressComma = {
  type: 'PRESS_COMMA',
}
export function pressComma(): PressComma {
  return {
    type: 'PRESS_COMMA',
  };
}

export type CallMonkeys = {
  type: 'CALL_MONKEYS',
  operation: string,
}
export function callMonkeys(): CallMonkeys {
  return {
    type: 'CALL_MONKEYS',
    operation: generateValidOperation(12),
  };
}