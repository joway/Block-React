import React from 'react';
import PhotoContainer from './containers/PhotoContainer';

export default {
  path: 'photo',
  name: 'photo',
  childRoutes: [
    { path: '', component: PhotoContainer , isIndex: true},
  ],
};
