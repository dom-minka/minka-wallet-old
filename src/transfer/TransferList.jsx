import React from 'react';
import TransferItem from './TransferItem';

export default class TodoList extends React.Component {
  render() {
    return (
      <section className="main">
        <ul className="transfer-list">
          {this.props.transfers.map(item =>
            <TransferItem
                      text={item.get('text')} />
          )}
        </ul>
      </section>
    );
  }
};
