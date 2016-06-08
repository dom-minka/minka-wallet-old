import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    return (
      <li className="transfer">
        <div className="view">
          <label>
            {this.props.text}
          </label>
        </div>
      </li>
    );
  }
};
