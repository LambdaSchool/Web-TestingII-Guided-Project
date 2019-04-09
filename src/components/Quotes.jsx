import React from 'react';

export default function Quotes(props) {
  return (
    <>
      {
        props.quotes.map(q => (
          <div key={q.id}>{q.text}</div>
        ))
      }
    </>
  );
}
