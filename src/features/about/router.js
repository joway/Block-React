import React from 'react';
import PostContainer from './containers/AboutContainer';

export default {
  path: 'about',
  name: 'about',
  childRoutes: [
    { path: '', component: PostContainer , isIndex: true},
  ],
};
