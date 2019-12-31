import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers';
import promiseMiddleware from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';

const logger = createLogger({});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, promiseMiddleware),
);

export default store;
