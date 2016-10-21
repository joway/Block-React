import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './../rootReducer';

const middlewares = [thunk];
let devToolsExtension = f => f;

/* istanbul ignore if  */
if (process.env.NODE_ENV === 'dev') {
  const createLogger = require('redux-logger');

  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);

  if (window.devToolsExtension) {
    devToolsExtension = window.devToolsExtension();
  }
}

export default function configureStore (baseHistory, initialState) {
  const routingMiddleware = routerMiddleware(baseHistory)
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(routingMiddleware, ...middlewares),
    devToolsExtension
  ));
  return store;
}
