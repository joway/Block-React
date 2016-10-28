import React from "react";
import TimeLineContainer from "./containers/TimeLineContainer";

export default {
  path: 'timeline',
  name: 'timeline',
  childRoutes: [
    { path: '', component: TimeLineContainer, isIndex: true },
  ],
};
