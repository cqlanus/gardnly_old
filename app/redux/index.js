import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';

const reducer = combineReducers({user});
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}));
const withDevToolsExtension = composeWithDevTools(middleware);
const store = createStore(reducer, withDevToolsExtension);

export default store;
export * from './user';