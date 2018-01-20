// @flow
import React from 'react';
import { Calculator, type Props as CalculatorProps, formatOperation } from "../Calculator";
import { mount, ReactWrapper } from "enzyme";
import type { Operator, Digit } from '../../types';


describe('Calculator component', () => {
  it('clear() is called when the c key is clicked', () => {
    // given
    const clear = jest.fn();
    const { wrapper } = setup({ clear });

    // when
    wrapper.find('button').first().simulate('click');

    // then
    expect(clear.mock.calls.length).toBe(1);
  });

  it('pressDigit() is called when a digit key is clicked', () => {
    // given
    const pressDigit = jest.fn();
    const { wrapper } = setup({ pressDigit });

    // when
    wrapper.find('button').at(3).simulate('click');

    // then
    expect(pressDigit.mock.calls.length).toBe(1);
  });

  it('pressOperator() is called when an operator key is clicked', () => {
    // given
    const pressOperator = jest.fn();
    const { wrapper } = setup({ pressOperator });

    // when
    wrapper.find('button').at(16).simulate('click');

    // then
    expect(pressOperator.mock.calls.length).toBe(1);
  });

  it('calculate() is called and the = key is clicked', () => {
    // given
    const calculate = jest.fn();
    const { wrapper } = setup({ calculate });

    // when
    wrapper.find('button').at(18).simulate('click');

    // then
    expect(calculate.mock.calls.length).toBe(1);
  });

  it('pressComma() is called and the . key is clicked', () => {
    // given
    const pressComma = jest.fn();
    const { wrapper } = setup({ pressComma });

    // when
    wrapper.find('button').at(12).simulate('click');

    // then
    expect(pressComma.mock.calls.length).toBe(1);
  });
});

describe('Operation formatter', () => {
  it('should formatte correctly the operation', () => {
    // given
    const operation = '1*3+4/3-4';

    // when
    const formatted = formatOperation(operation)

    // then
    expect(formatted).toEqual('1 × 3 + 4 ÷ 3 - 4');
  });

});

type Setup = {
  props: CalculatorProps,
  wrapper: ReactWrapper,
};

function setup(overloadedProps = {}): Setup {
  const defaultProps: CalculatorProps = {
    currentCompute: '',
    result: 5,
    clear: () => {},
    calculate: () => {},
    pressDigit: (digit: Digit) => {},
    pressOperator: (operator: Operator) => {},
    pressComma: () => {},
    callMonkeys: () => {},
  }
  const props = { ...defaultProps, ...overloadedProps };
  const wrapper = mount(<Calculator {...props} />)
  return { props, wrapper };
}