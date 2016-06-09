import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

// incuding material-ui setup
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import TransferApp from '../transfer/TransferApp';
//import Main from './Main';

const transfers = List.of(
  Map({id: 1, source: 'Tea', destination: 'Domagoj', description:'para cerveza', amount: '15'}),
  Map({id: 2, source: 'Laura', destination: 'Domagoj',description:'para cafe', amount: '13'}),
  Map({id: 3, source: 'Domagoj', destination: 'Tea',description:'para libro', amount: '100'}),
  Map({id: 4, source: 'Domagoj', destination: 'Tea',description:'beso', amount: '100'})
);

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Header />
        <TransferApp transfers={ transfers } />
      </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
