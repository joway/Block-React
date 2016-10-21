import React from 'react';
import HomeContainer from './containers/HomeContainer';

export default {
  path: '/',
  name: 'home',
  childRoutes: [
    { path: 'home', component: HomeContainer, isIndex: true },
  ],
};
