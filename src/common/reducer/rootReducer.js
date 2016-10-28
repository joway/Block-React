import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import rest from "./../rest";
const rootReducer = combineReducers({
  ...rest.reducers,
  routing: routerReducer
});

export default rootReducer;
