import React from 'react';
import * as rtl from 'react-testing-library';
import Container from './Container';


describe('Container', () => {
  // actual tests
  it('outputs "hello world"', () => {
    const wrapper = rtl.render(<Container />);
    expect(wrapper.getByText('Hello, World!'));
  });

  it('does not output "loading..."', () => {
    const wrapper = rtl.render(<Container />);
    expect(wrapper.queryByText('Loading...')).toBeFalsy();
  });
});
