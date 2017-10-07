import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import authForm from './auth-form';
import garden from './garden';

const reducer = combineReducers({user, authForm, garden});
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}));
const withDevToolsExtension = composeWithDevTools(middleware);
const store = createStore(reducer, withDevToolsExtension);

export default store;
export * from './user';
export * from './auth-form';
export * from './garden';