import React from "react";
import BullshitContainer from "./containers/BullshitContainer";

export default {
  path: 'bullshit',
  name: 'Bullshit',
  childRoutes: [
    { path: '', component: BullshitContainer, isIndex: true },
  ],
};
