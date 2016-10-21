import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import { createReducer } from '../../utils/helpers';
import {
  AUTH_USER_LOGIN,
  AUTH_USER_LOGOUT,
  AUTH_USER_LOGIN_SUCCESS,
} from './constants';

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export default createReducer(initialState, {
  [AUTH_USER_LOGIN]: (state, payload) => {
    return Object.assign({}, state, {
      isAuthenticating: true,
      statusText: null
    });
  },
  [AUTH_USER_LOGOUT]: (state, payload) => {
    return Object.assign({}, state, {
      isAuthenticated: true,
      statusText: null
    });
  },
  [AUTH_USER_LOGIN_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      isAuthenticated: true,
      statusText: null
    });
  }
});
