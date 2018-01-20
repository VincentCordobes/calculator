// @flow
import React from 'react';
import {connect} from 'react-redux';
import './history.css';
import type { State } from '../types';
import { formatOperation } from '../Calculator/Calculator';
import { calculate } from '../Calculator/calculate';

type Props = {
  operations: string[];
  display: boolean
}

type HistoryState = {
  search: string,
}

export class History extends React.Component<Props, HistoryState> {
  state = { search: '' }

  render() {
    const { display, operations } = this.props;
    const { search } = this.state;
    if (!display) {
      return null;
    }
    return (
      <div className="history">
        <h2 className="history-header">History</h2>
        <input
          placeholder="Search for previous operation"
          type="text"
          className="search"
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
        />
        <ul>
          {searchIn(search, operations).map((op, i) => 
            <li key={i}>{formatOperation(op)} = {calculate(op)}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect((state: State): Props => ({
  operations: state.previousComputes,
  display: state.showHistory,
}))(History)

export function searchIn(text: string, operations: string[]): string[] {
  const wholeOperation = (op) => op + '=' + calculate(op);

  return operations.filter(op =>
    wholeOperation(op).indexOf(text) !== -1
  );
}