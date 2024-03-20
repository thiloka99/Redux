import {configureStore} from '@reduxjs/toolkit';
//import { combineReducers, createStore } from "redux";
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//const store = createStore();

export default store; 
