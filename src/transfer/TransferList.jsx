import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TransferItem from './TransferItem';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
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
