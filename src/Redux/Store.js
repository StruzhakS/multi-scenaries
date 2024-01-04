import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './Reducer';

const scenariesPersistConfig = {
  key: 'scenaries',
  storage,
};

const persistedScenReducer = persistReducer(scenariesPersistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    scen: persistedScenReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['transactions.date'],
      },
    }),
});

export const persistor = persistStore(store);
