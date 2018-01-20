// @flow
import * as React from 'react';
import './button.css';
import classNames from 'classnames';

type Props = {
  highlight?: boolean,
  large?: boolean,
  onPress?: Function,
  children: React.Node,
}

export default function Button({ children, highlight, large, onPress}: Props) {
  const className = classNames('button', { 
    'highlight': highlight ,
    'large': large,
  });
  return (
    <button onClick={onPress} className={className}>
      {children}
    </button>
  );
};