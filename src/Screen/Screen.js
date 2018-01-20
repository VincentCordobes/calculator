// @flow
import React from 'react';
import './screen.css';

type Props = {
  operation: string,
  result: number | null,
}

export default function Screen(props: Props) {
  const result = isNaN(props.result)
    ? 'ERROR'
    : props.result;
  return (
    <div className="screen">
      <div className="operation">{props.operation}</div>
      <div className="result">{result}</div>
    </div>
  )
}