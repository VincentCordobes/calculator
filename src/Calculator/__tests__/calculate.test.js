// @flow
import { calculate } from '../calculate';

describe('calculate', () => {
  it("should evaluate '+' operator", () => {
    // given 
    const expression = '1 + 2 + 3';

    // when
    const result = calculate(expression)

    // then
    expect(result).toEqual(6);
  })

  it("should evaluate '-' operator", () => {
    // given 
    const expression = '4 + 2 - 5';

    // when
    const result = calculate(expression)

    // then
    expect(result).toEqual(1);
  })

  it("should evaluate '*' operator", () => {
    // given 
    const expression = '4 * 2 * 5';

    // when
    const result = calculate(expression)

    // then
    expect(result).toEqual(40);
  })

  it("should evaluate '/' operator", () => {
    // given 
    const expression = '4 / 2';

    // when
    const result = calculate(expression)

    // then
    expect(result).toEqual(2);
  })

  it('should respect operator precedence', () => {
    // given 
    const expression = '4 + 2 + 3 * 5';

    // when
    const result = calculate(expression)

    // then
    expect(result).toEqual(21);
  })
});


describe('validate the expression', () => {
  it("should return NaN if the expression is invalid", () => {
    // given 
    const expression = '"attack!".toString()';

    // when
    const result = calculate(expression)

    // then
    expect(result).toEqual(NaN);
  })
})
