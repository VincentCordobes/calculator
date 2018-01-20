// @flow
import React from 'react';
import { searchIn, History } from "./History";
import { mount } from 'enzyme';

describe('searchIn', () => {
  it('should return an operation when the oepration is matching', () => {
    // given 
    const operations = ['15081993', '40+2'];

    // when
    const res = searchIn('1508', operations);

    // then
    expect(res).toContain('15081993');
  })

  it('should return an operation when its result is matching', () => {
    // given 
    const operations = ['15081993', '40+2'];

    // when
    const res = searchIn('42', operations);

    // then
    expect(res).toContain('40+2');
  })

  it('should return an operation when both the operation and its result are matching', () => {
    // given 
    const operations = ['15081993', '40+2'];

    // when
    const res = searchIn('40+2=42', operations);

    // then
    expect(res).toContain('40+2');
  })

  it('should not return any result when the search input is wrong', () => {
    // given 
    const operations = ['15081993', '40+2'];

    // when
    const res = searchIn('40+2=3', operations);

    // then
    expect(res.length).toEqual(0);
  })
});


describe('History component', () => {
  it('should update the list results', () => {
    // given 
    const wrapper = mount(
      <History
        operations={['1+2', '5+3']}
        display={true}
      />
    );
    const input = wrapper.find('input');

    // when
    input.simulate('change', { target: { value: '1+2' } });

    // then
    const lis = wrapper.find('li');
    expect(lis.length).toEqual(1);
  })
})