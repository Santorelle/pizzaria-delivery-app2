
import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './style.css';

import { App } from './App';
import {dataReducer} from './reducer';

const reducers = combineReducers({
  //reducers go here
  data: dataReducer,
});

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'));