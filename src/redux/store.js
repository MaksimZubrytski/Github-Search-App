const { createStore, combineReducers } = require("redux");
const { default: userReducer } = require("./user-reducer");

let reducers = combineReducers({
    userPage: userReducer
});

let store = createStore(reducers);

export default store;


window.store = store;