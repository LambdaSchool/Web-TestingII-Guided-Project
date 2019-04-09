import React from 'react';
import * as rtl from 'react-testing-library';
import Container from './Container';


describe('Container', () => {
  // actual tests
  it('outputs "hello world"', () => {
    const wrapper = rtl.render(<Container />);
    // console.log(wrapper.debug())
    expect(wrapper.getByText('Hello, World!'));
  });
});
