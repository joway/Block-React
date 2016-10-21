import React from 'react';
import PostContainer from './containers/LabContainer';

export default {
  path: 'lab',
  name: 'lab',
  childRoutes: [
    { path: '', component: PostContainer , isIndex: true},
  ],
};
