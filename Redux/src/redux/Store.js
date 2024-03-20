import { combineReducers, createStore } from "redux";
import counterReducer from './CounterR';

const reducer = combineReducers({
    counter: counterReducer
})

const store = createStore(reducer);

export default store;