// @flow

const VALID_EXPRESSION = /^([-+/*]?\d+(\.\d+)?)+/;

export function calculate(expression: string): number {
  let result = NaN;
  if (VALID_EXPRESSION.test(expression)) {
    try {
      // eslint-disable-next-line no-eval
      result = eval(expression); // This is a quickwin :)
    } catch (e) { }
  }
  return result;
}