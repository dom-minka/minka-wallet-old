import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import TransferApp from '../transfer/TransferApp';

const transfers = List.of(
  Map({id: 1, text: 'me', to: 'you', amount: '15'}),
  Map({id: 2, text: 'him', to: 'other', amount: '13'}),
  Map({id: 3, text: 'me', to: 'me', amount: '100'})
);

ReactDOM.render(
  <TransferApp transfers={ transfers } />,
  document.getElementById('app')
);
