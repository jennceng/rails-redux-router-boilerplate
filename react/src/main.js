import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './sharedResources/store/configureStore';
import routes from './sharedResources/routes';

import Root from './Root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


$(document).ready(function() {
  let reactApp = document.getElementById('react-app');
  if(reactApp) {
    ReactDOM.render(
      <Root store={store} history={history} routes={routes} />,
      document.getElementById('react-app')
    );
  }
});
