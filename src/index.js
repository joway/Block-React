import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configStore from './common/config/configStore';
import routeConfig from './common/config/routeConfig';

const store = configStore(browserHistory, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

const root = document.createElement('div');
document.body.appendChild(root);


render(
  <Provider store={store}>
    <Router history={history} routes={routeConfig}/>
  </Provider>,
  root
);
