import React from 'react';

export default function Quotes(props) {
  if (!props.quotes || !props.quotes.length) {
    return <div>Sad! No quotes!</div>;
  }

  return (
    <>
      {
        props.quotes.map(q => (
          <div
            data-testid='quote'
            key={q.id}>Here is your quote: {q.text}
          </div>
        ))
      }
    </>
  );
}
