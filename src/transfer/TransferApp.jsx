import React from 'react';
import TransferList from './TransferList'

export default class TransferApp extends React.Component {
  getItems() {
    return this.props.transfers || [];
  }
  render () {
    return (
      <div>
        <section className="transferapp">
          <TransferList transfers={this.props.transfers} />
        </section>
      </div>
    );
 }
};
