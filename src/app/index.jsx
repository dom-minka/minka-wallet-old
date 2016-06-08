import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

// incuding material-ui setup
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TransferApp from '../transfer/TransferApp';

const transfers = List.of(
  Map({id: 1, text: 'me', to: 'you', amount: '15'}),
  Map({id: 2, text: 'him', to: 'other', amount: '13'}),
  Map({id: 3, text: 'me', to: 'me', amount: '100'})
);

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <TransferApp transfers={ transfers } />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
