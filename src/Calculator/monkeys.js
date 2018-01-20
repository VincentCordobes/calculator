// @flow
import { ALL_OPERATORS, ALL_DIGITS } from "./Calculator";
import { calculate } from "./calculate";

export function generateValidOperation(maxLength: number): string {

  let validOperationFound = '';
  while (!validOperationFound) {
    const operation = randomOperation(maxLength);
    if (!isNaN(calculate(operation))) {
      validOperationFound = operation;
    }
  }
  return validOperationFound;
}

function randomOperation(maxLength: number): string {
  const KEYS = [...ALL_OPERATORS, ...ALL_DIGITS, '.'];

  const operationLength = getRandomNumber(1, maxLength);
  let acc = '';
  for(let i = 0; i < operationLength; i++) {
    acc += KEYS[getRandomInt(0, KEYS.length)];
  }
  return acc;
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(getRandomNumber(min, max));
}

function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}