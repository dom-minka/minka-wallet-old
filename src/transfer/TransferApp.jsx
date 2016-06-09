import React from 'react';
import TransferList from './TransferList';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

// TODO: move to layout
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {connect} from 'react-redux';

export class TransferApp extends React.Component {
  getItems() {
    return this.props.transfers || [];
  }
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppBar
            title="misLukas"
            />
          <TransferList transfers={this.props.transfers} />
        </div>
      </MuiThemeProvider>
    );
 }
}

//connect to store
function mapStateToProps(state) {
  return {
    transfers: state.get('transfers')
  };
}

export const TransferAppContainer = connect(mapStateToProps)(TransferApp);
