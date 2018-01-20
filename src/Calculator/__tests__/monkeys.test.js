// @flow

import { calculate } from "../calculate";
import { generateValidOperation } from "../monkeys";

describe('Random computes 🙈', () => {
  it('should generate a valid operation', () => {
    // given
    const operation = generateValidOperation(10);

    // when
    const result = calculate(operation) ;

    // then
    expect(isNaN(result)).toBeFalsy();
  })
})