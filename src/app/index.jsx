import React from 'react';
import ReactDOM from 'react-dom';

//redux and immutable
import {List, Map} from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

// incuding material-ui setup
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {TransferAppContainer} from '../transfer/TransferApp';
//import Main from './Main';

// Redux store
const store = createStore(reducer);
// dispatch the SET_STATE
store.dispatch({
  type: 'SET_STATE',
  state: {
    transfers: [
      {id: 1, source: 'Tea', destination: 'Domagoj', description:'para cerveza', amount: '15'},
      {id: 2, source: 'Laura', destination: 'Domagoj',description:'para cafe', amount: '13'},
      {id: 3, source: 'Tea', destination: 'Tea',description:'para libro', amount: '100'},
      {id: 4, source: 'Domagoj', destination: 'Tea',description:'beso', amount: '100'}
    ]
  }
});

const App = () => (
  <Provider store={store}>
      <TransferAppContainer />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
