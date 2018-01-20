// @flow
import React from 'react';
import { connect } from 'react-redux';
import Screen from '../Screen/Screen';
import Button from '../Button/Button';
import './calculator.css'
import { clear, pressDigit, pressOperator, calculate, pressComma, callMonkeys } from './actions';

// Types
import type { Operator, Digit } from '../types';

export const ALL_OPERATORS: Operator[] = ['/', '*', '-', '+'];
export const ALL_DIGITS: Digit[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

export type Props = {
  currentCompute: string,
  result: number | null,
  clear: () => void,
  calculate: () => void,
  pressDigit: (digit: Digit) => void,
  pressOperator: (operator: Operator) => void,
  pressComma: () => void,
  callMonkeys: () => void,
};

export class Calculator extends React.Component<Props> {

  componentDidMount() {
    const SPACE_KEY = 32;

    window.onkeyup= (e) => {
      if (e.keyCode === SPACE_KEY) {
        this.props.callMonkeys();
      }
    }
  }

  render() {
    const { props } = this;
    return (
      <div className="card">
        <Screen operation={formatOperation(props.currentCompute)} result={props.result} />
        <div className="keyboard">
          <div>
            <Button onPress={props.clear}>C</Button>
            <Button large>list</Button>
            {ALL_DIGITS.map(number => (
              <Button
                key={number}
                onPress={() => props.pressDigit(number)}
              >
                {number}
              </Button>
            ))}
            <Button onPress={props.pressComma}>.</Button>
            <Button onPress={props.callMonkeys}><span role="img" aria-label="monkey!">🙊</span></Button>
          </div>
          <div>
            {ALL_OPERATORS.map(operator => (
              <Button key={operator} highlight onPress={() => props.pressOperator(operator)}>
                {toString(operator)}
              </Button>
            ))}
            <Button highlight onPress={props.calculate}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(state => state, {
  clear,
  calculate,
  pressDigit,
  pressOperator,
  pressComma,
  callMonkeys,
})(Calculator);

function toString(operator: Operator): string {
  switch (operator) {
    case '+':
      return '+';
    case '/':
      return '÷';
    case '-':
      return '-';
    case '*':
      return '×';
    default: {
      // eslint-disable-next-line no-unused-vars
      const typeCheck: 'type' & 'check' = operator;
      throw new Error(`Unexpected operator case ${operator}`);
    }
  }
}

export function formatOperation(operation: string): string {
  const surroundSpaces = (c) => ' ' + toString(c) + ' ';

  const re = (op) => new RegExp(`\\${op}`, 'g');

  return ALL_OPERATORS.reduce((acc, op) => (
    acc.replace(re(op), surroundSpaces(op))
  ), operation);
}