// store.js

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers/reducer';

const store = createStore(newsReducer, applyMiddleware(thunk));

export default store;
