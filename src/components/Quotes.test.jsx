import React from 'react';
import * as rt from 'react-testing-library';
import Quotes from './Quotes';

afterEach(rt.cleanup);

// capture a collection easily:
//   -attach data-testid attributes all over the place
//   -wrapper.getAllByTestId

const quotes = [
  { id: '1', text: 'be mentored or be bad' },
  { id: '2', text: 'have fun' },
  { id: '3', text: 'use network tab' },
];

describe('Quotes', () => {
  it('returns a "sad" message if quotes array is empty', () => {
    const wrap = rt.render(<Quotes quotes={[]} />);
    expect(wrap.getByText(/sad/i));
  });

  it('returns a "sad" message if no quotes prop', () => {
    const wrap = rt.render(<Quotes />);
    expect(wrap.getByText(/sad/i));
  });

  it('puts to the dom the right number of quotes', () => {
    const wrap = rt.render(<Quotes quotes={quotes} />);
    const quotesArray = wrap.getAllByText(/your/i);
    expect(quotesArray).toHaveLength(quotes.length);
  });
});
