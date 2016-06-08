import React from 'react';
import TransferList from './TransferList';
import Paper from 'material-ui/Paper';

export default class TransferApp extends React.Component {
  getItems() {
    return this.props.transfers || [];
  }
  render () {
    return (
      <div>
          <TransferList transfers={this.props.transfers} />
      </div>
    );
 }
};
