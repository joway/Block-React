import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reduxApi from './config/restConfig'
const rootReducer = combineReducers({
  ...reduxApi.reducers,
  routing: routerReducer
});

export default rootReducer;
