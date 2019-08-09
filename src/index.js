import React from 'react';
import './fixtimerbug';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import { Provider } from 'react-redux';
import { store, persistor } from './store';

import App from './App';

export default function index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
