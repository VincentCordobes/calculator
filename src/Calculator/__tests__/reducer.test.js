// @flow
import reducer from '../reducer';
import { pressDigit, pressOperator, calculate, clear, pressComma, callMonkeys, toggleHistory } from '../actions';
import type { State } from '../../types';

describe('calculator reducer', () => {
  it("should append digit to the current compute", () => {
    // given 
    const state = aState();
    const action = pressDigit(3);

    // when
    const newState= reducer(state, action)

    // then
    expect(newState).toEqual(aState({
      currentCompute: '3',
    }));
  })

  it("should append operator to the current compute", () => {
    // given 
    const state = aState({
      currentCompute: '2',
    });

    // when
    const newState= reducer(state, pressOperator('+'))

    // then
    expect(newState).toEqual(aState({
      currentCompute: '2+',
    }));
  })


  it("should calculate the result", () => {
    // given 
    const state = aState({
      currentCompute: '2+4+2',
    });

    // when
    const newState= reducer(state, calculate())

    // then
    expect(newState).toEqual(aState({
      currentCompute: '2+4+2',
      result: 8,
      previousComputes: ['2+4+2'],
    }));
  })

  it("should clear the previous compute when we press a digit", () => {
    // given 
    const state = reducer(
      aState({
        currentCompute: '2+4+2',
      }), calculate()
    );

    // when
    const newState = reducer(state, pressDigit(3))

    // then
    expect(newState.currentCompute).toEqual('3');
    expect(newState.result).toEqual(null);
  })

  it("should clear the previous compute when we press an operator", () => {
    // given 
    const state = reducer(
      aState({
        currentCompute: '2+4+2',
      }), calculate()
    );

    // when
    const newState = reducer(state, pressOperator('+'))

    // then
    expect(newState.currentCompute).toEqual('+');
    expect(newState.result).toEqual(null);
  })

  it("should append a comma when the key is pressed", () => {
    // given 
    const state = aState({
      currentCompute: '2+4+2',
    });
    const action = pressComma();

    // when
    const newState= reducer(state, action)

    // then
    expect(newState).toEqual(aState({
      currentCompute: '2+4+2.',
    }));
  })

  it("should clear the result and the current compute", () => {
    // given 
    const state = aState({
      currentCompute: '2+4+2',
      result: 8,
    });

    // when
    const newState = reducer(state, clear());

    // then
    expect(newState).toEqual(aState({
      currentCompute: '',
      result: null,
    }));
  })

  it("should add the current compute to the history", () => {
    // given 
    const state = aState({
      currentCompute: '2+4+2',
      result: null,
    });

    // when
    const newState = reducer(state, calculate());

    // then
    expect(newState).toEqual(aState({
      currentCompute: '2+4+2',
      result: 8,
      previousComputes: ['2+4+2'],
    }));
  })

  it("should show history", () => {
    // given 
    const state = aState({
      showHistory: false,
    });

    // when
    const newState = reducer(state, toggleHistory());

    // then
    expect(newState.showHistory).toBeTruthy();
  })

  it("should generate random computes when monkeys are called", () => {
    // given 
    const state = aState({
      currentCompute: '',
      result: null,
      previousComputes: [],
    });

    // when
    const newState = reducer(state, callMonkeys());

    // then
    expect(newState.currentCompute).toBeTruthy();
    expect(newState.result).toBeTruthy();
    expect(newState.previousComputes.length).toEqual(1);
  })
})


type StateShape = {
  +currentCompute?: string,
  +result?: number | null,
  +previousComputes?: string[],
  +showHistory?: boolean,
};
function aState(props: StateShape = {}): State {
  return {
    ...{
      currentCompute: '',
      result: null,
      previousComputes: [],
      showHistory: false,
    },
    ...props,
  };
}