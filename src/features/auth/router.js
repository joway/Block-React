import React from 'react';
import LoginContainer from './containers/LoginContainer';
import LogoutContainer from './containers/LogoutContainer';
import RegisterContainer from './containers/RegisterContainer';
import ActivateContainer from './containers/ActivateContainer';

export default {
  path: 'auth',
  name: 'auth',
  childRoutes: [
    { path: 'login', component: LoginContainer },
    { path: 'logout', component: LogoutContainer },
    { path: 'register', component: RegisterContainer },
    { path: 'activate', component: ActivateContainer },
  ]
};
