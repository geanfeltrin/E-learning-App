import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './Modules/rootReducer';
import rootSaga from './Modules/rootSaga';
import persistReducer from './persistReducers';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
  : compose(applyMiddleware(...middlewares));

const store = createStore(persistReducer(rootReducer), composer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
