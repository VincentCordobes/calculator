// @flow
import React from 'react';
import Screen from '../Screen/Screen';
import Button from '../Button/Button';
import './calculator.css'

// Types
import type { Operator, Digit } from '../types';

export const ALL_OPERATORS: Operator[] = ['/', '*', '-', '+'];
export const ALL_DIGITS: Digit[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

export type Props = {};

export class Calculator extends React.Component<Props> {

  render() {
    return (
      <div className="card">
        <Screen operation="1 + 3 - 2" result={2} />
        <div className="keyboard">
          <div>
            <Button>C</Button>
            <Button large>list</Button>
            {ALL_DIGITS.map(number => (
              <Button
                key={number}
              >
                {number}
              </Button>
            ))}
            <Button>.</Button>
            <Button><span role="img" aria-label="monkey!">🙊</span></Button>
          </div>
          <div>
            {ALL_OPERATORS.map(operator => (
              <Button key={operator} highlight>
                {operator}
              </Button>
            ))}
            <Button highlight>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;