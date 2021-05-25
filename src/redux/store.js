import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import repositoriesReducer from "./repositories-reducer";
import userReducer from "./user-reducer";

const reducers = combineReducers({
  userPage: userReducer,
  repositoriesData: repositoriesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store;
