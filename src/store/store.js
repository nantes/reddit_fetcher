import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

//TODO implement saga
//import createSagaMiddleware from 'redux-saga';

//export const sagaMiddleware = createSagaMiddleware();

//export const middlewares = [ReduxThunk, sagaMiddleware];
export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore,
);

export const store = createStoreWithMiddleware(reducers);
