import * as React from 'react';
import TopLayout from './TopLayout';
import { CookiesProvider } from 'react-cookie';
import { store } from '../../src/app/store';
import { Provider as ReduxProvider } from 'react-redux';

export const wrapRootElement = ({ element }) => {
  return (
    <ReduxProvider store={store}>
      <CookiesProvider>
        <TopLayout>{element}</TopLayout>
      </CookiesProvider>
    </ReduxProvider>
  );
};
