const { createStore, combineReducers } = require("redux");
const { default: userReducer } = require("./user-reducer");

const reducers = combineReducers({ userPage: userReducer });

const store = createStore(reducers);

export default store;

window.store = store;
