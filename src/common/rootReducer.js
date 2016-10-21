import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reduxApi from './config/restConfig'
import AuthReducers from '../features/auth/reducers'
const rootReducer = combineReducers({
  auth: AuthReducers,
  ...reduxApi.reducers,
  routing: routerReducer,
});

export default rootReducer;
