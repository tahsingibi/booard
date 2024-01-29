import { configureStore } from '@reduxjs/toolkit';
import { reducer as modals } from './actions/modal';

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      modals: modals,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    preloadedState,
  });

  return store;
}

export const store = createStore();
