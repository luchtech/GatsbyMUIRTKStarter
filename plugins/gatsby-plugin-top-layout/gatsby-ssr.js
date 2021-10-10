import * as React from 'react';
import TopLayout from './TopLayout';
import { store } from '../../src/app/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

export const wrapRootElement = ({ element }) => {
  let persistor = persistStore(store);
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TopLayout>{element}</TopLayout>
      </PersistGate>
    </ReduxProvider>
  );
};
