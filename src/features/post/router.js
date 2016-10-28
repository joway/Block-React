import React from "react";
import PostContainer from "./containers/PostContainer";

export default {
  path: 'post',
  name: 'Post',
  childRoutes: [
    { path: ':id', component: PostContainer }
  ]
};
